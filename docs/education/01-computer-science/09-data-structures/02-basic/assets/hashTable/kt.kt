class HashTable {
    private val table: MutableList<Pair<String, Any>?> = mutableListOf()
    private val size: Int = 10

    private fun hash(key: String): Int {
        return key.hashCode() % size
    }

    fun insert(key: String, value: Any) {
        val index = hash(key)
        table[index] = Pair(key, value)
    }

    fun search(key: String): Any? {
        val index = hash(key)
        return table[index]?.second
    }

    fun delete(key: String) {
        val index = hash(key)
        table[index] = null
    }
}
