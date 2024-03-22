import java.util.Arrays;

public class QuickSort {

  public static int[] quicksort(int[] arr) {
    if (arr.length <= 1) {
      return arr;
    }

    int pivot = arr[0];
    int[] left = Arrays.stream(arr).skip(1).filter(x -> x <= pivot).toArray();
    int[] right = Arrays.stream(arr).skip(1).filter(x -> x > pivot).toArray();

    left = quicksort(left);
    right = quicksort(right);

    int[] result = new int[left.length + right.length + 1];
    System.arraycopy(left, 0, result, 0, left.length);
    result[left.length] = pivot;
    System.arraycopy(right, 0, result, left.length + 1, right.length);

    return result;
  }
}
