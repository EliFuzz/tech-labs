package main

import (
    "math"
)

func trialDivision(number int) bool {
    if number <= 1 || (number%2 == 0 && number != 2) {
        return false
    }

    dividerLimit := int(math.Sqrt(float64(number)))
    for divider := 3; divider <= dividerLimit; divider += 2 {
        if number%divider == 0 {
            return false
        }
    }

    return true
}
