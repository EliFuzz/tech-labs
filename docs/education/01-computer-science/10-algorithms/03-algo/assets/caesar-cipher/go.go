package main

func caesarCipher(text string, shift int) string {
    result := ""
    for _, char := range text {
        if char >= 'A' && char <= 'Z' {
            result += string((int(char-'A')+shift)%26 + 'A')
        } else if char >= 'a' && char <= 'z' {
            result += string((int(char-'a')+shift)%26 + 'a')
        } else {
            result += string(char)
        }
    }
    return result
}
