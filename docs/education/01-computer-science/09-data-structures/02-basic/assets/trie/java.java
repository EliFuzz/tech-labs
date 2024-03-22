import java.util.*;

public class Trie {

  private TrieNode root;

  public Trie() {
    this.root = new TrieNode();
  }

  public void addWord(String word) {
    TrieNode currentNode = root;
    for (char ch : word.toCharArray()) {
      currentNode.children.computeIfAbsent(ch, k -> new TrieNode());
      currentNode = currentNode.children.get(ch);
    }
    currentNode.isEndOfWord = true;
  }

  public void deleteWord(String word) {
    depthFirstDelete(root, word, 0);
  }

  private boolean depthFirstDelete(TrieNode currentNode, String word, int index) {
    if (currentNode == null) {
      return false;
    }

    if (index == word.length()) {
      if (!currentNode.isEndOfWord) {
        return false;
      }
      currentNode.isEndOfWord = false;
      return currentNode.children.isEmpty();
    }

    char ch = word.charAt(index);
    TrieNode nextNode = currentNode.children.get(ch);

    if (nextNode == null) {
      return false;
    }

    boolean shouldDeleteCurrentNode = depthFirstDelete(nextNode, word, index + 1);

    if (shouldDeleteCurrentNode) {
      currentNode.children.remove(ch);
      return currentNode.children.isEmpty();
    }

    return false;
  }

  public void DeleteWordIterative(String word) {
    TrieNode currentNode = root;
    int index = 0;
    Deque<Pair<TrieNode, Integer>> nodesStack = new ArrayDeque<>();

    while (index < word.length()) {
      char ch = word.charAt(index);
      TrieNode nextNode = currentNode.children.get(ch);

      if (nextNode == null) {
        return;
      }

      nodesStack.push(new Pair<>(currentNode, index));
      currentNode = nextNode;
      index++;
    }

    currentNode.isEndOfWord = false;

    while (!nodesStack.isEmpty()) {
      Pair<TrieNode, Integer> nodeWithIndex = nodesStack.pop();
      TrieNode parentNode = nodeWithIndex.getFirst();
      int parentIndex = nodeWithIndex.getSecond();

      if (currentNode.children.isEmpty() && !currentNode.isEndOfWord) {
        Objects.requireNonNull(parentNode).children.remove(word.charAt(parentIndex));
      }

      currentNode = parentNode;
    }
  }

  public List<Character> suggestNextCharacters(String prefix) {
    TrieNode lastNode = getLastCharacterNode(prefix);
    List<Character> suggestions = new ArrayList<>();
    if (lastNode != null) {
      suggestNextCharacters(lastNode, prefix, suggestions);
    }
    return suggestions;
  }

  private void suggestNextCharacters(TrieNode node, String currentPrefix, List<Character> suggestions) {
    if (node.isEndOfWord) {
      suggestions.add(currentPrefix.charAt(currentPrefix.length() - 1));
    }

    for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {
      suggestNextCharacters(entry.getValue(), currentPrefix + entry.getKey(), suggestions);
    }
  }

  public List<Character> suggestNextCharactersIterative(String prefix) {
    List<Character> suggestions = new ArrayList<>();
    TrieNode currentNode = root;
    StringBuilder currentPrefix = new StringBuilder();

    for (char ch : prefix.toCharArray()) {
      if (!currentNode.children.containsKey(ch)) {
        return suggestions;
      }
      currentNode = currentNode.children.get(ch);
      currentPrefix.append(ch);
    }

    Deque<Pair<TrieNode, String>> stack = new ArrayDeque<>();
    stack.push(new Pair<>(currentNode, currentPrefix.toString()));

    while (!stack.isEmpty()) {
      Pair<TrieNode, String> nodeWithPrefix = stack.pop();
      TrieNode node = nodeWithPrefix.getFirst();
      String current = nodeWithPrefix.getSecond();

      if (node.isEndOfWord) {
        suggestions.add(current.charAt(current.length() - 1));
      }

      for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {
        stack.push(new Pair<>(entry.getValue(), current + entry.getKey()));
      }
    }

    return suggestions;
  }

  public boolean doesWordExist(String word) {
    TrieNode lastNode = getLastCharacterNode(word);
    return lastNode != null && lastNode.isEndOfWord;
  }

  private TrieNode getLastCharacterNode(String prefix) {
    TrieNode currentNode = root;
    for (char ch : prefix.toCharArray()) {
      if (!currentNode.children.containsKey(ch)) {
        return null;
      }
      currentNode = currentNode.children.get(ch);
    }
    return currentNode;
  }

  public boolean startsWith(String prefix) {
    return getLastCharacterNode(prefix) != null;
  }

  static class TrieNode {

    Map<Character, TrieNode> children;
    boolean isEndOfWord;

    TrieNode() {
      this.children = new HashMap<>();
      this.isEndOfWord = false;
    }
  }
}
