#[derive(Clone, Copy)]
struct Point {
    x: f64,
    y: f64,
}

#[derive(Clone, Copy)]
struct Centroid {
    x: f64,
    y: f64,
}

fn k_means(points: &[Point], k: usize) -> Vec<Centroid> {
    let mut centroids: Vec<Centroid> = points.iter().take(k).map(|p| Centroid { x: p.x, y: p.y }).collect();

    loop {
        let mut clusters: Vec<Vec<Point>> = vec![Vec::new(); k];

        for point in points {
            let mut nearest_idx = 0;
            let mut nearest_dist = f64::INFINITY;
            for (i, centroid) in centroids.iter().enumerate() {
                let dist = (point.x - centroid.x).powi(2) + (point.y - centroid.y).powi(2);
                if dist < nearest_dist {
                    nearest_idx = i;
                    nearest_dist = dist;
                }
            }
            clusters[nearest_idx].push(*point);
        }

        let mut new_centroids: Vec<Centroid> = Vec::new();
        for cluster in &clusters {
            let sum_x: f64 = cluster.iter().map(|p| p.x).sum();
            let sum_y: f64 = cluster.iter().map(|p| p.y).sum();
            new_centroids.push(Centroid { x: sum_x / cluster.len() as f64, y: sum_y / cluster.len() as f64 });
        }

        if converged(&centroids, &new_centroids) {
            break;
        }
        centroids = new_centroids;
    }

    centroids
}

fn converged(old_centroids: &[Centroid], new_centroids: &[Centroid]) -> bool {
    old_centroids.iter().zip(new_centroids.iter()).all(|(old, new)| {
        (old.x - new.x).abs() < 1e-6 && (old.y - new.y).abs() < 1e-6
    })
}
