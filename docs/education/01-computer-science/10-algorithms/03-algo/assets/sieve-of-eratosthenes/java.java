import java.util.ArrayList;
import java.util.List;

public class SieveOfEratosthenes {

  public static List<Integer> sieveOfEratosthenes(int n) {
    boolean[] primes = new boolean[n + 1];
    List<Integer> result = new ArrayList<>();

    for (int i = 2; i <= n; i++) {
      primes[i] = true;
    }

    for (int p = 2; p * p <= n; p++) {
      if (primes[p]) {
        for (int i = p * p; i <= n; i += p) {
          primes[i] = false;
        }
      }
    }

    for (int p = 2; p <= n; p++) {
      if (primes[p]) {
        result.add(p);
      }
    }

    return result;
  }
}
