function hornersMethod(coefficients, x) {
  let result = coefficients[0];
  for (let i = 1; i < coefficients.length; i++) {
    result = result * x + coefficients[i];
  }
  return result;
}
