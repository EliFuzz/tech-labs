DIRECTIONS = {"UP": -1, "DOWN": 1}

def buildFence(rowsNum):
    return [[] for _ in range(rowsNum)]

def getNextDirection(railCount, currentRail, direction):
    if currentRail == 0:
        return DIRECTIONS["DOWN"]
    elif currentRail == railCount - 1:
        return DIRECTIONS["UP"]
    else:
        return direction

def fillEncodeFence(fence, string, railCount):
    currentRail = 0
    direction = DIRECTIONS["DOWN"]

    for char in string:
        fence[currentRail].append(char)
        direction = getNextDirection(railCount, currentRail, direction)
        currentRail += direction

    return fence

def fillDecodeFence(fence, string, railCount):
    currentRail = 0
    currentColumn = 0
    direction = DIRECTIONS["DOWN"]

    for char in string:
        fence[currentRail][currentColumn] = char
        direction = getNextDirection(railCount, currentRail, direction)
        currentRail += direction
        currentColumn = (currentColumn + 1) % len(string)

    return fence

def decodeFence(fence, railCount):
    decodedMessage = []

    currentRail = 0
    direction = DIRECTIONS["DOWN"]

    for _ in range(railCount):
        decodedMessage.extend(fence[currentRail])
        direction = getNextDirection(railCount, currentRail, direction)
        currentRail += direction

    return ''.join(decodedMessage)

def encodeRailFenceCipher(string, railCount):
    fence = buildFence(railCount)
    fillEncodeFence(fence, string, railCount)
    return ''.join(''.join(row) for row in fence)

def decodeRailFenceCipher(string, railCount):
    fence = buildFence(railCount)
    fillDecodeFence(fence, string, railCount)
    return decodeFence(fence, railCount)
