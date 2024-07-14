public class LiuHuiAlgorithm {

  public static double liuHui(int n) {
    double sideLength = 2.0;
    double polygonSides = 6.0;
    for (int i = 0; i < n; i++) {
      sideLength = Math.sqrt(4 - Math.pow(sideLength / 2, 2));
      polygonSides *= 2;
    }
    return sideLength * polygonSides;
  }
}
