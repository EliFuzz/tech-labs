class NanoNeuron(val w: Double, val b: Double) {
    fun predict(x: Double): Double {
        return x * w + b
    }
}

fun celsiusToFahrenheit(c: Double): Double {
    val w = 1.8
    val b = 32
    return c * w + b
}

fun generateDataSets(): List<List<Double>> {
    val xTrain = mutableListOf<Double>()
    val yTrain = mutableListOf<Double>()
    for (x in 0 until 100) {
        val y = celsiusToFahrenheit(x.toDouble())
        xTrain.add(x.toDouble())
        yTrain.add(y)
    }

    val xTest = mutableListOf<Double>()
    val yTest = mutableListOf<Double>()
    for (x in 0.5 until 100) {
        val y = celsiusToFahrenheit(x)
        xTest.add(x)
        yTest.add(y)
    }

    return listOf(xTrain, yTrain, xTest, yTest)
}

fun predictionCost(y: Double, prediction: Double): Double {
    return Math.pow(y - prediction, 2.0) / 2
}

fun forwardPropagation(model: NanoNeuron, xTrain: List<Double>, yTrain: List<Double>): Pair<List<Double>, Double> {
    val m = xTrain.size
    val predictions = mutableListOf<Double>()
    var cost = 0.0
    for (i in 0 until m) {
        val prediction = model.predict(xTrain[i])
        cost += predictionCost(yTrain[i], prediction)
        predictions.add(prediction)
    }
    cost /= m
    return Pair(predictions, cost)
}

fun backwardPropagation(predictions: List<Double>, xTrain: List<Double>, yTrain: List<Double>): Pair<Double, Double> {
    val m = xTrain.size
    var dW = 0.0
    var dB = 0.0
    for (i in 0 until m) {
        dW += (yTrain[i] - predictions[i]) * xTrain[i]
        dB += yTrain[i] - predictions[i]
    }
    dW /= m
    dB /= m
    return Pair(dW, dB)
}

fun trainModel(model: NanoNeuron, epochs: Int, alpha: Double, xTrain: List<Double>, yTrain: List<Double>): List<Double> {
    val costHistory = mutableListOf<Double>()
    for (epoch in 0 until epochs) {
        val (predictions, cost) = forwardPropagation(model, xTrain, yTrain)
        costHistory.add(cost)

        val (dW, dB) = backwardPropagation(predictions, xTrain, yTrain)

        model.w += alpha * dW
        model.b += alpha * dB
    }
    return costHistory
}
