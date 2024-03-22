import java.util.ArrayList;
import java.util.List;

public class Main {

  public static List<List<Integer>> combineWithoutRepetitions(List<Integer> comboOptions, int comboLength) {
    List<List<Integer>> combos = new ArrayList<>();
    if (comboLength == 1) {
      for (Integer comboOption : comboOptions) {
        List<Integer> list = new ArrayList<>();
        list.add(comboOption);
        combos.add(list);
      }
    } else {
      for (int i = 0; i <= comboOptions.size() - comboLength; i++) {
        int currentOption = comboOptions.get(i);
        List<List<Integer>> smallerCombos = combineWithoutRepetitions(comboOptions.subList(i + 1, comboOptions.size()), comboLength - 1);
        for (List<Integer> smallerCombo : smallerCombos) {
          List<Integer> newList = new ArrayList<>();
          newList.add(currentOption);
          newList.addAll(smallerCombo);
          combos.add(newList);
        }
      }
    }
    return combos;
  }

  public static List<List<Integer>> combineWithRepetitions(List<Integer> comboOptions, int comboLength) {
    List<List<Integer>> combos = new ArrayList<>();
    if (comboLength == 1) {
      for (Integer comboOption : comboOptions) {
        List<Integer> list = new ArrayList<>();
        list.add(comboOption);
        combos.add(list);
      }
    } else {
      for (int i = 0; i < comboOptions.size(); i++) {
        int currentOption = comboOptions.get(i);
        List<List<Integer>> smallerCombos = combineWithRepetitions(comboOptions.subList(i, comboOptions.size()), comboLength - 1);
        for (List<Integer> smallerCombo : smallerCombos) {
          List<Integer> newList = new ArrayList<>();
          newList.add(currentOption);
          newList.addAll(smallerCombo);
          combos.add(newList);
        }
      }
    }
    return combos;
  }
}
