public class EuclideanAlgorithm {

  // recursive
  public static int euclideanRecursive(int a, int b) {
    if (b == 0) {
      return a;
    }
    return euclideanRecursive(b, a % b);
  }

  // iterative
  public static int euclideanIterative(int a, int b) {
    int temp;
    while (b != 0) {
      temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
}
