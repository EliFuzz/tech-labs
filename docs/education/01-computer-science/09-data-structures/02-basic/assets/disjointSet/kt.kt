data class DisjointSetItem<T>(
        val value: T,
        val keyCallback: ((T) -> T)? = null,
        var parent: DisjointSetItem<T>? = null,
        val children: MutableMap<T, DisjointSetItem<T>> = mutableMapOf()
) {
    fun getKey(): T {
        return parent?.getKey() ?: keyCallback?.invoke(value) ?: value
    }

    fun getRoot(): DisjointSetItem<T> {
        return if (isRoot()) this else parent!!.getRoot()
    }

    fun isRoot(): Boolean {
        return parent == null
    }

    fun getRank(): Int {
        return if (getChildren().isEmpty()) {
            0
        } else {
            getChildren().sumBy {
                1 + it.getRank()
            }
        }
    }

    fun getChildren(): Collection<DisjointSetItem<T>> {
        return children.values
    }

    fun setParent(parentItem: DisjointSetItem<T>, forceSettingParentChild: Boolean = true): DisjointSetItem<T> {
        parent = parentItem
        if (forceSettingParentChild) {
            parentItem.addChild(this)
        }
        return this
    }

    fun addChild(childItem: DisjointSetItem<T>): DisjointSetItem<T> {
        children[childItem.getKey()] = childItem
        childItem.setParent(this, false)
        return this
    }
}

class DisjointSet<T>(private val keyCallback: ((T) -> T)? = null) {
    private val items: MutableMap<T, DisjointSetItem<T>> = mutableMapOf()

    fun makeSet(itemValue: T): DisjointSet<T> {
        val disjointSetItem = DisjointSetItem(itemValue, keyCallback)

        if (!items.containsKey(disjointSetItem.getKey())) {
            items[disjointSetItem.getKey()] = disjointSetItem
        }

        return this
    }

    fun find(itemValue: T): T? {
        val templateDisjointItem = DisjointSetItem(itemValue, keyCallback)
        val requiredDisjointItem = items[templateDisjointItem.getKey()]

        return requiredDisjointItem?.getRoot()?.getKey()
    }

    fun union(valueA: T, valueB: T): DisjointSet<T> {
        val rootKeyA = find(valueA)
        val rootKeyB = find(valueB)

        if (rootKeyA == null || rootKeyB == null) {
            throw RuntimeException("One or two values are not in sets")
        }

        if (rootKeyA == rootKeyB) {
            return this
        }

        val rootA = items[rootKeyA]!!
        val rootB = items[rootKeyB]!!

        if (rootA.getRank() < rootB.getRank()) {
            rootB.addChild(rootA)
        } else {
            rootA.addChild(rootB)
        }

        return this
    }

    fun inSameSet(valueA: T, valueB: T): Boolean {
        val rootKeyA = find(valueA)
        val rootKeyB = find(valueB)

        if (rootKeyA == null || rootKeyB == null) {
            throw RuntimeException("One or two values are not in sets")
        }

        return rootKeyA == rootKeyB
    }
}
