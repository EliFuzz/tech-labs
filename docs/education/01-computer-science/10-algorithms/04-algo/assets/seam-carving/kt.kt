import java.awt.Color
import java.awt.image.BufferedImage
import java.io.File
import javax.imageio.ImageIO

class EnergyMatrix(val energy: Array<DoubleArray>)

fun resizeImage(image: BufferedImage, newWidth: Int): BufferedImage {
    var img = image
    var width = img.width
    var height = img.height

    while (width > newWidth) {
        val energyMatrix = computeEnergy(img)
        val seam = findVerticalSeam(energyMatrix)
        img = removeVerticalSeam(img, seam)
        width--
    }

    return img
}

fun computeEnergy(image: BufferedImage): EnergyMatrix {
    val width = image.width
    val height = image.height
    val energy = Array(height) { DoubleArray(width) }

    for (y in 0 until height) {
        for (x in 0 until width) {
            val dx = getColorDelta(image, x - 1, y, x + 1, y)
            val dy = getColorDelta(image, x, y - 1, x, y + 1)
            energy[y][x] = dx * dx + dy * dy
        }
    }

    return EnergyMatrix(energy)
}

fun getColorDelta(image: BufferedImage, x1: Int, y1: Int, x2: Int, y2: Int): Double {
    val x1Clamped = x1.coerceIn(0 until image.width)
    val y1Clamped = y1.coerceIn(0 until image.height)
    val x2Clamped = x2.coerceIn(0 until image.width)
    val y2Clamped = y2.coerceIn(0 until image.height)

    val c1 = Color(image.getRGB(x1Clamped, y1Clamped))
    val c2 = Color(image.getRGB(x2Clamped, y2Clamped))

    val dr = c1.red - c2.red
    val dg = c1.green - c2.green
    val db = c1.blue - c2.blue

    return (dr * dr + dg * dg + db * db) / 3.0 // Taking average of the color differences
}

fun findVerticalSeam(energyMatrix: EnergyMatrix): IntArray {
    val height = energyMatrix.energy.size
    val width = energyMatrix.energy[0].size

    val distTo = Array(height) { DoubleArray(width) }
    val edgeTo = Array(height) { IntArray(width) }

    for (y in 0 until height) {
        for (x in 0 until width) {
            distTo[y][x] = if (y == 0) energyMatrix.energy[y][x] else Double.POSITIVE_INFINITY
        }
    }

    for (y in 0 until height - 1) {
        for (x in 0 until width) {
            if (x > 0 && distTo[y + 1][x - 1] > distTo[y][x] + energyMatrix.energy[y + 1][x - 1]) {
                distTo[y + 1][x - 1] = distTo[y][x] + energyMatrix.energy[y + 1][x - 1]
                edgeTo[y + 1][x - 1] = x
            }
            if (distTo[y + 1][x] > distTo[y][x] + energyMatrix.energy[y + 1][x]) {
                distTo[y + 1][x] = distTo[y][x] + energyMatrix.energy[y + 1][x]
                edgeTo[y + 1][x] = x
            }
            if (x < width - 1 && distTo[y + 1][x + 1] > distTo[y][x] + energyMatrix.energy[y + 1][x + 1]) {
                distTo[y + 1][x + 1] = distTo[y][x] + energyMatrix.energy[y + 1][x + 1]
                edgeTo[y + 1][x + 1] = x
            }
        }
    }

    var minEnergyIdx = 0
    var minEnergy = distTo[height - 1][0]
    for (x in 1 until width) {
        if (distTo[height - 1][x] < minEnergy) {
            minEnergy = distTo[height - 1][x]
            minEnergyIdx = x
        }
    }

    val seam = IntArray(height)
    seam[height - 1] = minEnergyIdx
    for (y in height - 2 downTo 0) {
        seam[y] = edgeTo[y + 1][minEnergyIdx]
        minEnergyIdx = seam[y]
    }

    return seam
}

fun removeVerticalSeam(image: BufferedImage, seam: IntArray): BufferedImage {
    val width = image.width
    val height = image.height
    val resizedImage = BufferedImage(width - 1, height, BufferedImage.TYPE_INT_RGB)

    for (y in 0 until height) {
        var destIndex = 0
        for (x in 0 until width) {
            if (x != seam[y]) {
                resizedImage.setRGB(destIndex++, y, image.getRGB(x, y))
            }
        }
    }

    return resizedImage
}
