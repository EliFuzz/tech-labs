fn tower_of_hanoi(n: u32, source: char, auxiliary: char, destination: char) {
    if n == 1 {
        println!("Move disk 1 from {} to {}", source, destination);
        return;
    }
    tower_of_hanoi(n - 1, source, destination, auxiliary);
    println!("Move disk {} from {} to {}", n, source, destination);
    tower_of_hanoi(n - 1, auxiliary, source, destination);
}
