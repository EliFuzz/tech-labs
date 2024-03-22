package main

import (
	"math"
)

type SegmentTree struct {
	InputArray       []interface{}
	Operation        func(interface{}, interface{}) interface{}
	OperationFallback interface{}
	SegmentTree      []interface{}
}

func NewSegmentTree(inputArray []interface{}, operation func(interface{}, interface{}) interface{}, operationFallback interface{}) *SegmentTree {
	segmentTree := &SegmentTree{
		InputArray:       inputArray,
		Operation:        operation,
		OperationFallback: operationFallback,
		SegmentTree:      make([]interface{}, 0),
	}

	segmentTree.initSegmentTree(inputArray)
	segmentTree.buildSegmentTree()

	return segmentTree
}

func (st *SegmentTree) initSegmentTree(inputArray []interface{}) {
	inputArrayLength := len(inputArray)
	var segmentTreeArrayLength int

	if st.isPowerOfTwo(inputArrayLength) {
		segmentTreeArrayLength = (2 * inputArrayLength) - 1
	} else {
		currentPower := int(math.Log2(float64(inputArrayLength)))
		nextPower := currentPower + 1
		nextPowerOfTwoNumber := int(math.Pow(2, float64(nextPower)))
		segmentTreeArrayLength = (2 * nextPowerOfTwoNumber) - 1
	}

	st.SegmentTree = make([]interface{}, segmentTreeArrayLength)
	for i := range st.SegmentTree {
		st.SegmentTree[i] = st.OperationFallback
	}
}

func (st *SegmentTree) isPowerOfTwo(number int) bool {
	if number < 1 {
		return false
	}

	dividedNumber := number
	for dividedNumber != 1 {
		if dividedNumber%2 != 0 {
			return false
		}
		dividedNumber /= 2
	}

	return true
}

func (st *SegmentTree) buildSegmentTree() {
	leftIndex := 0
	rightIndex := len(st.InputArray) - 1
	position := 0
	st.buildTreeRecursively(leftIndex, rightIndex, position)
}

func (st *SegmentTree) buildTreeRecursively(leftInputIndex, rightInputIndex, position int) {
	if leftInputIndex == rightInputIndex {
		st.SegmentTree[position] = st.InputArray[leftInputIndex]
		return
	}

	middleIndex := (leftInputIndex + rightInputIndex) / 2
	st.buildTreeRecursively(leftInputIndex, middleIndex, st.getLeftChildIndex(position))
	st.buildTreeRecursively(middleIndex+1, rightInputIndex, st.getRightChildIndex(position))

	st.SegmentTree[position] = st.Operation(st.SegmentTree[st.getLeftChildIndex(position)], st.SegmentTree[st.getRightChildIndex(position)])
}

func (st *SegmentTree) RangeQuery(queryLeftIndex, queryRightIndex int) interface{} {
	leftIndex := 0
	rightIndex := len(st.InputArray) - 1
	position := 0

	return st.rangeQueryHelper(queryLeftIndex, queryRightIndex, leftIndex, rightIndex, position)
}

func (st *SegmentTree) rangeQueryHelper(queryLeftIndex, queryRightIndex, leftIndex, rightIndex, position int) interface{} {
	if queryLeftIndex <= leftIndex && queryRightIndex >= rightIndex {
		return st.SegmentTree[position]
	}

	if queryLeftIndex > rightIndex || queryRightIndex < leftIndex {
		return st.OperationFallback
	}

	middleIndex := (leftIndex + rightIndex) / 2
	leftOperationResult := st.rangeQueryHelper(queryLeftIndex, queryRightIndex, leftIndex, middleIndex, st.getLeftChildIndex(position))
	rightOperationResult := st.rangeQueryHelper(queryLeftIndex, queryRightIndex, middleIndex+1, rightIndex, st.getRightChildIndex(position))

	return st.Operation(leftOperationResult, rightOperationResult)
}

func (st *SegmentTree) getLeftChildIndex(parentIndex int) int {
	return (2 * parentIndex) + 1
}

func (st *SegmentTree) getRightChildIndex(parentIndex int) int {
	return (2 * parentIndex) + 2
}
