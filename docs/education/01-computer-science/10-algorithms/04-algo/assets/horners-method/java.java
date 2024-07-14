public class HornersMethod {

  public static int hornersMethod(int[] coefficients, int x) {
    int result = coefficients[0];
    for (int i = 1; i < coefficients.length; i++) {
      result = result * x + coefficients[i];
    }
    return result;
  }
}
