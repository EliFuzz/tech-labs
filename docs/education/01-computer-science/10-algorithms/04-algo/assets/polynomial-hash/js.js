class SimplePolynomialHash {
  constructor(base = 17) {
    this.base = base;
  }

  hash(word) {
    let hash = 0;
    for (let charIndex = 0; charIndex < word.length; charIndex += 1) {
      hash += word.charCodeAt(charIndex) * this.base ** charIndex;
    }

    return hash;
  }

  roll(prevHash, prevWord, newWord) {
    let hash = prevHash;

    const prevValue = prevWord.charCodeAt(0);
    const newValue = newWord.charCodeAt(newWord.length - 1);

    hash -= prevValue;
    hash /= this.base;
    hash += newValue * this.base ** (newWord.length - 1);

    return hash;
  }
}

class PolynomialHash {
  constructor({ base = 37, modulus = 101 } = {}) {
    this.base = base;
    this.modulus = modulus;
  }

  hash(word) {
    const charCodes = Array.from(word).map((char) => this.charToNumber(char));

    let hash = 0;
    for (let charIndex = 0; charIndex < charCodes.length; charIndex += 1) {
      hash *= this.base;
      hash += charCodes[charIndex];
      hash %= this.modulus;
    }

    return hash;
  }

  roll(prevHash, prevWord, newWord) {
    let hash = prevHash;

    const prevValue = this.charToNumber(prevWord[0]);
    const newValue = this.charToNumber(newWord[newWord.length - 1]);

    let prevValueMultiplier = 1;
    for (let i = 1; i < prevWord.length; i += 1) {
      prevValueMultiplier *= this.base;
      prevValueMultiplier %= this.modulus;
    }

    hash += this.modulus;
    hash -= (prevValue * prevValueMultiplier) % this.modulus;

    hash *= this.base;
    hash += newValue;
    hash %= this.modulus;

    return hash;
  }

  charToNumber(char) {
    let charCode = char.codePointAt(0);

    const surrogate = char.codePointAt(1);
    if (surrogate !== undefined) {
      const surrogateShift = 2 ** 16;
      charCode += surrogate * surrogateShift;
    }

    return charCode;
  }
}
