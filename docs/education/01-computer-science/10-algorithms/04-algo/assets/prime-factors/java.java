import java.util.ArrayList;
import java.util.List;

public class Main {

  public static List<Integer> primeFactors(int n) {
    List<Integer> factors = new ArrayList<>();

    while (n % 2 == 0) {
      factors.add(2);
      n /= 2;
    }

    for (int factor = 3; factor <= Math.sqrt(n); factor += 2) {
      while (n % factor == 0) {
        factors.add(factor);
        n /= factor;
      }
    }

    if (n > 2) {
      factors.add(n);
    }

    return factors;
  }
}
