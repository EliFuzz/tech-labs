import kotlin.math.PI

fun degreeToRadian(degree: Double): Double {
    return degree * (PI / 180)
}

fun radianToDegree(radian: Double): Double {
    return radian * (180 / PI)
}
