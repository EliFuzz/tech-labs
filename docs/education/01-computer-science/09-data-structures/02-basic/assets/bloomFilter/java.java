import java.util.function.IntUnaryOperator;

public class BloomFilter {

  private final int size;
  private final boolean[] storage;

  public BloomFilter(int size) {
    this.size = size;
    this.storage = createStore(size);
  }

  public void insert(String item) {
    int[] hashValues = getHashValues(item);
    for (int val : hashValues) {
      setValue(val);
    }
  }

  public boolean mayContain(String item) {
    int[] hashValues = getHashValues(item);
    for (int hashIndex : hashValues) {
      if (!getValue(hashIndex)) {
        return false;
      }
    }
    return true;
  }

  private boolean[] createStore(int size) {
    boolean[] storage = new boolean[size];
    return storage;
  }

  private void setValue(int index) {
    storage[index] = true;
  }

  private boolean getValue(int index) {
    return storage[index];
  }

  private int firstHash(String item) {
    int hash = 0;
    for (int charIndex = 0; charIndex < item.length(); charIndex++) {
      char character = item.charAt(charIndex);
      hash = (hash << 5) + hash + character;
      hash &= hash;
      hash = Math.abs(hash);
    }
    return hash % size;
  }

  private int secondHash(String item) {
    int hash = 5381;
    for (int charIndex = 0; charIndex < item.length(); charIndex++) {
      char character = item.charAt(charIndex);
      hash = (hash << 5) + hash + character;
    }
    return Math.abs(hash % size);
  }

  private int thirdHash(String item) {
    int hash = 0;
    for (int charIndex = 0; charIndex < item.length(); charIndex++) {
      char character = item.charAt(charIndex);
      hash = (hash << 5) - hash;
      hash += character;
      hash &= hash;
    }
    return Math.abs(hash % size);
  }

  private int[] getHashValues(String item) {
    return new int[]{firstHash(item), secondHash(item), thirdHash(item)};
  }
}
