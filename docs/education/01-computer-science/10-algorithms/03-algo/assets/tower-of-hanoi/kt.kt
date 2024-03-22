fun towerOfHanoi(n: Int, source: String, auxiliary: String, destination: String) {
    if (n == 1) {
        println("Move disk 1 from $source to $destination")
        return
    }
    towerOfHanoi(n - 1, source, destination, auxiliary)
    println("Move disk $n from $source to $destination")
    towerOfHanoi(n - 1, auxiliary, source, destination)
}
