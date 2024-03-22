package main

type SimplePolynomialHash struct {
	base int
}

func NewSimplePolynomialHash(base int) *SimplePolynomialHash {
	return &SimplePolynomialHash{base}
}

func (s *SimplePolynomialHash) Hash(word string) int {
	hash := 0
	for charIndex := 0; charIndex < len(word); charIndex++ {
		hash += int(word[charIndex]) * pow(s.base, charIndex)
	}
	return hash
}

func (s *SimplePolynomialHash) Roll(prevHash int, prevWord string, newWord string) int {
	hash := prevHash
	prevValue := int(prevWord[0])
	newValue := int(newWord[len(newWord)-1])

	hash -= prevValue
	hash /= s.base
	hash += newValue * pow(s.base, len(newWord)-1)

	return hash
}

type PolynomialHash struct {
	base    int
	modulus int
}

func NewPolynomialHash(base, modulus int) *PolynomialHash {
	return &PolynomialHash{base, modulus}
}

func (p *PolynomialHash) Hash(word string) int {
	charCodes := make([]int, len(word))
	for i, char := range word {
		charCodes[i] = p.charToNumber(char)
	}

	hash := 0
	for _, charCode := range charCodes {
		hash *= p.base
		hash += charCode
		hash %= p.modulus
	}

	return hash
}

func (p *PolynomialHash) Roll(prevHash int, prevWord, newWord string) int {
	hash := prevHash
	prevValue := p.charToNumber(rune(prevWord[0]))
	newValue := p.charToNumber(rune(newWord[len(newWord)-1]))

	prevValueMultiplier := 1
	for i := 1; i < len(prevWord); i++ {
		prevValueMultiplier *= p.base
		prevValueMultiplier %= p.modulus
	}

	hash += p.modulus
	hash -= (prevValue * prevValueMultiplier) % p.modulus

	hash *= p.base
	hash += newValue
	hash %= p.modulus

	return hash
}

func (p *PolynomialHash) charToNumber(char rune) int {
	charCode := int(char)
	if surrogate := len(string(char)) == 2; surrogate {
		surrogateShift := 1 << 16
		charCode += int(char) * surrogateShift
	}
	return charCode
}

func pow(x, n int) int {
	result := 1
	for i := 0; i < n; i++ {
		result *= x
	}
	return result
}
