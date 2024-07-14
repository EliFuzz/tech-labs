use rand::Rng;

#[derive(Debug)]
struct WeightedItem<T> {
    item: T,
    weight: u32,
}

fn weighted_random<T>(items: &[WeightedItem<T>]) -> Option<&T> {
    let total_weight: u32 = items.iter().map(|item| item.weight).sum();
    let mut rng = rand::thread_rng();
    let random_weight: u32 = rng.gen_range(0..total_weight);

    let mut cumulative_weight = 0;
    for item in items {
        cumulative_weight += item.weight;
        if random_weight < cumulative_weight {
            return Some(&item.item);
        }
    }
    None
}
