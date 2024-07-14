import math

def trialDivision(number):
    if number <= 1 or (number % 2 == 0 and number != 2):
        return False

    dividerLimit = int(math.sqrt(number))
    for divider in range(3, dividerLimit + 1, 2):
        if number % divider == 0:
            return False

    return True
