public class Main {

  public static double sqrtNewton(double x) {
    double z = x / 2;
    for (int i = 0; i < 10; i++) {
      z -= (z * z - x) / (2 * z);
    }
    return z;
  }
}
