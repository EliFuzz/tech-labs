fun isPalindrome(s: String): Boolean {
    var i = 0
    var j = s.length - 1
    val str = s.toLowerCase()
    while (i < j) {
        if (str[i] != str[j]) {
            return false
        }
        i++
        j--
    }
    return true
}
