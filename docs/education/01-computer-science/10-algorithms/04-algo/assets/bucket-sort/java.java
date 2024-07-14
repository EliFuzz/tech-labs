import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class BucketSort {

  public static void bucketSort(double[] arr) {
    if (arr.length <= 1) {
      return;
    }

    int n = arr.length;
    List<Double>[] buckets = new ArrayList[n];

    for (int i = 0; i < n; i++) {
      buckets[i] = new ArrayList<>();
    }

    for (double v : arr) {
      int index = (int) (v * n);
      buckets[index].add(v);
    }

    for (int i = 0; i < n; i++) {
      Collections.sort(buckets[i]);
    }

    int k = 0;
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < buckets[i].size(); j++) {
        arr[k] = buckets[i].get(j);
        k++;
      }
    }
  }
}
