import java.util.*

fun shuffle(arr: IntArray) {
    val rand = Random()
    for (i in arr.size - 1 downTo 1) {
        val j = rand.nextInt(i + 1)
        val temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}
