class NanoNeuron:
    def __init__(self, w, b):
        self.w = w
        self.b = b

    def predict(self, x):
        return x * self.w + self.b

def celsius_to_fahrenheit(c):
    w = 1.8
    b = 32
    return c * w + b

def generate_data_sets():
    x_train = []
    y_train = []
    for x in range(100):
        y = celsius_to_fahrenheit(x)
        x_train.append(x)
        y_train.append(y)

    x_test = []
    y_test = []
    for x in range(1, 100):
        y = celsius_to_fahrenheit(x)
        x_test.append(x)
        y_test.append(y)

    return x_train, y_train, x_test, y_test

def prediction_cost(y, prediction):
    return (y - prediction) ** 2 / 2

def forward_propagation(model, x_train, y_train):
    m = len(x_train)
    predictions = []
    cost = 0
    for i in range(m):
        prediction = model.predict(x_train[i])
        cost += prediction_cost(y_train[i], prediction)
        predictions.append(prediction)
    cost /= m
    return predictions, cost

def backward_propagation(predictions, x_train, y_train):
    m = len(x_train)
    dW = 0
    dB = 0
    for i in range(m):
        dW += (y_train[i] - predictions[i]) * x_train[i]
        dB += y_train[i] - predictions[i]
    dW /= m
    dB /= m
    return dW, dB

def train_model(model, epochs, alpha, x_train, y_train):
    cost_history = []
    for epoch in range(epochs):
        predictions, cost = forward_propagation(model, x_train, y_train)
        cost_history.append(cost)

        dW, dB = backward_propagation(predictions, x_train, y_train)

        model.w += alpha * dW
        model.b += alpha * dB
    return cost_history
