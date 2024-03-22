package main

type BloomFilter struct {
	size    int
	storage []bool
}

func NewBloomFilter(size int) *BloomFilter {
	return &BloomFilter{
		size:    size,
		storage: make([]bool, size),
	}
}

func (bf *BloomFilter) insert(item string) {
	hashValues := bf.getHashValues(item)
	for _, val := range hashValues {
		bf.storage[val] = true
	}
}

func (bf *BloomFilter) mayContain(item string) bool {
	hashValues := bf.getHashValues(item)
	for _, hashIndex := range hashValues {
		if !bf.storage[hashIndex] {
			return false
		}
	}
	return true
}

func (bf *BloomFilter) getHashValues(item string) []int {
	return []int{bf.firstHash(item), bf.secondHash(item), bf.thirdHash(item)}
}

func (bf *BloomFilter) firstHash(item string) int {
	hash := 0
	for _, char := range item {
		hash = (hash << 5) + hash + int(char)
		hash &= hash
		hash = abs(hash)
	}
	return hash % bf.size
}

func (bf *BloomFilter) secondHash(item string) int {
	hash := 5381
	for _, char := range item {
		hash = (hash << 5) + hash + int(char)
	}
	return abs(hash) % bf.size
}

func (bf *BloomFilter) thirdHash(item string) int {
	hash := 0
	for _, char := range item {
		hash = (hash << 5) - hash
		hash += int(char)
		hash &= hash
	}
	return abs(hash) % bf.size
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}
