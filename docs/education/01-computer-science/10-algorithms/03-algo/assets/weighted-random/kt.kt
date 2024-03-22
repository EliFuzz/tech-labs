import kotlin.random.Random

data class WeightedItem<T>(val item: T, val weight: Int)

fun <T> weightedRandom(items: List<WeightedItem<T>>): T? {
    val totalWeight = items.sumBy { it.weight }
    val randomWeight = Random.nextInt(totalWeight)

    var cumulativeWeight = 0
    for (item in items) {
        cumulativeWeight += item.weight
        if (randomWeight < cumulativeWeight) {
            return item.item
        }
    }
    return null
}
