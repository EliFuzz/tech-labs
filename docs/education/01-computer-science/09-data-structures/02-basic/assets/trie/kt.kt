import java.lang.StringBuilder

class Trie {
    data class TrieNode(val children = mutableMapOf<Char, TrieNode>(), var isEndOfWord = false)

    private val root = TrieNode()

    fun addWord(word: String) {
        var currentNode = root
        for (char in word) {
            currentNode = currentNode.children.computeIfAbsent(char) { TrieNode() }
        }
        currentNode.isEndOfWord = true
    }

    fun deleteWord(word: String) {
        deleteWord(root, word, 0)
    }

    private fun deleteWord(currentNode: TrieNode?, word: String, index: Int): Boolean {
        if (currentNode == null) {
            return false
        }

        if (index == word.length) {
            if (!currentNode.isEndOfWord) {
                return false
            }
            currentNode.isEndOfWord = false
            return currentNode.children.isEmpty()
        }

        val char = word[index]
        val nextNode = currentNode.children[char] ?: return false

        val shouldDeleteCurrentNode = deleteWord(nextNode, word, index + 1)

        if (shouldDeleteCurrentNode) {
            currentNode.children.remove(char)
            return currentNode.children.isEmpty()
        }

        return false
    }

    fun DeleteWordIterative(word: String) {
        var currentNode = root
        var index = 0
        val nodesStack = mutableListOf<Pair<TrieNode, Int>>()

        while (index < word.length) {
            val char = word[index]
            val nextNode = currentNode.children[char]

            if (nextNode == null) {
                return
            }

            nodesStack.add(Pair(currentNode, index))
            currentNode = nextNode
            index++
        }

        currentNode.isEndOfWord = false

        while (nodesStack.isNotEmpty()) {
            val (parentNode, parentIndex) = nodesStack.removeAt(nodesStack.size - 1)

            if (currentNode.children.isEmpty() && !currentNode.isEndOfWord) {
                parentNode.children.remove(word[parentIndex])
            }

            currentNode = parentNode
        }
    }

    fun depthFirstDelete(word: String) {
        depthFirstDelete(root, word, 0)
    }

    private fun depthFirstDelete(currentNode: TrieNode, word: String, index: Int) {
        if (index == word.length) {
            currentNode.isEndOfWord = false
            return
        }

        val char = word[index]
        val nextNode = currentNode.children[char] ?: return

        depthFirstDelete(nextNode, word, index + 1)

        if (nextNode.children.isEmpty() && !nextNode.isEndOfWord) {
            currentNode.children.remove(char)
        }
    }

    fun DeleteWordIterative(word: String) {
        var currentNode = root
        var index = 0
        val nodesStack = mutableListOf<Pair<TrieNode, Int>>()

        while (index < word.length) {
            val char = word[index]
            val nextNode = currentNode.children[char]

            if (nextNode == null) {
                return
            }

            nodesStack.add(Pair(currentNode, index))
            currentNode = nextNode
            index++
        }

        currentNode.isEndOfWord = false

        while (nodesStack.isNotEmpty()) {
            val (parentNode, parentIndex) = nodesStack.removeAt(nodesStack.size - 1)

            if (currentNode.children.isEmpty() && !currentNode.isEndOfWord) {
                parentNode.children.remove(word[parentIndex])
            }

            currentNode = parentNode
        }
    }

    fun suggestNextCharacters(prefix: String): List<Char> {
        val lastNode = getLastCharacterNode(prefix)
        val suggestions = mutableListOf<Char>()
        if (lastNode != null) {
            suggestNextCharacters(lastNode, prefix, suggestions)
        }
        return suggestions
    }

    private fun suggestNextCharacters(node: TrieNode, currentPrefix: String, suggestions: MutableList<Char>) {
        if (node.isEndOfWord) {
            suggestions.add(currentPrefix.last())
        }

        for ((char, childNode) in node.children) {
            suggestNextCharacters(childNode, currentPrefix + char, suggestions)
        }
    }

    fun suggestNextCharactersIterative(prefix: String): List<Char> {
        val suggestions = mutableListOf<Char>()
        var currentNode = root
        var currentPrefix = StringBuilder()

        for (char in prefix) {
            currentNode = currentNode.children[char] ?: return suggestions
            currentPrefix.append(char)
        }

        val stack = mutableListOf<Pair<TrieNode, String>>()
        stack.add(Pair(currentNode, currentPrefix.toString()))

        while (stack.isNotEmpty()) {
            val (node, current) = stack.removeAt(stack.size - 1)

            if (node.isEndOfWord) {
                suggestions.add(current.last())
            }

            for ((char, childNode) in node.children) {
                stack.add(Pair(childNode, current + char))
            }
        }

        return suggestions
    }

    fun doesWordExist(word: String): Boolean {
        val lastNode = getLastCharacterNode(word)
        return lastNode?.isEndOfWord ?: false
    }

    private fun getLastCharacterNode(prefix: String): TrieNode? {
        var currentNode = root
        for (char in prefix) {
            currentNode = currentNode.children[char] ?: return null
        }
        return currentNode
    }

    fun startsWith(prefix: String): Boolean {
        return getLastCharacterNode(prefix) != null
    }
}
