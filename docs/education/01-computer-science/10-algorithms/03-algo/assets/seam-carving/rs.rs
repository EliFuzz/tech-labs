use image::{GenericImageView, DynamicImage, ImageBuffer, Rgba};
use std::cmp;

fn compute_energy(image: &ImageBuffer<Rgba<u8>, Vec<u8>>) -> ImageBuffer<Rgba<u8>, Vec<u8>> {
    let width = image.width() as usize;
    let height = image.height() as usize;

    let mut energy = ImageBuffer::new(width as u32, height as u32);

    for y in 0..height {
        for x in 0..width {
            let dx = get_color_delta(image, x.saturating_sub(1), y, x.saturating_add(1), y);
            let dy = get_color_delta(image, x, y.saturating_sub(1), x, y.saturating_add(1));
            let energy_val = (dx * dx + dy * dy).sqrt() as u8;
            energy.put_pixel(x as u32, y as u32, Rgba([energy_val, energy_val, energy_val, 255]));
        }
    }

    energy
}

fn get_color_delta(image: &ImageBuffer<Rgba<u8>, Vec<u8>>, x1: usize, y1: usize, x2: usize, y2: usize) -> f64 {
    let x1_clamped = cmp::min(cmp::max(x1, 0), image.width() as usize - 1);
    let y1_clamped = cmp::min(cmp::max(y1, 0), image.height() as usize - 1);
    let x2_clamped = cmp::min(cmp::max(x2, 0), image.width() as usize - 1);
    let y2_clamped = cmp::min(cmp::max(y2, 0), image.height() as usize - 1);

    let c1 = image.get_pixel(x1_clamped as u32, y1_clamped as u32);
    let c2 = image.get_pixel(x2_clamped as u32, y2_clamped as u32);

    let dr = (c1[0] as f64 - c2[0] as f64).powi(2);
    let dg = (c1[1] as f64 - c2[1] as f64).powi(2);
    let db = (c1[2] as f64 - c2[2] as f64).powi(2);

    (dr + dg + db) / 3.0
}

fn find_vertical_seam(energy: &ImageBuffer<Rgba<u8>, Vec<u8>>) -> Vec<usize> {
    let width = energy.width() as usize;
    let height = energy.height() as usize;
    let mut dist_to = vec![vec![0.0; width]; height];
    let mut edge_to = vec![vec![0; width]; height];

    for y in 0..height {
        for x in 0..width {
            dist_to[y][x] = if y == 0 {
                energy.get_pixel(x as u32, y as u32)[0] as f64
            } else {
                std::f64::INFINITY
            };
        }
    }

    for y in 0..height - 1 {
        for x in 0..width {
            if x > 0 && dist_to[y + 1][x - 1] > dist_to[y][x] + energy.get_pixel(x as u32, (y + 1) as u32)[0] as f64 {
                dist_to[y + 1][x - 1] = dist_to[y][x] + energy.get_pixel(x as u32, (y + 1) as u32)[0] as f64;
                edge_to[y + 1][x - 1] = x;
            }
            if dist_to[y + 1][x] > dist_to[y][x] + energy.get_pixel(x as u32, (y + 1) as u32)[0] as f64 {
                dist_to[y + 1][x] = dist_to[y][x] + energy.get_pixel(x as u32, (y + 1) as u32)[0] as f64;
                edge_to[y + 1][x] = x;
            }
            if x < width - 1 && dist_to[y + 1][x + 1] > dist_to[y][x] + energy.get_pixel(x as u32, (y + 1) as u32)[0] as f64 {
                dist_to[y + 1][x + 1] = dist_to[y][x] + energy.get_pixel(x as u32, (y + 1) as u32)[0] as f64;
                edge_to[y + 1][x + 1] = x;
            }
        }
    }

    let mut min_energy_idx = 0;
    let mut min_energy = dist_to[height - 1][0];
    for x in 1..width {
        if dist_to[height - 1][x] < min_energy {
            min_energy = dist_to[height - 1][x];
            min_energy_idx = x;
        }
    }

    let mut seam = Vec::with_capacity(height);
    seam.push(min_energy_idx);

    for y in (0..height - 1).rev() {
        min_energy_idx = edge_to[y + 1][min_energy_idx];
        seam.push(min_energy_idx);
    }

    seam.reverse();
    seam
}

fn remove_vertical_seam(image: &mut ImageBuffer<Rgba<u8>, Vec<u8>>, seam: &[usize]) {
    let height = image.height() as usize;
    let width = image.width() as usize;
    for y in 0..height {
        let mut x = seam[y];
        while x < width - 1 {
            image.put_pixel(x as u32, y as u32, *image.get_pixel((x + 1) as u32, y as u32));
            x += 1;
        }
    }
    image.resize(width as u32 - 1, height as u32, image::imageops::FilterType::Lanczos3);
}
