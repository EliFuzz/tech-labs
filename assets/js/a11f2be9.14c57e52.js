"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3048],{57407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>I,contentTitle:()=>f,default:()=>b,frontMatter:()=>h,metadata:()=>c,toc:()=>m});var r=t(11527),i=t(88672),d=t(29140),l=t(52360),s=t(52296);const a='package main\n\nimport (\n\t"math"\n)\n\ntype SegmentTree struct {\n\tInputArray       []interface{}\n\tOperation        func(interface{}, interface{}) interface{}\n\tOperationFallback interface{}\n\tSegmentTree      []interface{}\n}\n\nfunc NewSegmentTree(inputArray []interface{}, operation func(interface{}, interface{}) interface{}, operationFallback interface{}) *SegmentTree {\n\tsegmentTree := &SegmentTree{\n\t\tInputArray:       inputArray,\n\t\tOperation:        operation,\n\t\tOperationFallback: operationFallback,\n\t\tSegmentTree:      make([]interface{}, 0),\n\t}\n\n\tsegmentTree.initSegmentTree(inputArray)\n\tsegmentTree.buildSegmentTree()\n\n\treturn segmentTree\n}\n\nfunc (st *SegmentTree) initSegmentTree(inputArray []interface{}) {\n\tinputArrayLength := len(inputArray)\n\tvar segmentTreeArrayLength int\n\n\tif st.isPowerOfTwo(inputArrayLength) {\n\t\tsegmentTreeArrayLength = (2 * inputArrayLength) - 1\n\t} else {\n\t\tcurrentPower := int(math.Log2(float64(inputArrayLength)))\n\t\tnextPower := currentPower + 1\n\t\tnextPowerOfTwoNumber := int(math.Pow(2, float64(nextPower)))\n\t\tsegmentTreeArrayLength = (2 * nextPowerOfTwoNumber) - 1\n\t}\n\n\tst.SegmentTree = make([]interface{}, segmentTreeArrayLength)\n\tfor i := range st.SegmentTree {\n\t\tst.SegmentTree[i] = st.OperationFallback\n\t}\n}\n\nfunc (st *SegmentTree) isPowerOfTwo(number int) bool {\n\tif number < 1 {\n\t\treturn false\n\t}\n\n\tdividedNumber := number\n\tfor dividedNumber != 1 {\n\t\tif dividedNumber%2 != 0 {\n\t\t\treturn false\n\t\t}\n\t\tdividedNumber /= 2\n\t}\n\n\treturn true\n}\n\nfunc (st *SegmentTree) buildSegmentTree() {\n\tleftIndex := 0\n\trightIndex := len(st.InputArray) - 1\n\tposition := 0\n\tst.buildTreeRecursively(leftIndex, rightIndex, position)\n}\n\nfunc (st *SegmentTree) buildTreeRecursively(leftInputIndex, rightInputIndex, position int) {\n\tif leftInputIndex == rightInputIndex {\n\t\tst.SegmentTree[position] = st.InputArray[leftInputIndex]\n\t\treturn\n\t}\n\n\tmiddleIndex := (leftInputIndex + rightInputIndex) / 2\n\tst.buildTreeRecursively(leftInputIndex, middleIndex, st.getLeftChildIndex(position))\n\tst.buildTreeRecursively(middleIndex+1, rightInputIndex, st.getRightChildIndex(position))\n\n\tst.SegmentTree[position] = st.Operation(st.SegmentTree[st.getLeftChildIndex(position)], st.SegmentTree[st.getRightChildIndex(position)])\n}\n\nfunc (st *SegmentTree) RangeQuery(queryLeftIndex, queryRightIndex int) interface{} {\n\tleftIndex := 0\n\trightIndex := len(st.InputArray) - 1\n\tposition := 0\n\n\treturn st.rangeQueryHelper(queryLeftIndex, queryRightIndex, leftIndex, rightIndex, position)\n}\n\nfunc (st *SegmentTree) rangeQueryHelper(queryLeftIndex, queryRightIndex, leftIndex, rightIndex, position int) interface{} {\n\tif queryLeftIndex <= leftIndex && queryRightIndex >= rightIndex {\n\t\treturn st.SegmentTree[position]\n\t}\n\n\tif queryLeftIndex > rightIndex || queryRightIndex < leftIndex {\n\t\treturn st.OperationFallback\n\t}\n\n\tmiddleIndex := (leftIndex + rightIndex) / 2\n\tleftOperationResult := st.rangeQueryHelper(queryLeftIndex, queryRightIndex, leftIndex, middleIndex, st.getLeftChildIndex(position))\n\trightOperationResult := st.rangeQueryHelper(queryLeftIndex, queryRightIndex, middleIndex+1, rightIndex, st.getRightChildIndex(position))\n\n\treturn st.Operation(leftOperationResult, rightOperationResult)\n}\n\nfunc (st *SegmentTree) getLeftChildIndex(parentIndex int) int {\n\treturn (2 * parentIndex) + 1\n}\n\nfunc (st *SegmentTree) getRightChildIndex(parentIndex int) int {\n\treturn (2 * parentIndex) + 2\n}\n',u="import java.util.ArrayList;\nimport java.util.List;\n\npublic class SegmentTree<T> {\n\n  private final BinaryOperation<T> operation;\n  private final T operationFallback;\n  private List<T> inputArray;\n  private List<T> segmentTree;\n\n  public SegmentTree(List<T> inputArray, BinaryOperation<T> operation, T operationFallback) {\n    this.inputArray = inputArray;\n    this.operation = operation;\n    this.operationFallback = operationFallback;\n    this.segmentTree = initSegmentTree(inputArray);\n    buildSegmentTree();\n  }\n\n  private List<T> initSegmentTree(List<T> inputArray) {\n    int inputArrayLength = inputArray.size();\n    int segmentTreeArrayLength;\n\n    if (isPowerOfTwo(inputArrayLength)) {\n      segmentTreeArrayLength = (2 * inputArrayLength) - 1;\n    } else {\n      int currentPower = (int) (Math.log(inputArrayLength) / Math.log(2));\n      int nextPower = currentPower + 1;\n      int nextPowerOfTwoNumber = (int) Math.pow(2, nextPower);\n      segmentTreeArrayLength = (2 * nextPowerOfTwoNumber) - 1;\n    }\n\n    List<T> segmentTree = new ArrayList<>(segmentTreeArrayLength);\n    for (int i = 0; i < segmentTreeArrayLength; i++) {\n      segmentTree.add(operationFallback);\n    }\n\n    return segmentTree;\n  }\n\n  private boolean isPowerOfTwo(int number) {\n    if (number < 1) {\n      return false;\n    }\n\n    int dividedNumber = number;\n    while (dividedNumber != 1) {\n      if (dividedNumber % 2 != 0) {\n        return false;\n      }\n      dividedNumber /= 2;\n    }\n\n    return true;\n  }\n\n  private void buildSegmentTree() {\n    int leftIndex = 0;\n    int rightIndex = inputArray.size() - 1;\n    int position = 0;\n    buildTreeRecursively(leftIndex, rightIndex, position);\n  }\n\n  private void buildTreeRecursively(int leftInputIndex, int rightInputIndex, int position) {\n    if (leftInputIndex == rightInputIndex) {\n      segmentTree.set(position, inputArray.get(leftInputIndex));\n      return;\n    }\n\n    int middleIndex = (leftInputIndex + rightInputIndex) / 2;\n    buildTreeRecursively(leftInputIndex, middleIndex, getLeftChildIndex(position));\n    buildTreeRecursively(middleIndex + 1, rightInputIndex, getRightChildIndex(position));\n\n    segmentTree.set(position, operation.apply(segmentTree.get(getLeftChildIndex(position)),\n        segmentTree.get(getRightChildIndex(position))));\n  }\n\n  public T rangeQuery(int queryLeftIndex, int queryRightIndex) {\n    int leftIndex = 0;\n    int rightIndex = inputArray.size() - 1;\n    int position = 0;\n    return rangeQueryHelper(queryLeftIndex, queryRightIndex, leftIndex, rightIndex, position);\n  }\n\n  private T rangeQueryHelper(int queryLeftIndex, int queryRightIndex, int leftIndex, int rightIndex, int position) {\n    if (queryLeftIndex <= leftIndex && queryRightIndex >= rightIndex) {\n      return segmentTree.get(position);\n    }\n\n    if (queryLeftIndex > rightIndex || queryRightIndex < leftIndex) {\n      return operationFallback;\n    }\n\n    int middleIndex = (leftIndex + rightIndex) / 2;\n    T leftOperationResult = rangeQueryHelper(queryLeftIndex, queryRightIndex, leftIndex, middleIndex, getLeftChildIndex(position));\n    T rightOperationResult = rangeQueryHelper(queryLeftIndex, queryRightIndex, middleIndex + 1, rightIndex, getRightChildIndex(position));\n\n    return operation.apply(leftOperationResult, rightOperationResult);\n  }\n\n  private int getLeftChildIndex(int parentIndex) {\n    return (2 * parentIndex) + 1;\n  }\n\n  private int getRightChildIndex(int parentIndex) {\n    return (2 * parentIndex) + 2;\n  }\n\n  public interface BinaryOperation<T> {\n\n    T apply(T a, T b);\n  }\n}\n",o="class SegmentTree {\n  constructor(inputArray, operation, operationFallback) {\n    this.inputArray = inputArray;\n    this.operation = operation;\n    this.operationFallback = operationFallback;\n\n    this.segmentTree = this.initSegmentTree(this.inputArray);\n\n    this.buildSegmentTree();\n  }\n\n  initSegmentTree(inputArray) {\n    let segmentTreeArrayLength;\n    const inputArrayLength = inputArray.length;\n\n    if (this.isPowerOfTwo(inputArrayLength)) {\n      segmentTreeArrayLength = 2 * inputArrayLength - 1;\n    } else {\n      const currentPower = Math.floor(Math.log2(inputArrayLength));\n      const nextPower = currentPower + 1;\n      const nextPowerOfTwoNumber = 2 ** nextPower;\n      segmentTreeArrayLength = 2 * nextPowerOfTwoNumber - 1;\n    }\n\n    return new Array(segmentTreeArrayLength).fill(null);\n  }\n\n  buildSegmentTree() {\n    const leftIndex = 0;\n    const rightIndex = this.inputArray.length - 1;\n    const position = 0;\n    this.buildTreeRecursively(leftIndex, rightIndex, position);\n  }\n\n  buildTreeRecursively(leftInputIndex, rightInputIndex, position) {\n    if (leftInputIndex === rightInputIndex) {\n      this.segmentTree[position] = this.inputArray[leftInputIndex];\n      return;\n    }\n\n    const middleIndex = Math.floor((leftInputIndex + rightInputIndex) / 2);\n    this.buildTreeRecursively(\n      leftInputIndex,\n      middleIndex,\n      this.getLeftChildIndex(position),\n    );\n    this.buildTreeRecursively(\n      middleIndex + 1,\n      rightInputIndex,\n      this.getRightChildIndex(position),\n    );\n\n    this.segmentTree[position] = this.operation(\n      this.segmentTree[this.getLeftChildIndex(position)],\n      this.segmentTree[this.getRightChildIndex(position)],\n    );\n  }\n\n  rangeQuery(queryLeftIndex, queryRightIndex) {\n    const leftIndex = 0;\n    const rightIndex = this.inputArray.length - 1;\n    const position = 0;\n\n    return this.rangeQueryRecursive(\n      queryLeftIndex,\n      queryRightIndex,\n      leftIndex,\n      rightIndex,\n      position,\n    );\n  }\n\n  rangeQueryRecursive(\n    queryLeftIndex,\n    queryRightIndex,\n    leftIndex,\n    rightIndex,\n    position,\n  ) {\n    if (queryLeftIndex <= leftIndex && queryRightIndex >= rightIndex) {\n      return this.segmentTree[position];\n    }\n\n    if (queryLeftIndex > rightIndex || queryRightIndex < leftIndex) {\n      return this.operationFallback;\n    }\n\n    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);\n\n    const leftOperationResult = this.rangeQueryRecursive(\n      queryLeftIndex,\n      queryRightIndex,\n      leftIndex,\n      middleIndex,\n      this.getLeftChildIndex(position),\n    );\n\n    const rightOperationResult = this.rangeQueryRecursive(\n      queryLeftIndex,\n      queryRightIndex,\n      middleIndex + 1,\n      rightIndex,\n      this.getRightChildIndex(position),\n    );\n\n    return this.operation(leftOperationResult, rightOperationResult);\n  }\n\n  getLeftChildIndex(parentIndex) {\n    return 2 * parentIndex + 1;\n  }\n\n  getRightChildIndex(parentIndex) {\n    return 2 * parentIndex + 2;\n  }\n\n  isPowerOfTwo(number) {\n    if (number < 1) {\n      return false;\n    }\n\n    let dividedNumber = number;\n    while (dividedNumber !== 1) {\n      if (dividedNumber % 2 !== 0) {\n        return false;\n      }\n      dividedNumber /= 2;\n    }\n\n    return true;\n  }\n}\n",g="data class SegmentTree<T>(\n        val inputArray: List<T>,\n        val operation: (T, T) -> T,\n        val operationFallback: T\n) {\n\n    var segmentTree: MutableList<T> = initSegmentTree(inputArray)\n\n    init {\n        buildSegmentTree()\n    }\n\n    private fun initSegmentTree(inputArray: List<T>): MutableList<T> {\n        val inputArrayLength = inputArray.size\n\n        val segmentTreeArrayLength = if (isPowerOfTwo(inputArrayLength)) {\n            (2 * inputArrayLength) - 1\n        } else {\n            val currentPower = (Math.log(inputArrayLength.toDouble()) / Math.log(2.0)).toInt()\n            val nextPower = currentPower + 1\n            val nextPowerOfTwoNumber = 2.0.pow(nextPower.toDouble()).toInt()\n            (2 * nextPowerOfTwoNumber) - 1\n        }\n\n        return MutableList(segmentTreeArrayLength) { _ -> operationFallback }\n    }\n\n    private fun isPowerOfTwo(number: Int): Boolean {\n        if (number < 1) {\n            return false\n        }\n\n        var dividedNumber = number\n        while (dividedNumber != 1) {\n            if (dividedNumber % 2 != 0) {\n                return false\n            }\n            dividedNumber /= 2\n        }\n\n        return true\n    }\n\n    private fun buildSegmentTree() {\n        val leftIndex = 0\n        val rightIndex = inputArray.size - 1\n        val position = 0\n        buildTreeRecursively(leftIndex, rightIndex, position)\n    }\n\n    private fun buildTreeRecursively(leftInputIndex: Int, rightInputIndex: Int, position: Int) {\n        if (leftInputIndex == rightInputIndex) {\n            segmentTree[position] = inputArray[leftInputIndex]\n            return\n        }\n\n        val middleIndex = (leftInputIndex + rightInputIndex) / 2\n        buildTreeRecursively(leftInputIndex, middleIndex, getLeftChildIndex(position))\n        buildTreeRecursively(middleIndex + 1, rightInputIndex, getRightChildIndex(position))\n\n        segmentTree[position] = operation(segmentTree[getLeftChildIndex(position)], segmentTree[getRightChildIndex(position)])\n    }\n\n    fun rangeQuery(queryLeftIndex: Int, queryRightIndex: Int): T {\n        val leftIndex = 0\n        val rightIndex = inputArray.size - 1\n        val position = 0\n\n        return rangeQueryHelper(queryLeftIndex, queryRightIndex, leftIndex, rightIndex, position)\n    }\n\n    private fun rangeQueryHelper(queryLeftIndex: Int, queryRightIndex: Int, leftIndex: Int, rightIndex: Int, position: Int): T {\n        if (queryLeftIndex <= leftIndex && queryRightIndex >= rightIndex) {\n            return segmentTree[position]\n        }\n\n        if (queryLeftIndex > rightIndex || queryRightIndex < leftIndex) {\n            return operationFallback\n        }\n\n        val middleIndex = (leftIndex + rightIndex) / 2\n        val leftOperationResult = rangeQueryHelper(queryLeftIndex, queryRightIndex, leftIndex, middleIndex, getLeftChildIndex(position))\n        val rightOperationResult = rangeQueryHelper(queryLeftIndex, queryRightIndex, middleIndex + 1, rightIndex, getRightChildIndex(position))\n\n        return operation(leftOperationResult, rightOperationResult)\n    }\n\n    private fun getLeftChildIndex(parentIndex: Int): Int {\n        return (2 * parentIndex) + 1\n    }\n\n    private fun getRightChildIndex(parentIndex: Int): Int {\n        return (2 * parentIndex) + 2\n    }\n}\n",x="class SegmentTree:\n    def __init__(self, input_array, operation, operation_fallback):\n        self.input_array = input_array\n        self.operation = operation\n        self.operation_fallback = operation_fallback\n        self.segment_tree = self.init_segment_tree(self.input_array)\n        self.build_segment_tree()\n\n    def init_segment_tree(self, input_array):\n        input_array_length = len(input_array)\n\n        if self.is_power_of_two(input_array_length):\n            segment_tree_array_length = 2 * input_array_length - 1\n        else:\n            current_power = int(input_array_length.bit_length() - 1)\n            next_power = current_power + 1\n            next_power_of_two_number = 2 ** next_power\n            segment_tree_array_length = 2 * next_power_of_two_number - 1\n\n        return [None] * segment_tree_array_length\n\n    def build_segment_tree(self):\n        left_index = 0\n        right_index = len(self.input_array) - 1\n        position = 0\n        self.build_tree_recursively(left_index, right_index, position)\n\n    def build_tree_recursively(self, left_input_index, right_input_index, position):\n        if left_input_index == right_input_index:\n            self.segment_tree[position] = self.input_array[left_input_index]\n            return\n\n        middle_index = (left_input_index + right_input_index) // 2\n        self.build_tree_recursively(\n            left_input_index,\n            middle_index,\n            self.get_left_child_index(position),\n        )\n        self.build_tree_recursively(\n            middle_index + 1,\n            right_input_index,\n            self.get_right_child_index(position),\n        )\n\n        self.segment_tree[position] = self.operation(\n            self.segment_tree[self.get_left_child_index(position)],\n            self.segment_tree[self.get_right_child_index(position)],\n        )\n\n    def range_query(self, query_left_index, query_right_index):\n        left_index = 0\n        right_index = len(self.input_array) - 1\n        position = 0\n\n        return self.range_query_recursive(\n            query_left_index,\n            query_right_index,\n            left_index,\n            right_index,\n            position,\n        )\n\n    def range_query_recursive(\n        self, query_left_index, query_right_index, left_index, right_index, position\n    ):\n        if query_left_index <= left_index and query_right_index >= right_index:\n            return self.segment_tree[position]\n\n        if query_left_index > right_index or query_right_index < left_index:\n            return self.operation_fallback\n\n        middle_index = (left_index + right_index) // 2\n\n        left_operation_result = self.range_query_recursive(\n            query_left_index,\n            query_right_index,\n            left_index,\n            middle_index,\n            self.get_left_child_index(position),\n        )\n\n        right_operation_result = self.range_query_recursive(\n            query_left_index,\n            query_right_index,\n            middle_index + 1,\n            right_index,\n            self.get_right_child_index(position),\n        )\n\n        return self.operation(left_operation_result, right_operation_result)\n\n    def get_left_child_index(self, parent_index):\n        return 2 * parent_index + 1\n\n    def get_right_child_index(self, parent_index):\n        return 2 * parent_index + 2\n\n    def is_power_of_two(self, number):\n        if number < 1:\n            return False\n\n        divided_number = number\n        while divided_number != 1:\n            if divided_number % 2 != 0:\n                return False\n            divided_number //= 2\n\n        return True\n",p="struct SegmentTree<T> {\n    input_array: Vec<T>,\n    operation: fn(T, T) -> T,\n    operation_fallback: T,\n    segment_tree: Vec<T>,\n}\n\nimpl<T> SegmentTree<T> {\n    fn new(input_array: Vec<T>, operation: fn(T, T) -> T, operation_fallback: T) -> Self {\n        let mut segment_tree = Self::init_segment_tree(&input_array);\n\n        Self {\n            input_array,\n            operation,\n            operation_fallback,\n            segment_tree,\n        }\n    }\n\n    fn init_segment_tree(input_array: &Vec<T>) -> Vec<T> {\n        let input_array_length = input_array.len();\n        let mut segment_tree_array_length;\n\n        if Self::is_power_of_two(input_array_length) {\n            segment_tree_array_length = 2 * input_array_length - 1;\n        } else {\n            let current_power = (input_array_length as f64).log2().floor() as usize;\n            let next_power = current_power + 1;\n            let next_power_of_two_number = 2usize.pow(next_power as u32);\n            segment_tree_array_length = 2 * next_power_of_two_number - 1;\n        }\n\n        vec![None; segment_tree_array_length]\n    }\n\n    fn is_power_of_two(number: usize) -> bool {\n        if number < 1 {\n            return false;\n        }\n\n        let mut divided_number = number;\n        while divided_number != 1 {\n            if divided_number % 2 != 0 {\n                return false;\n            }\n            divided_number /= 2;\n        }\n\n        true\n    }\n\n    fn build_segment_tree(&mut self) {\n        let left_index = 0;\n        let right_index = self.input_array.len() - 1;\n        let position = 0;\n        self.build_tree_recursively(left_index, right_index, position);\n    }\n\n    fn build_tree_recursively(&mut self, left_input_index: usize, right_input_index: usize, position: usize) {\n        if left_input_index == right_input_index {\n            self.segment_tree[position] = self.input_array[left_input_index].clone();\n            return;\n        }\n\n        let middle_index = (left_input_index + right_input_index) / 2;\n        self.build_tree_recursively(\n            left_input_index,\n            middle_index,\n            self.get_left_child_index(position),\n        );\n        self.build_tree_recursively(\n            middle_index + 1,\n            right_input_index,\n            self.get_right_child_index(position),\n        );\n\n        self.segment_tree[position] = (self.operation)(\n            self.segment_tree[self.get_left_child_index(position)].clone(),\n            self.segment_tree[self.get_right_child_index(position)].clone(),\n        );\n    }\n\n    fn range_query(&self, query_left_index: usize, query_right_index: usize) -> T {\n        let left_index = 0;\n        let right_index = self.input_array.len() - 1;\n        let position = 0;\n\n        self.range_query_recursive(\n            query_left_index,\n            query_right_index,\n            left_index,\n            right_index,\n            position,\n        )\n    }\n\n    fn range_query_recursive(\n        &self,\n        query_left_index: usize,\n        query_right_index: usize,\n        left_index: usize,\n        right_index: usize,\n        position: usize,\n    ) -> T {\n        if query_left_index <= left_index && query_right_index >= right_index {\n            return self.segment_tree[position].clone();\n        }\n\n        if query_left_index > right_index || query_right_index < left_index {\n            return self.operation_fallback.clone();\n        }\n\n        let middle_index = (left_index + right_index) / 2;\n\n        let left_operation_result = self.range_query_recursive(\n            query_left_index,\n            query_right_index,\n            left_index,\n            middle_index,\n            self.get_left_child_index(position),\n        );\n\n        let right_operation_result = self.range_query_recursive(\n            query_left_index,\n            query_right_index,\n            middle_index + 1,\n            right_index,\n            self.get_right_child_index(position),\n        );\n\n        (self.operation)(left_operation_result, right_operation_result)\n    }\n\n    fn get_left_child_index(&self, parent_index: usize) -> usize {\n        2 * parent_index + 1\n    }\n\n    fn get_right_child_index(&self, parent_index: usize) -> usize {\n        2 * parent_index + 2\n    }\n}\n",_="class SegmentTree<T> {\n  inputArray: T[];\n  operation: (a: T, b: T) => T;\n  operationFallback: T;\n  segmentTree: (T | null)[];\n\n  constructor(\n    inputArray: T[],\n    operation: (a: T, b: T) => T,\n    operationFallback: T,\n  ) {\n    this.inputArray = inputArray;\n    this.operation = operation;\n    this.operationFallback = operationFallback;\n\n    this.segmentTree = this.initSegmentTree(this.inputArray);\n\n    this.buildSegmentTree();\n  }\n\n  rangeQuery(queryLeftIndex: number, queryRightIndex: number): T {\n    const leftIndex = 0;\n    const rightIndex = this.inputArray.length - 1;\n    const position = 0;\n\n    return this.rangeQueryRecursive(\n      queryLeftIndex,\n      queryRightIndex,\n      leftIndex,\n      rightIndex,\n      position,\n    );\n  }\n\n  private initSegmentTree(inputArray: T[]): (T | null)[] {\n    let segmentTreeArrayLength: number;\n    const inputArrayLength = inputArray.length;\n\n    if (this.isPowerOfTwo(inputArrayLength)) {\n      segmentTreeArrayLength = 2 * inputArrayLength - 1;\n    } else {\n      const currentPower = Math.floor(Math.log2(inputArrayLength));\n      const nextPower = currentPower + 1;\n      const nextPowerOfTwoNumber = 2 ** nextPower;\n      segmentTreeArrayLength = 2 * nextPowerOfTwoNumber - 1;\n    }\n\n    return new Array(segmentTreeArrayLength).fill(null);\n  }\n\n  private buildSegmentTree(): void {\n    const leftIndex = 0;\n    const rightIndex = this.inputArray.length - 1;\n    const position = 0;\n    this.buildTreeRecursively(leftIndex, rightIndex, position);\n  }\n\n  private buildTreeRecursively(\n    leftInputIndex: number,\n    rightInputIndex: number,\n    position: number,\n  ): void {\n    if (leftInputIndex === rightInputIndex) {\n      this.segmentTree[position] = this.inputArray[leftInputIndex];\n      return;\n    }\n\n    const middleIndex = Math.floor((leftInputIndex + rightInputIndex) / 2);\n    this.buildTreeRecursively(\n      leftInputIndex,\n      middleIndex,\n      this.getLeftChildIndex(position),\n    );\n    this.buildTreeRecursively(\n      middleIndex + 1,\n      rightInputIndex,\n      this.getRightChildIndex(position),\n    );\n\n    this.segmentTree[position] = this.operation(\n      this.segmentTree[this.getLeftChildIndex(position)],\n      this.segmentTree[this.getRightChildIndex(position)],\n    );\n  }\n\n  private rangeQueryRecursive(\n    queryLeftIndex: number,\n    queryRightIndex: number,\n    leftIndex: number,\n    rightIndex: number,\n    position: number,\n  ): T {\n    if (queryLeftIndex <= leftIndex && queryRightIndex >= rightIndex) {\n      return this.segmentTree[position] as T;\n    }\n\n    if (queryLeftIndex > rightIndex || queryRightIndex < leftIndex) {\n      return this.operationFallback;\n    }\n\n    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);\n\n    const leftOperationResult = this.rangeQueryRecursive(\n      queryLeftIndex,\n      queryRightIndex,\n      leftIndex,\n      middleIndex,\n      this.getLeftChildIndex(position),\n    );\n\n    const rightOperationResult = this.rangeQueryRecursive(\n      queryLeftIndex,\n      queryRightIndex,\n      middleIndex + 1,\n      rightIndex,\n      this.getRightChildIndex(position),\n    );\n\n    return this.operation(leftOperationResult, rightOperationResult);\n  }\n\n  private getLeftChildIndex(parentIndex: number): number {\n    return 2 * parentIndex + 1;\n  }\n\n  private getRightChildIndex(parentIndex: number): number {\n    return 2 * parentIndex + 2;\n  }\n\n  private isPowerOfTwo(number: number): boolean {\n    if (number < 1) {\n      return false;\n    }\n\n    let dividedNumber = number;\n    while (dividedNumber !== 1) {\n      if (dividedNumber % 2 !== 0) {\n        return false;\n      }\n      dividedNumber /= 2;\n    }\n\n    return true;\n  }\n}\n",h={title:"Segment Tree",description:"Segment Tree Data Structure",hide_table_of_contents:!0},f=void 0,c={id:"education/computer-science/data-structures/basic/segment-tree",title:"Segment Tree",description:"Segment Tree Data Structure",source:"@site/docs/education/01-computer-science/09-data-structures/02-basic/13-segment-tree.mdx",sourceDirName:"education/01-computer-science/09-data-structures/02-basic",slug:"/education/computer-science/data-structures/basic/segment-tree",permalink:"/tech-labs/docs/education/computer-science/data-structures/basic/segment-tree",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/09-data-structures/02-basic/13-segment-tree.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Segment Tree",description:"Segment Tree Data Structure",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Red-Black Tree",permalink:"/tech-labs/docs/education/computer-science/data-structures/basic/red\u2013black-tree"},next:{title:"Binary Indexed Tree",permalink:"/tech-labs/docs/education/computer-science/data-structures/basic/binary-indexed-tree"}},I={},m=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function y(e){const n={admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(73975).Z+""})}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("thead",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Space"}),(0,r.jsx)("th",{colspan:"4",children:"Time"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{}),(0,r.jsx)("th",{children:"Access"}),(0,r.jsx)("th",{children:"Lookup"}),(0,r.jsx)("th",{children:"Insertion"}),(0,r.jsx)("th",{children:"Deletion"})]})]}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"fair",children:"O(n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)(l.Z,{value:"short",label:"Short",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Segment Tree"})," is a data structure that allows efficient range queries on an array. It's built by recursively dividing the array into smaller segments and storing the results of operations on\nthose segments."]}),(0,r.jsx)(n.admonition,{title:"Simplified",type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Segment Tree"})," is like a librarian for data. It organizes data into segments for quick searches and updates, similar to how a librarian sorts books into sections for easy access. However, once\nthe Segment Tree is built, it can't be modified. It's a tool for efficient data management and retrieval."]})})]}),(0,r.jsxs)(l.Z,{value:"detailed",label:"Detailed",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Segment Tree"}),", or statistic tree, is a static binary tree data structure used for storing interval information. It enables queries to determine which stored segments contain a given point. The\ntree's root represents an entire array, with its children representing the array's halves. This pattern continues down the tree."]}),(0,r.jsxs)(n.p,{children:["The tree is built from the bottom up, with each node's value being the \"minimum\" (or another function) of its children's values. This process takes ",(0,r.jsx)(n.code,{children:"O(n log n)"})," time. For range queries, each node\ndivides the query into 2 sub-queries for each child. if a query encompasses a node's entire subarray, the precomputed node value can be used."]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(l.Z,{value:"practice",label:"Practice",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Aspect"}),(0,r.jsx)("th",{children:"Pseudo Code"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Init"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"constructor(input_array, operation, operation_fallback):\n  input_array = input_array\n  operation = operation\n  operation_fallback = operation_fallback\n  segment_tree = init_segment_tree(input_array)\n\n  build_segment_tree()\n\ninit_segment_tree(input_array):\n  input_array_length = length(input_array)\n  if is_power_of_two(input_array_length):\n    segment_tree_array_length = (2 * input_array_length) - 1\n  else:\n    current_power = floor(log2(input_array_length))\n    next_power = current_power + 1\n    next_powerOfTwoNumber = 2^next_power\n    segment_tree_array_length = (2 * next_powerOfTwoNumber) - 1\n  return Array(segment_tree_array_length)\n\nis_power_of_two(number):\n  if number < 1:\n    return False\n  divided_number = number\n  While divided_number \u2260 1:\n    if divided_number % 2 \u2260 0:\n      return False\n    divided_number /= 2\n  return True\n\nbuild_segment_tree():\n  left_index = 0\n  right_index = input_array.length - 1\n  position = 0\n  build_tree_recursively(left_index, right_index, position)\n\nbuild_tree_recursively(left_input_index, right_input_index, position):\n  if left_input_index = right_input_index:\n    segment_tree[position] = input_array[left_input_index]\n    return\n  middle_index = floor((left_input_index + right_input_index) / 2)\n  build_tree_recursively(left_input_index, middle_index, get_left_child_index(position))\n  build_tree_recursively(middle_index + 1, right_input_index, get_right_child_index(position))\n  segment_tree[position] = operation(\n    segment_tree[get_left_child_index(position)],\n    segment_tree[get_right_child_index(position)]\n  )\n\nget_left_child_index(parentIndex):\n  return (2 * parentIndex) + 1\n\nget_right_child_index(parentIndex):\n  return (2 * parentIndex) + 2\n"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Range Query"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"range_query(query_left_index, query_right_index):\n  left_index = 0\n  right_index = input_array.length - 1\n  position = 0\n  return range_query_helper(query_left_index, query_right_index, left_index, right_index, position)\n\nrange_query_helper(query_left_index, query_right_index, left_index, right_index, position):\n  if query_left_index \u2264 left_index and query_right_index \u2265 right_index:\n    return segment_tree[position]\n  if query_left_index > right_index or query_right_index < left_index:\n    return operation_fallback\n  middle_index = floor((left_index + right_index) / 2)\n  left_operation_result = range_queryRecursive(\n    query_left_index, query_right_index, left_index, middle_index, get_left_child_index(position)\n  )\n  right_operation_result = range_queryRecursive(\n    query_left_index, query_right_index, middle_index + 1, right_index, get_right_child_index(position)\n  )\n  return operation(left_operation_result, right_operation_result)\n\nget_left_child_index(parentIndex):\n  return (2 * parentIndex) + 1\n\nget_right_child_index(parentIndex):\n  return (2 * parentIndex) + 2\n"})})})]})]})]})}),(0,r.jsx)(l.Z,{value:"solution",label:"Solution",children:(0,r.jsxs)(d.Z,{queryString:"code",children:[(0,r.jsx)(l.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,r.jsx)(s.Z,{language:"go",children:a})}),(0,r.jsx)(l.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,r.jsx)(s.Z,{language:"java",children:u})}),(0,r.jsx)(l.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,r.jsx)(s.Z,{language:"js",children:o})}),(0,r.jsx)(l.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,r.jsx)(s.Z,{language:"kotlin",children:g})}),(0,r.jsx)(l.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,r.jsx)(s.Z,{language:"python",children:x})}),(0,r.jsx)(l.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,r.jsx)(s.Z,{language:"rust",children:p})}),(0,r.jsx)(l.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,r.jsx)(s.Z,{language:"ts",children:_})})]})})]})]})}function b(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(y,{...e})}):y(e)}},73975:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/segmentTree-5611f5cd710b4595f8925c5fa445728c.svg"}}]);