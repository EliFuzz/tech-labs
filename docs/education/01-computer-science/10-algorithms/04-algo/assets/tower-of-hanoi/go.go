package main

func towerOfHanoi(n int, source, auxiliary, destination string) {
    if n == 1 {
        fmt.Println("Move disk 1 from", source, "to", destination)
        return
    }
    towerOfHanoi(n-1, source, destination, auxiliary)
    fmt.Println("Move disk", n, "from", source, "to", destination)
    towerOfHanoi(n-1, auxiliary, source, destination)
}
