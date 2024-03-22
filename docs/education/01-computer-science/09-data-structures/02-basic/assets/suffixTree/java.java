import java.util.HashMap;
import java.util.Map;

class SuffixNode {

  Map<Character, SuffixNode> children;
  int index;

  public SuffixNode() {
    children = new HashMap<>();
    index = -1;
  }
}

public class SuffixTree {

  private SuffixNode root;
  private String text;

  public SuffixTree(String text) {
    this.root = new SuffixNode();
    this.text = text;
    buildSuffixTree();
  }

  private void buildSuffixTree() {
    int n = text.length();
    for (int i = 0; i < n; i++) {
      addSuffix(i, root);
    }
  }

  private void addSuffix(int suffixStart, SuffixNode node) {
    if (suffixStart == text.length()) {
      return;
    }

    char currentChar = text.charAt(suffixStart);
    if (!node.children.containsKey(currentChar)) {
      node.children.put(currentChar, new SuffixNode());
      node.children.get(currentChar).index = suffixStart;
    } else {
      SuffixNode existingNode = node.children.get(currentChar);
      addSuffix(suffixStart + 1, existingNode);
    }
  }

  public void insert(String newText) {
    text += newText;
    int n = text.length();
    for (int i = n - newText.length(); i < n; i++) {
      addSuffix(i, root);
    }
  }

  public boolean search(String pattern) {
    SuffixNode currentNode = root;
    int n = pattern.length();
    int i = 0;

    while (i < n) {
      char currentChar = pattern.charAt(i);
      if (currentNode.children.containsKey(currentChar)) {
        currentNode = currentNode.children.get(currentChar);
        i++;
      } else {
        return false;
      }
    }

    return true;
  }

  public void delete(String pattern) {
    if (search(pattern)) {
      text = text.replaceFirst(pattern, "");
      root = new SuffixNode();
      buildSuffixTree();
    }
  }

  public String longestCommonSubstring() {
    int[] result = {0, 0};
    longestCommonSubstringDFS(root, "", result);
    return text.substring(result[0], result[1]);
  }

  private void longestCommonSubstringDFS(SuffixNode node, String currentSuffix, int[] result) {
    if (node.children.isEmpty()) {
      return;
    }

    for (SuffixNode child : node.children.values()) {
      String newSuffix = currentSuffix + text.charAt(child.index);

      if (newSuffix.length() > result[1] - result[0]) {
        result[0] = child.index - newSuffix.length() + 1;
        result[1] = child.index + 1;
      }

      longestCommonSubstringDFS(child, newSuffix, result);
    }
  }

  public int substringCount(SuffixNode node) {
    if (node == null) {
      node = root;
    }

    int count = 1;
    for (SuffixNode child : node.children.values()) {
      count += substringCount(child);
    }

    return count;
  }

  public int[] patternMatching(String pattern, SuffixNode node) {
    if (node == null) {
      node = root;
    }

    for (int i = 0; i < pattern.length(); i++) {
      char currentChar = pattern.charAt(i);
      if (node.children.containsKey(currentChar)) {
        node = node.children.get(currentChar);
      } else {
        return new int[0];
      }
    }

    return getLeafIndices(node);
  }

  private int[] getLeafIndices(SuffixNode node) {
    int[] indices = new int[0];
    if (node.children.isEmpty()) {
      indices = new int[]{node.index};
    }

    for (SuffixNode child : node.children.values()) {
      int[] childIndices = getLeafIndices(child);
      int[] combinedIndices = new int[indices.length + childIndices.length];
      System.arraycopy(indices, 0, combinedIndices, 0, indices.length);
      System.arraycopy(childIndices, 0, combinedIndices, indices.length, childIndices.length);
      indices = combinedIndices;
    }

    return indices;
  }

  public void traverse(SuffixNode node, int depth) {
    if (node == null) {
      node = root;
    }
    System.out.printf("%sNode: %d%n", "  ".repeat(depth), node.index);
    for (Map.Entry<Character, SuffixNode> entry : node.children.entrySet()) {
      char charKey = entry.getKey();
      SuffixNode child = entry.getValue();
      System.out.printf("%sEdge: %c%n", "  ".repeat(depth + 1), charKey);
      traverse(child, depth + 2);
    }
  }
}
