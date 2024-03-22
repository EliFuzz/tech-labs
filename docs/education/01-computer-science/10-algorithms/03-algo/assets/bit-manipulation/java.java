public class BitOperations {

  public static int getBit(int number, int bitPosition) {
    return (number >> bitPosition) & 1;
  }

  public static int setBit(int number, int bitPosition) {
    return number | (1 << bitPosition);
  }

  public static int clearBit(int number, int bitPosition) {
    return number & ~(1 << bitPosition);
  }

  public static int updateBit(int number, int bitPosition, int bitValue) {
    int mask = ~(1 << bitPosition);
    return (number & mask) | (bitValue << bitPosition);
  }

  public static boolean isEven(int number) {
    return (number & 1) == 0;
  }

  public static boolean isPositive(int number) {
    return number >= 0 && (number & 0x80000000) == 0;
  }

  public static int multiplyByTwo(int number) {
    return number << 1;
  }

  public static int divideByTwo(int number) {
    return number >> 1;
  }

  public static int switchSign(int number) {
    return ~number + 1;
  }

  public static int multiply(int a, int b) {
    if (b == 0) {
      return 0;
    }
    if (b > 0) {
      return a + multiply(a, b - 1);
    }
    if (b < 0) {
      return -multiply(a, -b);
    }
    return 0;
  }

  public static int multiplyUnsigned(int x, int y) {
    int result = 0;
    while (y > 0) {
      if ((y & 1) == 1) {
        result += x;
      }
      x <<= 1;
      y >>= 1;
    }
    return result;
  }

  public static int countSetBits(int number) {
    int count = 0;
    while (number != 0) {
      count += number & 1;
      number >>= 1;
    }
    return count;
  }

  public static int bitsDiff(int a, int b) {
    int count = 0;
    int diff = a ^ b;
    while (diff != 0) {
      count += diff & 1;
      diff >>= 1;
    }
    return count;
  }

  public static int bitLength(int number) {
    int count = 0;
    while (number != 0) {
      count++;
      number >>= 1;
    }
    return count;
  }

  public static boolean isPowerOfTwo(int number) {
    return number != 0 && (number & (number - 1)) == 0;
  }

  public static int fullAdder(int a, int b) {
    int carry = 0;
    int result = 0;
    int i = 0;
    while (a != 0 || b != 0 || carry != 0) {
      int bitA = a & 1;
      int bitB = b & 1;
      int sum = bitA ^ bitB ^ carry;
      result |= sum << i;
      carry = (bitA & bitB) | (bitA & carry) | (bitB & carry);
      a >>= 1;
      b >>= 1;
      i++;
    }
    return result;
  }
}
