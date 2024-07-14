fun caesarCipher(text: String, shift: Int): String {
    return text.map { char ->
        when {
            char in 'A'..'Z' -> ((char - 'A' + shift) % 26 + 'A'.toInt()).toChar()
            char in 'a'..'z' -> ((char - 'a' + shift) % 26 + 'a'.toInt()).toChar()
            else -> char
        }
    }.joinToString("")
}
