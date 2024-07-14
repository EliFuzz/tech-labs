package main

func getBit(number, bitPosition int) int {
    return (number >> bitPosition) & 1
}

func setBit(number, bitPosition int) int {
    return number | (1 << bitPosition)
}

func clearBit(number, bitPosition int) int {
    return number &^ (1 << bitPosition)
}

func updateBit(number, bitPosition, bitValue int) int {
    mask := ^(1 << bitPosition)
    return (number & mask) | (bitValue << bitPosition)
}

func isEven(number int) bool {
    return (number & 1) == 0
}

func isPositive(number int) bool {
    return number >= 0 && (number & 0x80000000) == 0
}

func multiplyByTwo(number int) int {
    return number << 1
}

func divideByTwo(number int) int {
    return number >> 1
}

func switchSign(number int) int {
    return ^number + 1
}

func multiply(a, b int) int {
    if b == 0 {
        return 0
    }
    if b > 0 {
        return a + multiply(a, b-1)
    }
    if b < 0 {
        return -multiply(a, -b)
    }
    return 0
}

func multiplyUnsigned(x, y int) int {
    var result int
    for y > 0 {
        if y&1 == 1 {
            result += x
        }
        x <<= 1
        y >>= 1
    }
    return result
}

func countSetBits(number int) int {
    var count int
    for number != 0 {
        count += number & 1
        number >>= 1
    }
    return count
}

func bitsDiff(a, b int) int {
    var count int
    diff := a ^ b
    for diff != 0 {
        count += diff & 1
        diff >>= 1
    }
    return count
}

func bitLength(number int) int {
    var count int
    for number != 0 {
        count++
        number >>= 1
    }
    return count
}

func isPowerOfTwo(number int) bool {
    return number != 0 && (number&(number-1)) == 0
}

func fullAdder(a, b int) int {
    var carry, result, i int
    for a != 0 || b != 0 || carry != 0 {
        bitA := a & 1
        bitB := b & 1
        sum := bitA ^ bitB ^ carry
        result |= sum << i
        carry = (bitA & bitB) | (bitA & carry) | (bitB & carry)
        a >>= 1
        b >>= 1
        i++
    }
    return result
}
