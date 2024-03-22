package main

func hammingDistance(str1, str2 string) int {
    if len(str1) != len(str2) {
        return -1
    }
    distance := 0
    for i := 0; i < len(str1); i++ {
        if str1[i] != str2[i] {
            distance++
        }
    }
    return distance
}
