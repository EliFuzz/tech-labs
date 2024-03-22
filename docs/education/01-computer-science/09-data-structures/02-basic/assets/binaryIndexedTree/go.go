package main

import (
	"errors"
)

type FenwickTree struct {
	arraySize int
	treeArray []int
}

func NewFenwickTree(arraySize int) *FenwickTree {
	treeArray := make([]int, arraySize+1)
	return &FenwickTree{arraySize: arraySize, treeArray: treeArray}
}

func (f *FenwickTree) Increase(position, value int) error {
	if position < 1 || position > f.arraySize {
		return errors.New("Position is out of allowed range")
	}

	for i := position; i <= f.arraySize; i += i & -i {
		f.treeArray[i] += value
	}

	return nil
}

func (f *FenwickTree) Query(position int) (int, error) {
	if position < 1 || position > f.arraySize {
		return 0, errors.New("Position is out of allowed range")
	}

	sum := 0

	for i := position; i > 0; i -= i & -i {
		sum += f.treeArray[i]
	}

	return sum, nil
}

func (f *FenwickTree) QueryRange(leftIndex, rightIndex int) (int, error) {
	if leftIndex > rightIndex {
		return 0, errors.New("Left index cannot be greater than right one")
	}

	if leftIndex == 1 {
		return f.Query(rightIndex)
	}

	return f.Query(rightIndex) - f.Query(leftIndex-1), nil
}
