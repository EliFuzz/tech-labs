import java.util.ArrayList;
import java.util.List;

class NanoNeuron {

  double w;
  double b;

  NanoNeuron(double w, double b) {
    this.w = w;
    this.b = b;
  }

  double predict(double x) {
    return x * this.w + this.b;
  }
}

public class Main {

  public static double celsiusToFahrenheit(double c) {
    final double w = 1.8;
    final double b = 32;
    return c * w + b;
  }

  public static List<List<Double>> generateDataSets() {
    List<Double> xTrain = new ArrayList<>();
    List<Double> yTrain = new ArrayList<>();
    for (double x = 0; x < 100; x += 1) {
      double y = celsiusToFahrenheit(x);
      xTrain.add(x);
      yTrain.add(y);
    }

    List<Double> xTest = new ArrayList<>();
    List<Double> yTest = new ArrayList<>();
    for (double x = 0.5; x < 100; x += 1) {
      double y = celsiusToFahrenheit(x);
      xTest.add(x);
      yTest.add(y);
    }

    List<List<Double>> dataSets = new ArrayList<>();
    dataSets.add(xTrain);
    dataSets.add(yTrain);
    dataSets.add(xTest);
    dataSets.add(yTest);
    return dataSets;
  }

  public static double predictionCost(double y, double prediction) {
    return Math.pow(y - prediction, 2) / 2;
  }

  public static double[] forwardPropagation(NanoNeuron model, List<Double> xTrain, List<Double> yTrain) {
    int m = xTrain.size();
    List<Double> predictions = new ArrayList<>();
    double cost = 0;
    for (int i = 0; i < m; i++) {
      double prediction = model.predict(xTrain.get(i));
      cost += predictionCost(yTrain.get(i), prediction);
      predictions.add(prediction);
    }
    cost /= m;
    return new double[]{cost, predictions};
  }

  public static double[] backwardPropagation(List<Double> predictions, List<Double> xTrain, List<Double> yTrain) {
    int m = xTrain.size();
    double dW = 0;
    double dB = 0;
    for (int i = 0; i < m; i++) {
      dW += (yTrain.get(i) - predictions.get(i)) * xTrain.get(i);
      dB += yTrain.get(i) - predictions.get(i);
    }
    dW /= m;
    dB /= m;
    return new double[]{dW, dB};
  }

  public static List<Double> trainModel(NanoNeuron model, int epochs, double alpha, List<Double> xTrain, List<Double> yTrain) {
    List<Double> costHistory = new ArrayList<>();
    for (int epoch = 0; epoch < epochs; epoch++) {
      double[] forwardResult = forwardPropagation(model, xTrain, yTrain);
      double cost = forwardResult[0];
      List<Double> predictions = forwardResult[1];

      double[] backwardResult = backwardPropagation(predictions, xTrain, yTrain);
      double dW = backwardResult[0];
      double dB = backwardResult[1];

      model.w += alpha * dW;
      model.b += alpha * dB;

      costHistory.add(cost);
    }
    return costHistory;
  }
}
