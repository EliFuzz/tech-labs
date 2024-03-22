class BloomFilter(size: Int = 100) {

    private val size: Int = size
    private val storage: BooleanArray = createStore(size)

    fun insert(item: String) {
        val hashValues = getHashValues(item)
        hashValues.forEach { storage[it] = true }
    }

    fun mayContain(item: String): Boolean {
        val hashValues = getHashValues(item)
        for (hashIndex in hashValues.indices) {
            if (!storage[hashValues[hashIndex]]) {
                return false
            }
        }
        return true
    }

    private fun createStore(size: Int): BooleanArray {
        return BooleanArray(size) { false }
    }

    private fun firstHash(item: String): Int {
        var hash = 0
        for (charIndex in item.indices) {
            val char = item[charIndex].toInt()
            hash = (hash shl 5) + hash + char
            hash = hash and hash
            hash = hash.absoluteValue
        }
        return hash % size
    }

    private fun secondHash(item: String): Int {
        var hash = 5381
        for (charIndex in item.indices) {
            val char = item[charIndex].toInt()
            hash = (hash shl 5) + hash + char
        }
        return hash.absoluteValue % size
    }

    private fun thirdHash(item: String): Int {
        var hash = 0
        for (charIndex in item.indices) {
            val char = item[charIndex].toInt()
            hash = (hash shl 5) - hash
            hash += char
            hash = hash and hash
        }
        return hash.absoluteValue % size
    }

    private fun getHashValues(item: String): IntArray {
        return intArrayOf(firstHash(item), secondHash(item), thirdHash(item))
    }
}
