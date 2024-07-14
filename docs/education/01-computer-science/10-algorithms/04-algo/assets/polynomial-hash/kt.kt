import kotlin.math.pow

class SimplePolynomialHash(private val base: Int = 17) {

    fun hash(word: String): Int {
        var hash = 0
        for (charIndex in word.indices) {
            hash += word[charIndex].toInt() * base.toDouble().pow(charIndex).toInt()
        }
        return hash
    }

    fun roll(prevHash: Int, prevWord: String, newWord: String): Int {
        var hash = prevHash
        val prevValue = prevWord[0].toInt()
        val newValue = newWord[newWord.length - 1].toInt()

        hash -= prevValue
        hash /= base
        hash += newValue * base.toDouble().pow(newWord.length - 1).toInt()

        return hash
    }
}

class PolynomialHash(private val base: Int = 37, private val modulus: Int = 101) {

    fun hash(word: String): Int {
        val charCodes = word.map { charToNumber(it) }

        var hash = 0
        for (charCode in charCodes) {
            hash *= base
            hash += charCode
            hash %= modulus
        }

        return hash
    }

    fun roll(prevHash: Int, prevWord: String, newWord: String): Int {
        var hash = prevHash

        val prevValue = charToNumber(prevWord[0])
        val newValue = charToNumber(newWord[newWord.length - 1])

        var prevValueMultiplier = 1
        for (i in 1 until prevWord.length) {
            prevValueMultiplier *= base
            prevValueMultiplier %= modulus
        }

        hash += modulus
        hash -= (prevValue * prevValueMultiplier) % modulus

        hash *= base
        hash += newValue
        hash %= modulus

        return hash
    }

    private fun charToNumber(char: Char): Int {
        var charCode = char.code

        val surrogate = char.code
        if (Character.charCount(surrogate) == 2) {
            val surrogateShift = 2.toDouble().pow(16).toInt()
            charCode += Character.codePointAt(char.toString(), 1) * surrogateShift
        }

        return charCode
    }
}
