struct NanoNeuron {
    w: f64,
    b: f64,
}

impl NanoNeuron {
    fn new(w: f64, b: f64) -> Self {
        NanoNeuron { w, b }
    }

    fn predict(&self, x: f64) -> f64 {
        x * self.w + self.b
    }
}

fn celsius_to_fahrenheit(c: f64) -> f64 {
    let w = 1.8;
    let b = 32.0;
    c * w + b
}

fn generate_data_sets() -> (Vec<f64>, Vec<f64>, Vec<f64>, Vec<f64>) {
    let mut x_train = Vec::new();
    let mut y_train = Vec::new();
    for x in 0..100 {
        let y = celsius_to_fahrenheit(x as f64);
        x_train.push(x as f64);
        y_train.push(y);
    }

    let mut x_test = Vec::new();
    let mut y_test = Vec::new();
    for x in (0..100).map(|x| x as f64 + 0.5) {
        let y = celsius_to_fahrenheit(x);
        x_test.push(x);
        y_test.push(y);
    }

    (x_train, y_train, x_test, y_test)
}

fn prediction_cost(y: f64, prediction: f64) -> f64 {
    (y - prediction).powi(2) / 2.0
}

fn forward_propagation(model: &NanoNeuron, x_train: &[f64], y_train: &[f64]) -> (Vec<f64>, f64) {
    let m = x_train.len();
    let mut predictions = Vec::new();
    let mut cost = 0.0;
    for i in 0..m {
        let prediction = model.predict(x_train[i]);
        cost += prediction_cost(y_train[i], prediction);
        predictions.push(prediction);
    }
    cost /= m as f64;
    (predictions, cost)
}

fn backward_propagation(predictions: &[f64], x_train: &[f64], y_train: &[f64]) -> (f64, f64) {
    let m = x_train.len() as f64;
    let (mut dW, mut dB) = (0.0, 0.0);
    for i in 0..x_train.len() {
        dW += (y_train[i] - predictions[i]) * x_train[i];
        dB += y_train[i] - predictions[i];
    }
    dW /= m;
    dB /= m;
    (dW, dB)
}

fn train_model(model: &mut NanoNeuron, epochs: usize, alpha: f64, x_train: &[f64], y_train: &[f64]) -> Vec<f64> {
    let mut cost_history = Vec::new();
    for _ in 0..epochs {
        let (predictions, cost) = forward_propagation(model, x_train, y_train);
        cost_history.push(cost);

        let (dW, dB) = backward_propagation(&predictions, x_train, y_train);

        model.w += alpha * dW;
        model.b += alpha * dB;
    }
    cost_history
}
