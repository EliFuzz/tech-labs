import java.nio.ByteBuffer

fun floatAsBinaryString(floatNumber: Float, byteLength: Int): String {
    val numberAsBinaryString = StringBuilder()

    val buffer = ByteBuffer.allocate(byteLength)
    buffer.putFloat(floatNumber)

    for (b in buffer.array()) {
        numberAsBinaryString.append(String.format("%8s", Integer.toBinaryString(b.toInt() and 0xFF)).replace(' ', '0'))
    }

    return numberAsBinaryString.toString()
}
