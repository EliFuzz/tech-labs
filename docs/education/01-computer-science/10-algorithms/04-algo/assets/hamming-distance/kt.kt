fun hammingDistance(str1: String, str2: String): Int {
    require(str1.length == str2.length) { "Strings must be of equal length" }
    var distance = 0
    for (i in str1.indices) {
        if (str1[i] != str2[i]) {
            distance++
        }
    }
    return distance
}
