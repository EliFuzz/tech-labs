import java.util.*;

class WeightedItem<T> {

  T item;
  int weight;

  WeightedItem(T item, int weight) {
    this.item = item;
    this.weight = weight;
  }
}

public class WeightedRandom {

  public static <T> T weightedRandom(List<WeightedItem<T>> items) {
    int totalWeight = items.stream().mapToInt(item -> item.weight).sum();
    Random random = new Random();
    int randomWeight = random.nextInt(totalWeight);

    for (WeightedItem<T> item : items) {
      if (randomWeight < item.weight) {
        return item.item;
      }
      randomWeight -= item.weight;
    }

    return null;
  }
}
