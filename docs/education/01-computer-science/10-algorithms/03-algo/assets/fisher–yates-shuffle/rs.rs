use rand::seq::SliceRandom;
use rand::thread_rng;

fn shuffle(arr: &mut [i32]) {
    let mut rng = thread_rng();
    arr.shuffle(&mut rng);
}
