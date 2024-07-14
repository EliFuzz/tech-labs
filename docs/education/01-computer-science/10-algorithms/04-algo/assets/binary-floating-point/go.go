package main

import (
	"encoding/binary"
)

func FloatAsBinaryString(floatNumber float64, byteLength int) string {
	var numberAsBinaryString string

	buf := make([]byte, byteLength)
	switch byteLength {
	case 4:
		binary.LittleEndian.PutUint32(buf, math.Float32bits(float32(floatNumber)))
	case 8:
		binary.LittleEndian.PutUint64(buf, math.Float64bits(floatNumber))
	}

	for _, b := range buf {
		numberAsBinaryString += fmt.Sprintf("%08b", b)
	}

	return numberAsBinaryString
}
