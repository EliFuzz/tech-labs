#[derive(Debug)]
struct Point {
    x: f64,
    y: f64,
}

fn distance(p1: &Point, p2: &Point) -> f64 {
    ((p1.x - p2.x).powi(2) + (p1.y - p2.y).powi(2)).sqrt()
}

fn knn(data: &[Point], target: &Point, k: usize) -> Vec<Point> {
    let mut sorted_data = data.to_vec();
    sorted_data.sort_by(|a, b| distance(a, target).partial_cmp(&distance(b, target)).unwrap());
    sorted_data[..k].to_vec()
}
