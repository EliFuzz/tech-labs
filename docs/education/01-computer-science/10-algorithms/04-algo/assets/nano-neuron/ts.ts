class NanoNeuron {
  w: number;
  b: number;

  constructor(w: number, b: number) {
    this.w = w;
    this.b = b;
  }

  predict(x: number): number {
    return x * this.w + this.b;
  }
}

function celsiusToFahrenheit(c: number): number {
  const w: number = 1.8;
  const b: number = 32;
  const f: number = c * w + b;
  return f;
}

function generateDataSets(): [number[], number[], number[], number[]] {
  const xTrain: number[] = [];
  const yTrain: number[] = [];
  for (let x = 0; x < 100; x += 1) {
    const y: number = celsiusToFahrenheit(x);
    xTrain.push(x);
    yTrain.push(y);
  }

  const xTest: number[] = [];
  const yTest: number[] = [];
  for (let x = 0.5; x < 100; x += 1) {
    const y: number = celsiusToFahrenheit(x);
    xTest.push(x);
    yTest.push(y);
  }

  return [xTrain, yTrain, xTest, yTest];
}

function predictionCost(y: number, prediction: number): number {
  return Math.pow(y - prediction, 2) / 2;
}

function forwardPropagation(
  model: NanoNeuron,
  xTrain: number[],
  yTrain: number[],
): [number[], number] {
  const m: number = xTrain.length;
  const predictions: number[] = [];
  let cost: number = 0;
  for (let i = 0; i < m; i += 1) {
    const prediction: number = model.predict(xTrain[i]);
    cost += predictionCost(yTrain[i], prediction);
    predictions.push(prediction);
  }
  cost /= m;
  return [predictions, cost];
}

function backwardPropagation(
  predictions: number[],
  xTrain: number[],
  yTrain: number[],
): [number, number] {
  const m: number = xTrain.length;
  let dW: number = 0;
  let dB: number = 0;
  for (let i = 0; i < m; i += 1) {
    dW += (yTrain[i] - predictions[i]) * xTrain[i];
    dB += yTrain[i] - predictions[i];
  }
  dW /= m;
  dB /= m;
  return [dW, dB];
}

function trainModel({
  model,
  epochs,
  alpha,
  xTrain,
  yTrain,
}: {
  model: NanoNeuron;
  epochs: number;
  alpha: number;
  xTrain: number[];
  yTrain: number[];
}): number[] {
  const costHistory: number[] = [];
  for (let epoch = 0; epoch < epochs; epoch += 1) {
    const [predictions, cost]: [number[], number] = forwardPropagation(
      model,
      xTrain,
      yTrain,
    );
    costHistory.push(cost);

    const [dW, dB]: [number, number] = backwardPropagation(
      predictions,
      xTrain,
      yTrain,
    );

    model.w += alpha * dW;
    model.b += alpha * dB;
  }
  return costHistory;
}
