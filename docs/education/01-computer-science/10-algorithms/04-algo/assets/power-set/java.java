import java.util.ArrayList;
import java.util.List;

public class PowerSet {

  public static List<List<Integer>> backtrackingPowerSetRecursive(int[] originalSet) {
    List<List<Integer>> allSubsets = new ArrayList<>();
    allSubsets.add(new ArrayList<>());
    backtrackingPowerSetRecursive(originalSet, allSubsets, new ArrayList<>(), 0);
    return allSubsets;
  }

  private static void backtrackingPowerSetRecursive(int[] originalSet, List<List<Integer>> allSubsets, List<Integer> currentSubSet, int startAt) {
    for (int position = startAt; position < originalSet.length; position++) {
      currentSubSet.add(originalSet[position]);
      allSubsets.add(new ArrayList<>(currentSubSet));

      backtrackingPowerSetRecursive(originalSet, allSubsets, currentSubSet, position + 1);

      currentSubSet.remove(currentSubSet.size() - 1);
    }
  }

  public static List<List<Integer>> bitwisePowerSet(int[] originalSet) {
    List<List<Integer>> subSets = new ArrayList<>();
    int numberOfCombinations = 1 << originalSet.length;

    for (int combinationIndex = 0; combinationIndex < numberOfCombinations; combinationIndex++) {
      List<Integer> subSet = new ArrayList<>();

      for (int setElementIndex = 0; setElementIndex < originalSet.length; setElementIndex++) {
        if ((combinationIndex & (1 << setElementIndex)) != 0) {
          subSet.add(originalSet[setElementIndex]);
        }
      }

      subSets.add(subSet);
    }

    return subSets;
  }

  public static List<List<Integer>> cascadingPowerSet(int[] originalSet) {
    List<List<Integer>> sets = new ArrayList<>();
    sets.add(new ArrayList<>());

    for (int numIdx = 0; numIdx < originalSet.length; numIdx++) {
      int existingSetsNum = sets.size();

      for (int setIdx = 0; setIdx < existingSetsNum; setIdx++) {
        List<Integer> set = new ArrayList<>(sets.get(setIdx));
        set.add(originalSet[numIdx]);
        sets.add(set);
      }
    }

    return sets;
  }
}
