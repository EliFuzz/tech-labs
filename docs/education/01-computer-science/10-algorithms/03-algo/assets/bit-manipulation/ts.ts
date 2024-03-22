function getBit(number: number, bitPosition: number): number {
  return (number >> bitPosition) & 1;
}

function setBit(number: number, bitPosition: number): number {
  return number | (1 << bitPosition);
}

function clearBit(number: number, bitPosition: number): number {
  return number & ~(1 << bitPosition);
}

function updateBit(
  number: number,
  bitPosition: number,
  bitValue: number,
): number {
  const mask = ~(1 << bitPosition);
  return (number & mask) | (bitValue << bitPosition);
}

function isEven(number: number): boolean {
  return (number & 1) === 0;
}

function isPositive(number: number): boolean {
  return number >= 0 && (number & 0x80000000) === 0;
}

function multiplyByTwo(number: number): number {
  return number << 1;
}

function divideByTwo(number: number): number {
  return number >> 1;
}

function switchSign(number: number): number {
  return ~number + 1;
}

function multiply(a: number, b: number): number {
  if (b === 0) {
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

function multiplyUnsigned(x: number, y: number): number {
  let result = 0;
  while (y > 0) {
    if (y & 1) {
      result += x;
    }
    x <<= 1;
    y >>= 1;
  }
  return result;
}

function countSetBits(number: number): number {
  let count = 0;
  while (number) {
    count += number & 1;
    number >>= 1;
  }
  return count;
}

function bitsDiff(a: number, b: number): number {
  let count = 0;
  let diff = a ^ b;
  while (diff) {
    count += diff & 1;
    diff >>= 1;
  }
  return count;
}

function bitLength(number: number): number {
  let count = 0;
  while (number) {
    count++;
    number >>= 1;
  }
  return count;
}

function isPowerOfTwo(number: number): boolean {
  return number !== 0 && (number & (number - 1)) === 0;
}

function fullAdder(a: number, b: number): number {
  let carry = 0;
  let result = 0;
  let i = 0;
  while (a !== 0 || b !== 0 || carry !== 0) {
    const bitA = a & 1;
    const bitB = b & 1;
    const sum = bitA ^ bitB ^ carry;
    result |= sum << i;
    carry = (bitA & bitB) | (bitA & carry) | (bitB & carry);
    a >>= 1;
    b >>= 1;
    i++;
  }
  return result;
}
