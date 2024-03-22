package main

func accessElement(arr []int, index int) int {
	return arr[index]
}

func updateElement(arr []int, index, value int) {
	arr[index] = value
}

func findLength(arr []int) int {
	return len(arr)
}

func iterateElements(arr []int) {
	for _, element := range arr {
		fmt.Println(element)
	}
}

func appendElement(arr []int, value int) []int {
	return append(arr, value)
}

func insertElement(arr []int, index, value int) []int {
	arr = append(arr[:index], append([]int{value}, arr[index:]...)...)
	return arr
}

func deleteElement(arr []int, index int) []int {
	return append(arr[:index], arr[index+1:]...)
}

func removeElement(arr []int, value int) []int {
	for i := range arr {
		if arr[i] == value {
			return append(arr[:i], arr[i+1:]...)
		}
	}
	return arr
}

func popElement(arr []int, index int) (int, []int) {
	value := arr[index]
	return value, append(arr[:index], arr[index+1:]...)
}

func searchElement(arr []int, value int) bool {
	for _, element := range arr {
		if element == value {
			return true
		}
	}
	return false
}

func indexOfElement(arr []int, value int) int {
	for i, element := range arr {
		if element == value {
			return i
		}
	}
	return -1
}

func sortArray(arr []int) {
	sort.Slice(arr, func(i, j int) bool {
		return arr[i] < arr[j]
	})
}

func reverseArray(arr []int) {
	for i, j := 0, len(arr)-1; i < j; i, j = i+1, j-1 {
		arr[i], arr[j] = arr[j], arr[i]
	}
}

func copyArray(arr []int) []int {
	newArr := make([]int, len(arr))
	copy(newArr, arr)
	return newArr
}

func sliceArray(arr []int, start, stop int) []int {
	return arr[start:stop]
}

func concatenateArrays(arr1, arr2 []int) []int {
	return append(arr1, arr2...)
}
