package main

import (
	"math"
)

type NanoNeuron struct {
	w float64
	b float64
}

func NewNanoNeuron(w, b float64) *NanoNeuron {
	return &NanoNeuron{w: w, b: b}
}

func (nn *NanoNeuron) Predict(x float64) float64 {
	return x*nn.w + nn.b
}

func CelsiusToFahrenheit(c float64) float64 {
	w := 1.8
	b := 32.0
	f := c*w + b
	return f
}

func GenerateDataSets() ([]float64, []float64, []float64, []float64) {
	xTrain := make([]float64, 0)
	yTrain := make([]float64, 0)

	for x := 0.0; x < 100; x += 1 {
		y := CelsiusToFahrenheit(x)
		xTrain = append(xTrain, x)
		yTrain = append(yTrain, y)
	}

	xTest := make([]float64, 0)
	yTest := make([]float64, 0)

	for x := 0.5; x < 100; x += 1 {
		y := CelsiusToFahrenheit(x)
		xTest = append(xTest, x)
		yTest = append(yTest, y)
	}

	return xTrain, yTrain, xTest, yTest
}

func PredictionCost(y, prediction float64) float64 {
	return math.Pow(y-prediction, 2) / 2
}

func ForwardPropagation(model *NanoNeuron, xTrain, yTrain []float64) ([]float64, float64) {
	m := len(xTrain)
	predictions := make([]float64, 0)
	cost := 0.0

	for i := 0; i < m; i++ {
		prediction := model.Predict(xTrain[i])
		cost += PredictionCost(yTrain[i], prediction)
		predictions = append(predictions, prediction)
	}

	cost /= float64(m)
	return predictions, cost
}

func BackwardPropagation(predictions, xTrain, yTrain []float64) (float64, float64) {
	m := len(xTrain)
	dW := 0.0
	dB := 0.0

	for i := 0; i < m; i++ {
		dW += (yTrain[i] - predictions[i]) * xTrain[i]
		dB += yTrain[i] - predictions[i]
	}

	dW /= float64(m)
	dB /= float64(m)

	return dW, dB
}

func TrainModel(model *NanoNeuron, epochs int, alpha float64, xTrain, yTrain []float64) []float64 {
	costHistory := make([]float64, 0)

	for epoch := 0; epoch < epochs; epoch++ {
		predictions, cost := ForwardPropagation(model, xTrain, yTrain)
		costHistory = append(costHistory, cost)

		dW, dB := BackwardPropagation(predictions, xTrain, yTrain)

		model.w += alpha * dW
		model.b += alpha * dB
	}

	return costHistory
}
