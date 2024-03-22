package main

import "strings"

var DIRECTIONS = map[string]int{"UP": -1, "DOWN": 1}

func buildFence(rowsNum int) [][]rune {
    fence := make([][]rune, rowsNum)
    for i := range fence {
        fence[i] = []rune{}
    }
    return fence
}

func getNextDirection(railCount, currentRail, direction int) int {
    if currentRail == 0 {
        return DIRECTIONS["DOWN"]
    } else if currentRail == railCount-1 {
        return DIRECTIONS["UP"]
    }
    return direction
}

func fillEncodeFence(fence [][]rune, input string, railCount int) [][]rune {
    currentRail := 0
    direction := DIRECTIONS["DOWN"]

    for _, char := range input {
        fence[currentRail] = append(fence[currentRail], char)
        direction = getNextDirection(railCount, currentRail, direction)
        currentRail += direction
    }

    return fence
}

func fillDecodeFence(fence [][]rune, input string, railCount int) [][]rune {
    currentRail := 0
    currentColumn := 0
    direction := DIRECTIONS["DOWN"]

    for _, char := range input {
        fence[currentRail][currentColumn] = char
        direction = getNextDirection(railCount, currentRail, direction)
        currentRail += direction
        currentColumn = (currentColumn + 1) % len(input)
    }

    return fence
}

func decodeFence(fence [][]rune, railCount int) string {
    var decodedMessage []rune

    currentRail := 0
    direction := DIRECTIONS["DOWN"]

    for i := 0; i < railCount; i++ {
        decodedMessage = append(decodedMessage, fence[currentRail]...)
        direction = getNextDirection(railCount, currentRail, direction)
        currentRail += direction
    }

    return string(decodedMessage)
}

func encodeRailFenceCipher(input string, railCount int) string {
    fence := buildFence(railCount)
    fence = fillEncodeFence(fence, input, railCount)
    var encodedMessage strings.Builder
    for _, row := range fence {
        for _, char := range row {
            encodedMessage.WriteRune(char)
        }
    }
    return encodedMessage.String()
}

func decodeRailFenceCipher(input string, railCount int) string {
    fence := buildFence(railCount)
    fence = fillDecodeFence(fence, input, railCount)
    return decodeFence(fence, railCount)
}
