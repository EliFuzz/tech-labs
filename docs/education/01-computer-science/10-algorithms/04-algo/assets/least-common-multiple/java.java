public class Main {

  public static int euclideanAlgorithm(int originalA, int originalB) {
    int a = Math.abs(originalA);
    int b = Math.abs(originalB);

    return b == 0 ? a : euclideanAlgorithm(b, a % b);
  }

  public static int leastCommonMultiple(int a, int b) {
    if (a == 0 || b == 0) {
      return 0;
    }
    return Math.abs(a * b) / euclideanAlgorithm(a, b);
  }
}
