function NanoNeuron(w, b) {
  this.w = w;
  this.b = b;
  this.predict = (x) => {
    return x * this.w + this.b;
  };
}

function celsiusToFahrenheit(c) {
  const w = 1.8;
  const b = 32;
  const f = c * w + b;
  return f;
}

function generateDataSets() {
  const xTrain = [];
  const yTrain = [];
  for (let x = 0; x < 100; x += 1) {
    const y = celsiusToFahrenheit(x);
    xTrain.push(x);
    yTrain.push(y);
  }

  const xTest = [];
  const yTest = [];
  for (let x = 0.5; x < 100; x += 1) {
    const y = celsiusToFahrenheit(x);
    xTest.push(x);
    yTest.push(y);
  }

  return [xTrain, yTrain, xTest, yTest];
}

function predictionCost(y, prediction) {
  return (y - prediction) ** 2 / 2;
}

function forwardPropagation(model, xTrain, yTrain) {
  const m = xTrain.length;
  const predictions = [];
  let cost = 0;
  for (let i = 0; i < m; i += 1) {
    const prediction = model.predict(xTrain[i]);
    cost += predictionCost(yTrain[i], prediction);
    predictions.push(prediction);
  }
  cost /= m;
  return [predictions, cost];
}

function backwardPropagation(predictions, xTrain, yTrain) {
  const m = xTrain.length;
  let dW = 0;
  let dB = 0;
  for (let i = 0; i < m; i += 1) {
    dW += (yTrain[i] - predictions[i]) * xTrain[i];
    dB += yTrain[i] - predictions[i];
  }
  dW /= m;
  dB /= m;
  return [dW, dB];
}

function trainModel({ model, epochs, alpha, xTrain, yTrain }) {
  const costHistory = [];
  for (let epoch = 0; epoch < epochs; epoch += 1) {
    const [predictions, cost] = forwardPropagation(model, xTrain, yTrain);
    costHistory.push(cost);

    const [dW, dB] = backwardPropagation(predictions, xTrain, yTrain);

    model.w += alpha * dW;
    model.b += alpha * dB;
  }
  return costHistory;
}
