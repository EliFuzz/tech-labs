import java.util.Arrays;
import java.util.Random;

public class FisherYatesShuffle {

  public static void shuffle(int[] arr) {
    Random rand = new Random();
    for (int i = arr.length - 1; i > 0; i--) {
      int j = rand.nextInt(i + 1);
      int temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
