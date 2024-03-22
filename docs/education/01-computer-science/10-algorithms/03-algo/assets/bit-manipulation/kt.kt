fun getBit(number: Int, bitPosition: Int): Int {
    return (number shr bitPosition) and 1
}

fun setBit(number: Int, bitPosition: Int): Int {
    return number or (1 shl bitPosition)
}

fun clearBit(number: Int, bitPosition: Int): Int {
    return number and (1 shl bitPosition).inv()
}

fun updateBit(number: Int, bitPosition: Int, bitValue: Int): Int {
    val mask = (1 shl bitPosition).inv()
    return (number and mask) or (bitValue shl bitPosition)
}

fun isEven(number: Int): Boolean {
    return (number and 1) == 0
}

fun isPositive(number: Int): Boolean {
    return number >= 0 && (number and 0x80000000.inv()) == 0
}

fun multiplyByTwo(number: Int): Int {
    return number shl 1
}

fun divideByTwo(number: Int): Int {
    return number shr 1
}

fun switchSign(number: Int): Int {
    return number.inv() + 1
}

fun multiply(a: Int, b: Int): Int {
    return when {
        b == 0 -> 0
        b > 0 -> a + multiply(a, b - 1)
        else -> -multiply(a, -b)
    }
}

fun multiplyUnsigned(x: Int, y: Int): Int {
    var result = 0
    var x = x
    var y = y
    while (y > 0) {
        if (y and 1 == 1) {
            result += x
        }
        x = x shl 1
        y = y shr 1
    }
    return result
}

fun countSetBits(number: Int): Int {
    var count = 0
    var number = number
    while (number != 0) {
        count += number and 1
        number = number shr 1
    }
    return count
}

fun bitsDiff(a: Int, b: Int): Int {
    var count = 0
    var diff = a xor b
    while (diff != 0) {
        count += diff and 1
        diff = diff shr 1
    }
    return count
}

fun bitLength(number: Int): Int {
    var count = 0
    var number = number
    while (number != 0) {
        count++
        number = number shr 1
    }
    return count
}

fun isPowerOfTwo(number: Int): Boolean {
    return number != 0 && (number and (number - 1)) == 0
}

fun fullAdder(a: Int, b: Int): Int {
    var carry = 0
    var result = 0
    var i = 0
    var a = a
    var b = b
    while (a != 0 || b != 0 || carry != 0) {
        val bitA = a and 1
        val bitB = b and 1
        val sum = bitA xor bitB xor carry
        result = result or (sum shl i)
        carry = (bitA and bitB) or (bitA and carry) or (bitB and carry)
        a = a shr 1
        b = b shr 1
        i++
    }
    return result
}
