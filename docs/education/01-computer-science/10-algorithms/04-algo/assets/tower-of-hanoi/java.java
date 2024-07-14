public class TowerOfHanoi {

  public static void towerOfHanoi(int n, String source, String auxiliary, String destination) {
    if (n == 1) {
      System.out.println("Move disk 1 from " + source + " to " + destination);
      return;
    }
    towerOfHanoi(n - 1, source, destination, auxiliary);
    System.out.println("Move disk " + n + " from " + source + " to " + destination);
    towerOfHanoi(n - 1, auxiliary, source, destination);
  }
}
