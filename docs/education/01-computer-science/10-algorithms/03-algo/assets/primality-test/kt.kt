fun trialDivision(number: Int): Boolean {
    if (number <= 1 || (number % 2 == 0 && number != 2)) {
        return false
    }

    val dividerLimit = Math.sqrt(number.toDouble()).toInt()
    for (divider in 3..dividerLimit step 2) {
        if (number % divider == 0) {
            return false
        }
    }

    return true
}
