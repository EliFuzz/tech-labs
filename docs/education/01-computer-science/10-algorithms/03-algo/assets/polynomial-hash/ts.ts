class SimplePolynomialHash {
  private base: number;

  constructor(base: number = 17) {
    this.base = base;
  }

  hash(word: string): number {
    let hash = 0;
    for (let charIndex = 0; charIndex < word.length; charIndex += 1) {
      hash += word.charCodeAt(charIndex) * Math.pow(this.base, charIndex);
    }
    return hash;
  }

  roll(prevHash: number, prevWord: string, newWord: string): number {
    let hash = prevHash;

    const prevValue = prevWord.charCodeAt(0);
    const newValue = newWord.charCodeAt(newWord.length - 1);

    hash -= prevValue;
    hash /= this.base;
    hash += newValue * Math.pow(this.base, newWord.length - 1);

    return hash;
  }
}

class PolynomialHash {
  private base: number;
  private modulus: number;

  constructor({ base = 37, modulus = 101 } = {}) {
    this.base = base;
    this.modulus = modulus;
  }

  hash(word: string): number {
    const charCodes = Array.from(word).map((char) => this.charToNumber(char));

    let hash = 0;
    for (let charIndex = 0; charIndex < charCodes.length; charIndex += 1) {
      hash *= this.base;
      hash += charCodes[charIndex];
      hash %= this.modulus;
    }

    return hash;
  }

  roll(prevHash: number, prevWord: string, newWord: string): number {
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

  private charToNumber(char: string): number {
    let charCode = char.codePointAt(0)!;

    const surrogate = char.codePointAt(1);
    if (surrogate !== undefined) {
      const surrogateShift = 2 ** 16;
      charCode += surrogate! * surrogateShift;
    }

    return charCode;
  }
}
