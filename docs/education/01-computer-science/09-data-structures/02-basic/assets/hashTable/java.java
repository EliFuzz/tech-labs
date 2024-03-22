import java.util.ArrayList;
import java.util.List;

public class HashTable {

  private List<Pair<String, Object>> table;
  private int size;

  public HashTable() {
    this.table = new ArrayList<>();
    this.size = 10;
  }

  private int hash(String key) {
    return key.hashCode() % size;
  }

  public void insert(String key, Object value) {
    int index = hash(key);
    table.add(index, new Pair<>(key, value));
  }

  public Object search(String key) {
    int index = hash(key);
    if (table.get(index) != null) {
      return table.get(index).getValue();
    }
    return null;
  }

  public void delete(String key) {
    int index = hash(key);
    table.set(index, null);
  }
}
