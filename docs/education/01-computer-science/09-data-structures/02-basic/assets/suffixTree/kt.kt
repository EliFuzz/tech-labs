class SuffixNode {
    val children = mutableMapOf<Char, SuffixNode>()
    var index = -1
}

class SuffixTree(text: String) {
    var root = SuffixNode()
    var text = text

    init {
        buildSuffixTree()
    }

    private fun buildSuffixTree() {
        val n = text.length
        for (i in 0 until n) {
            addSuffix(i, root)
        }
    }

    private fun addSuffix(suffixStart: Int, node: SuffixNode) {
        if (suffixStart == text.length) {
            return
        }

        val currentChar = text[suffixStart]
        if (!node.children.containsKey(currentChar)) {
            node.children[currentChar] = SuffixNode()
            node.children[currentChar]!!.index = suffixStart
        } else {
            val existingNode = node.children[currentChar]!!
            addSuffix(suffixStart + 1, existingNode)
        }
    }

    fun insert(newText: String) {
        text += newText
        val n = text.length
        for (i in n - newText.length until n) {
            addSuffix(i, root)
        }
    }

    fun search(pattern: String): Boolean {
        var currentNode = root
        var i = 0

        while (i < pattern.length) {
            val char = pattern[i]
            if (currentNode.children.containsKey(char)) {
                currentNode = currentNode.children[char]!!
                i++
            } else {
                return false
            }
        }

        return true
    }

    fun delete(pattern: String) {
        if (search(pattern)) {
            text = text.replaceFirst(pattern, "")
            root = SuffixNode()
            buildSuffixTree()
        }
    }

    fun longestCommonSubstring(): String {
        val result = intArrayOf(0, 0)
        longestCommonSubstringDFS(root, "", result)
        return text.substring(result[0], result[1])
    }

    private fun longestCommonSubstringDFS(node: SuffixNode, currentSuffix: String, result: IntArray) {
        if (node.children.isEmpty()) {
            return
        }

        for ((_, child) in node.children) {
            val newSuffix = currentSuffix + text[child.index]

            if (newSuffix.length > result[1] - result[0]) {
                result[0] = child.index - newSuffix.length + 1
                result[1] = child.index + 1
            }

            longestCommonSubstringDFS(child, newSuffix, result)
        }
    }

    fun substringCount(node: SuffixNode? = null): Int {
        val currentNode = node ?: root
        var count = 1
        for (child in currentNode.children.values) {
            count += substringCount(child)
        }
        return count
    }

    fun patternMatching(pattern: String, node: SuffixNode? = null): List<Int> {
        val currentNode = node ?: root
        var i = 0
        for (char in pattern) {
            if (currentNode.children.containsKey(char)) {
                currentNode = currentNode.children[char]!!
            } else {
                return emptyList()
            }
        }
        return getLeafIndices(currentNode)
    }

    private fun getLeafIndices(node: SuffixNode): List<Int> {
        val indices = mutableListOf<Int>()
        if (node.children.isEmpty()) {
            indices.add(node.index)
        }

        for (child in node.children.values) {
            indices.addAll(getLeafIndices(child))
        }

        return indices
    }

    fun traverse(node: SuffixNode? = null, depth: Int = 0) {
        val currentNode = node ?: root
        println("  ".repeat(depth) + "Node: ${currentNode.index}")
        for ((char, child) in currentNode.children) {
            println("  ".repeat(depth + 1) + "Edge: $char")
            traverse(child, depth + 2)
        }
    }
}
