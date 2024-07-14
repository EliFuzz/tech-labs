import java.util.ArrayList;
import java.util.List;

public class Main {

  public static List<List<Object>> cartesianProduct(List<List<Object>> arrays) {
    List<List<Object>> result = new ArrayList<>();
    result.add(new ArrayList<>());

    for (List<Object> array : arrays) {
      List<List<Object>> temp = new ArrayList<>();
      for (Object item : array) {
        for (List<Object> res : result) {
          List<Object> t = new ArrayList<>(res);
          t.add(item);
          temp.add(t);
        }
      }
      result = temp;
    }

    return result;
  }
}
