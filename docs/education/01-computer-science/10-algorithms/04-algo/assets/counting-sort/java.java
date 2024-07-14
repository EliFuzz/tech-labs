public class CountingSort {

  public static int[] countingSort(int[] arr, int max) {
    int[] count = new int[max + 1];
    int[] sorted = new int[arr.length];

    for (int num : arr) {
      count[num]++;
    }

    int index = 0;
    for (int i = 0; i <= max; i++) {
      while (count[i] > 0) {
        sorted[index] = i;
        index++;
        count[i]--;
      }
    }

    return sorted;
  }
}
