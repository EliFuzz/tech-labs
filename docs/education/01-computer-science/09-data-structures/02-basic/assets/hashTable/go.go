type HashTable struct {
    table []*Pair
    size  int
}

type Pair struct {
    Key   string
    Value interface{}
}

func NewHashTable(size int) *HashTable {
    return &HashTable{
        table: make([]*Pair, size),
        size:  size,
    }
}

func (ht *HashTable) hash(key string) int {
    return int(crc32.ChecksumIEEE([]byte(key)) % uint32(ht.size))
}

func (ht *HashTable) Insert(key string, value interface{}) {
    index := ht.hash(key)
    ht.table[index] = &Pair{Key: key, Value: value}
}

func (ht *HashTable) Search(key string) interface{} {
    index := ht.hash(key)
    if ht.table[index] != nil {
        return ht.table[index].Value
    }
    return nil
}

func (ht *HashTable) Delete(key string) {
    index := ht.hash(key)
    ht.table[index] = nil
}
