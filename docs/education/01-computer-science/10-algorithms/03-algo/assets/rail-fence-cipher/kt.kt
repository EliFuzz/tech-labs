val DIRECTIONS = mapOf("UP" to -1, "DOWN" to 1)

fun buildFence(rowsNum: Int): Array<CharArray> {
    return Array(rowsNum) { CharArray(0) }
}

fun getNextDirection(railCount: Int, currentRail: Int, direction: Int): Int {
    return if (currentRail == 0) {
        DIRECTIONS["DOWN"] ?: error("Direction not found")
    } else if (currentRail == railCount - 1) {
        DIRECTIONS["UP"] ?: error("Direction not found")
    } else {
        direction
    }
}

fun fillEncodeFence(fence: Array<CharArray>, string: String, railCount: Int): Array<CharArray> {
    var currentRail = 0
    var direction = DIRECTIONS["DOWN"] ?: error("Direction not found")

    for (char in string) {
        fence[currentRail] += char
        direction = getNextDirection(railCount, currentRail, direction)
        currentRail += direction
    }

    return fence
}

fun fillDecodeFence(fence: Array<CharArray>, string: String, railCount: Int): Array<CharArray> {
    var currentRail = 0
    var currentColumn = 0
    var direction = DIRECTIONS["DOWN"] ?: error("Direction not found")

    for (char in string) {
        fence[currentRail][currentColumn] = char
        direction = getNextDirection(railCount, currentRail, direction)
        currentRail += direction
        currentColumn = (currentColumn + 1) % string.length
    }

    return fence
}

fun decodeFence(fence: Array<CharArray>, railCount: Int): String {
    val decodedMessage = mutableListOf<Char>()

    var currentRail = 0
    var direction = DIRECTIONS["DOWN"] ?: error("Direction not found")

    repeat(railCount) {
        decodedMessage.addAll(fence[currentRail])
        direction = getNextDirection(railCount, currentRail, direction)
        currentRail += direction
    }

    return decodedMessage.joinToString("")
}

fun encodeRailFenceCipher(string: String, railCount: Int): String {
    val fence = buildFence(railCount)
    fillEncodeFence(fence, string, railCount)
    return fence.flatMap { it.toList() }.joinToString("")
}

fun decodeRailFenceCipher(string: String, railCount: Int): String {
    val fence = buildFence(railCount)
    fillDecodeFence(fence, string, railCount)
    return decodeFence(fence, railCount)
}
