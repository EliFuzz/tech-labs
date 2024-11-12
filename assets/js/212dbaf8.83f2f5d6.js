"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9815],{36781:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>g,contentTitle:()=>_,default:()=>I,frontMatter:()=>m,metadata:()=>t,toc:()=>j});const t=JSON.parse('{"id":"education/computer-science/data-structures/basic/heap","title":"Heap","description":"Heap Data Structure","source":"@site/docs/education/01-computer-science/09-data-structures/02-basic/07-heap.mdx","sourceDirName":"education/01-computer-science/09-data-structures/02-basic","slug":"/education/computer-science/data-structures/basic/heap","permalink":"/tech-labs/docs/education/computer-science/data-structures/basic/heap","draft":false,"unlisted":false,"editUrl":"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/09-data-structures/02-basic/07-heap.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Heap","description":"Heap Data Structure","hide_table_of_contents":true},"sidebar":"education","previous":{"title":"Hast Table","permalink":"/tech-labs/docs/education/computer-science/data-structures/basic/hash-table"},"next":{"title":"Priority Queue","permalink":"/tech-labs/docs/education/computer-science/data-structures/basic/priority-queue"}}');var r=i(86070),a=i(15658),h=i(33407),l=i(33903),d=i(68171);const c='package main\n\ntype Heap struct {\n\tcomparator func(a, b interface{}) int\n\theap       []interface{}\n}\n\nfunc NewHeap(comparator func(a, b interface{}) int) *Heap {\n\treturn &Heap{\n\t\tcomparator: comparator,\n\t\theap:       []interface{}{},\n\t}\n}\n\nfunc (h *Heap) FindMin() interface{} {\n\tif len(h.heap) == 0 {\n\t\treturn nil\n\t}\n\treturn h.heap[0]\n}\n\nfunc (h *Heap) FindMax() interface{} {\n\tif len(h.heap) == 0 {\n\t\treturn nil\n\t}\n\treturn h.heap[len(h.heap)-1]\n}\n\nfunc (h *Heap) ExtractMin() interface{} {\n\tif len(h.heap) == 0 {\n\t\treturn nil\n\t}\n\n\tmin := h.heap[0]\n\th.heap[0] = h.heap[len(h.heap)-1]\n\th.heap = h.heap[:len(h.heap)-1]\n\th.heapifyDown()\n\n\treturn min\n}\n\nfunc (h *Heap) ExtractMax() interface{} {\n\tif len(h.heap) == 0 {\n\t\treturn nil\n\t}\n\n\tmax := h.heap[len(h.heap)-1]\n\th.heap[0] = h.heap[len(h.heap)-1]\n\th.heap = h.heap[:len(h.heap)-1]\n\th.heapifyDown()\n\n\treturn max\n}\n\nfunc (h *Heap) Insert(element interface{}) {\n\th.heap = append(h.heap, element)\n\th.heapifyUp()\n}\n\nfunc (h *Heap) IncreaseKey(index int, newKey interface{}) {\n\tif h.comparator(newKey, h.heap[index]) <= 0 {\n\t\tpanic("New key must be greater than current key")\n\t}\n\n\th.heap[index] = newKey\n\th.heapifyUp(index)\n}\n\nfunc (h *Heap) DecreaseKey(index int, newKey interface{}) {\n\tif h.comparator(newKey, h.heap[index]) >= 0 {\n\t\tpanic("New key must be less than current key")\n\t}\n\n\th.heap[index] = newKey\n\th.heapifyDown(index)\n}\n\nfunc (h *Heap) Meld(other *Heap) *Heap {\n\tmergedHeap := NewHeap(h.comparator)\n\tmergedHeap.heap = append(mergedHeap.heap, h.heap...)\n\tmergedHeap.heap = append(mergedHeap.heap, other.heap...)\n\n\tfor i := len(h.heap) / 2; i >= 0; i-- {\n\t\tmergedHeap.heapifyDown(i)\n\t}\n\n\treturn mergedHeap\n}\n\nfunc (h *Heap) heapifyUp(index int) {\n\tif index == 0 {\n\t\treturn\n\t}\n\n\tparentIndex := (index - 1) / 2\n\tcurrentElement := h.heap[index]\n\n\tfor index > 0 && h.comparator(currentElement, h.heap[parentIndex]) < 0 {\n\t\th.heap[index] = h.heap[parentIndex]\n\t\tindex = parentIndex\n\t\tparentIndex = (index - 1) / 2\n\t}\n\n\th.heap[index] = currentElement\n}\n\nfunc (h *Heap) heapifyDown(index int) {\n\tif index >= len(h.heap) {\n\t\treturn\n\t}\n\n\tfor index*2+1 < len(h.heap) {\n    leftChildIndex := index*2 + 1\n    rightChildIndex := index*2 + 2\n    leftChild := h.heap[leftChildIndex]\n    rightChild := h.heap[rightChildIndex]\n\n    minChildIndex := leftChildIndex\n    if rightChildIndex < len(h.heap) && h.comparator(rightChild, leftChild) < 0 {\n      minChildIndex = rightChildIndex\n    }\n\n    if h.comparator(h.heap[minChildIndex], h.heap[index]) < 0 {\n      break\n    }\n\n    h.heap[index] = h.heap[minChildIndex]\n    index = minChildIndex\n  }\n\n  h.heap[index] = h.heap[len(h.heap)-1]\n}\n',s='import java.util.ArrayList;\nimport java.util.Comparator;\nimport java.util.List;\n\npublic class Heap<T> {\n\n  private final Comparator<T> comparator;\n  private final List<T> heap;\n\n  public Heap(Comparator<T> comparator) {\n    this.comparator = comparator;\n    this.heap = new ArrayList<>();\n  }\n\n  public T findMin() {\n    if (heap.isEmpty()) {\n      return null;\n    }\n    return heap.get(0);\n  }\n\n  public T findMax() {\n    if (heap.isEmpty()) {\n      return null;\n    }\n    return heap.get(heap.size() - 1);\n  }\n\n  public T extractMin() {\n    if (heap.isEmpty()) {\n      return null;\n    }\n\n    T min = heap.get(0);\n    heap.set(0, heap.get(heap.size() - 1));\n    heap.remove(heap.size() - 1);\n    heapifyDown();\n\n    return min;\n  }\n\n  public T extractMax() {\n    if (heap.isEmpty()) {\n      return null;\n    }\n\n    T max = heap.get(heap.size() - 1);\n    heap.set(0, heap.get(heap.size() - 1));\n    heap.remove(heap.size() - 1);\n    heapifyDown();\n\n    return max;\n  }\n\n  public void insert(T element) {\n    heap.add(element);\n    heapifyUp();\n  }\n\n  public void increaseKey(int index, T newKey) {\n    if (comparator.compare(newKey, heap.get(index)) < 0) {\n      throw new IllegalArgumentException("New key must be greater than current key");\n    }\n\n    heap.set(index, newKey);\n    heapifyUp(index);\n  }\n\n  public void decreaseKey(int index, T newKey) {\n    if (comparator.compare(newKey, heap.get(index)) > 0) {\n      throw new IllegalArgumentException("New key must be less than current key");\n    }\n\n    heap.set(index, newKey);\n    heapifyDown(index);\n  }\n\n  public Heap<T> meld(Heap<T> other) {\n    Heap<T> mergedHeap = new Heap<>(comparator);\n    mergedHeap.heap.addAll(heap);\n    mergedHeap.heap.addAll(other.heap);\n\n    for (int i = heap.size() / 2; i >= 0; i--) {\n      mergedHeap.heapifyDown(i);\n    }\n\n    return mergedHeap;\n  }\n\n  private void heapifyUp(int index) {\n    int currentIndex = index;\n    T currentElement = heap.get(currentIndex);\n\n    while (currentIndex > 0) {\n      int parentIndex = (currentIndex - 1) / 2;\n      T parent = heap.get(parentIndex);\n\n      if (comparator.compare(currentElement, parent) >= 0) {\n        break;\n      }\n\n      heap.set(currentIndex, parent);\n      currentIndex = parentIndex;\n    }\n\n    heap.set(currentIndex, currentElement);\n  }\n\n  private void heapifyDown(int index) {\n    int currentIndex = index;\n\n    while (currentIndex < heap.size()) {\n      int leftChildIndex = 2 * currentIndex + 1;\n      int rightChildIndex = 2 * currentIndex + 2;\n      T leftChild = heap.getOrNull(leftChildIndex);\n      T rightChild = heap.getOrNull(rightChildIndex);\n\n      int minChildIndex = getMinChildIndex(leftChildIndex, rightChildIndex, leftChild, rightChild);\n\n      if (minChildIndex == -1 || comparator.compare(heap.get(minChildIndex), heap.get(currentIndex)) >= 0) {\n        break;\n      }\n\n      T minChild = heap.get(minChildIndex);\n      heap.set(currentIndex, minChild);\n      currentIndex = minChildIndex;\n    }\n\n    heap.set(currentIndex, heap.get(index));\n  }\n\n  private int getMinChildIndex(int leftChildIndex, int rightChildIndex, T leftChild, T rightChild) {\n    if (leftChild == null || rightChild == null) {\n      return (leftChild == null) ? leftChildIndex : rightChildIndex;\n    } else {\n      int leftChildComparison = comparator.compare(leftChild, rightChild);\n      if (leftChildComparison == 0) {\n        return (comparator.compare(leftChild, heap.get(currentIndex)) <= 0) ? leftChildIndex : rightChildIndex;\n      } else {\n        return (leftChildComparison == -1) ? leftChildIndex : rightChildIndex;\n      }\n    }\n  }\n}\n',p='class Heap {\n  constructor(comparator) {\n    this.comparator = comparator;\n    this.heap = [];\n  }\n\n  findMin() {\n    return this.heap[0] || null;\n  }\n\n  findMax() {\n    return this.heap[this.heap.length - 1] || null;\n  }\n\n  extractMin() {\n    if (this.heap.length === 0) {\n      return null;\n    }\n\n    const min = this.heap[0];\n    this.heap[0] = this.heap.pop();\n    this.heapifyDown();\n\n    return min;\n  }\n\n  extractMax() {\n    if (this.heap.length === 0) {\n      return null;\n    }\n\n    const max = this.heap.pop();\n    this.heap[0] = this.heap[this.heap.length - 1];\n    this.heapifyDown();\n\n    return max;\n  }\n\n  insert(element) {\n    this.heap.push(element);\n    this.heapifyUp();\n  }\n\n  increaseKey(index, newKey) {\n    if (this.comparator(newKey, this.heap[index]) < 0) {\n      throw new Error("New key must be greater than current key");\n    }\n\n    this.heap[index] = newKey;\n    this.heapifyUp(index);\n  }\n\n  decreaseKey(index, newKey) {\n    if (this.comparator(newKey, this.heap[index]) > 0) {\n      throw new Error("New key must be less than current key");\n    }\n\n    this.heap[index] = newKey;\n    this.heapifyDown(index);\n  }\n\n  meld(other) {\n    const mergedHeap = new Heap(this.comparator);\n    mergedHeap.heap = mergedHeap.heap.concat(this.heap, other.heap);\n\n    for (let i = this.heap.length / 2 - 1; i >= 0; i--) {\n      mergedHeap.heapifyDown(i);\n    }\n\n    return mergedHeap;\n  }\n\n  heapifyUp(index = this.heap.length - 1) {\n    let currentIndex = index;\n    const currentElement = this.heap[currentIndex];\n\n    while (currentIndex > 0) {\n      const parentIndex = Math.floor((currentIndex - 1) / 2);\n      const parent = this.heap[parentIndex];\n\n      if (this.comparator(currentElement, parent) >= 0) {\n        break;\n      }\n\n      this.heap[currentIndex] = parent;\n      currentIndex = parentIndex;\n    }\n\n    this.heap[currentIndex] = currentElement;\n  }\n\n  heapifyDown(index = 0) {\n    let currentIndex = index;\n\n    while (currentIndex < this.heap.length) {\n      const leftChildIndex = 2 * currentIndex + 1;\n      const rightChildIndex = 2 * currentIndex + 2;\n      const leftChild = this.heap[leftChildIndex];\n      const rightChild = this.heap[rightChildIndex];\n\n      const minChildIndex =\n        leftChild == null || rightChild == null\n          ? leftChild == null\n            ? leftChildIndex\n            : rightChildIndex\n          : this.comparator(leftChild, rightChild) === -1\n            ? leftChildIndex\n            : rightChildIndex;\n\n      if (\n        minChildIndex == null ||\n        this.comparator(this.heap[minChildIndex], this.heap[currentIndex]) >= 0\n      ) {\n        break;\n      }\n\n      const minChild = this.heap[minChildIndex];\n      this.heap[currentIndex] = minChild;\n      currentIndex = minChildIndex;\n    }\n\n    this.heap[currentIndex] = this.heap[index];\n  }\n}\n',x='class Heap<T>(private val comparator: (T, T) -> Int) {\n    private val heap: MutableList<T> = mutableListOf()\n\n    fun findMin(): T? = heap.firstOrNull()\n\n    fun findMax(): T? = heap.lastOrNull()\n\n    fun extractMin(): T? {\n        if (heap.isEmpty()) return null\n\n        val min = heap[0]\n        heap[0] = heap.last()\n        heap.removeAt(heap.lastIndex)\n        heapifyDown()\n\n        return min\n    }\n\n    fun extractMax(): T? {\n        if (heap.isEmpty()) return null\n\n        val max = heap.last()\n        heap[0] = heap.first()\n        heap.removeAt(heap.lastIndex)\n        heapifyDown()\n\n        return max\n    }\n\n    fun insert(element: T) {\n        heap.add(element)\n        heapifyUp()\n    }\n\n    fun increaseKey(index: Int, newKey: T) {\n        if (newKey < heap[index]) throw IllegalArgumentException("New key must be greater than current key")\n\n        heap[index] = newKey\n        heapifyUp(index)\n    }\n\n    fun decreaseKey(index: Int, newKey: T) {\n        if (newKey > heap[index]) throw IllegalArgumentException("New key must be less than current key")\n\n        heap[index] = newKey\n        heapifyDown(index)\n    }\n\n    fun meld(other: Heap<T>): Heap<T> {\n        val mergedHeap = Heap(comparator)\n        mergedHeap.heap.addAll(heap)\n        mergedHeap.heap.addAll(other.heap)\n\n        for (i in heap.size / 2 downTo 0) {\n            heapifyDown(i)\n        }\n\n        return mergedHeap\n    }\n\n    private fun heapifyUp(index: Int = heap.size - 1) {\n        var currentIndex = index\n        val currentElement = heap[currentIndex]\n\n        while (currentIndex > 0) {\n            val parentIndex = (currentIndex - 1) / 2\n            val parent = heap[parentIndex]\n\n            if (comparator(currentElement, parent) >= 0) break\n\n            heap[currentIndex] = parent\n            currentIndex = parentIndex\n        }\n\n        heap[currentIndex] = currentElement\n    }\n\n    private fun heapifyDown(index: Int = 0) {\n        var currentIndex = index\n\n        while (currentIndex < heap.size) {\n            val leftChildIndex = 2 * currentIndex + 1\n            val rightChildIndex = 2 * currentIndex + 2\n            val leftChild = heap.getOrNull(leftChildIndex)\n            val rightChild = heap.getOrNull(rightChildIndex)\n\n            val minChildIndex = if (leftChild == null || rightChild == null) {\n                if (leftChild == null) leftChildIndex else rightChildIndex\n            } else {\n                when (comparator(leftChild, rightChild)) {\n                    -1 -> leftChildIndex\n                    1 -> rightChildIndex\n                    else -> if (comparator(leftChild, heap[currentIndex]) <= 0) leftChildIndex else rightChildIndex\n                }\n            }\n\n            if (minChildIndex == null || comparator(heap[minChildIndex], heap[currentIndex]) >= 0) break\n\n            val minChild = heap[minChildIndex]\n            heap[currentIndex] = minChild\n            currentIndex = minChildIndex\n        }\n\n        heap[currentIndex] = heap[index]\n    }\n}\n',o='class Heap:\n    def __init__(self, comparator):\n        self.comparator = comparator\n        self.heap = []\n\n    def find_min(self):\n        if not self.heap:\n            return None\n        return self.heap[0]\n\n    def find_max(self):\n        if not self.heap:\n            return None\n        return self.heap[-1]\n\n    def extract_min(self):\n        if not self.heap:\n            return None\n\n        min_val = self.heap[0]\n        self.heap[0] = self.heap[-1]\n        self.heap.pop()\n        self.heapify_down()\n\n        return min_val\n\n    def extract_max(self):\n        if not self.heap:\n            return None\n\n        max_val = self.heap[-1]\n        self.heap[0] = self.heap[1]\n        self.heap.pop()\n        self.heapify_down()\n\n        return max_val\n\n    def insert(self, element):\n        self.heap.append(element)\n        self.heapify_up()\n\n    def increase_key(self, index, new_key):\n        if new_key < self.heap[index]:\n            raise ValueError("New key must be greater than current key")\n\n        self.heap[index] = new_key\n        self.heapify_up(index)\n\n    def decrease_key(self, index, new_key):\n        if new_key > self.heap[index]:\n            raise ValueError("New key must be less than current key")\n\n        self.heap[index] = new_key\n        self.heapify_down(index)\n\n    def meld(self, other):\n        merged_heap = Heap(self.comparator)\n        merged_heap.heap = self.heap + other.heap\n\n        for i in range(len(self.heap) // 2, -1, -1):\n            merged_heap.heapify_down(i)\n\n        return merged_heap\n\n    def heapify_up(self, index=None):\n        if index is None:\n            index = len(self.heap) - 1\n        current_index = index\n        current_element = self.heap[current_index]\n\n        while current_index > 0:\n            parent_index = (current_index - 1) // 2\n            parent = self.heap[parent_index]\n\n            if self.comparator(current_element, parent) >= 0:\n                break\n\n            self.heap[current_index] = parent\n            current_index = parent_index\n\n        self.heap[current_index] = current_element\n\n    def heapify_down(self, index=0):\n        current_index = index\n\n        while current_index < len(self.heap):\n            left_child_index = 2 * current_index + 1\n            right_child_index = 2 * current_index + 2\n            left_child = self.heap[left_child_index] if left_child_index < len(self.heap) else None\n            right_child = self.heap[right_child_index] if right_child_index < len(self.heap) else None\n\n            min_child_index = left_child_index if left_child is None or (right_child is not None and self.comparator(left_child, right_child) <= 0) else right_child_index\n\n            if min_child_index is None or self.comparator(self.heap[min_child_index], self.heap[current_index]) >= 0:\n                break\n\n            min_child = self.heap[min_child_index]\n            self.heap[current_index] = min_child\n            current_index = min_child_index\n\n        self.heap[current_index] = self.heap[index]\n',u='struct Heap<T> {\n    comparator: Box<dyn Fn(T, T) -> i32>,\n    heap: Vec<T>,\n}\n\nimpl<T> Heap<T> {\n  fn new(comparator: Box<dyn Fn(T, T) -> i32>) -> Self {\n      Heap {\n          comparator,\n          heap: vec![],\n      }\n  }\n\n  fn find_min(&self) -> Option<&T> {\n      self.heap.first()\n  }\n\n  fn find_max(&self) -> Option<&T> {\n      self.heap.last()\n  }\n\n  fn extract_min(&mut self) -> Option<T> {\n      if self.heap.is_empty() {\n          return None;\n      }\n\n      let min = self.heap[0].clone();\n      self.heap[0] = self.heap.pop().unwrap();\n      self.heapify_down();\n\n      Some(min)\n  }\n\n  fn extract_max(&mut self) -> Option<T> {\n      if self.heap.is_empty() {\n          return None;\n      }\n\n      let max = self.heap.pop().unwrap();\n      self.heapify_down();\n\n      Some(max)\n  }\n\n  fn insert(&mut self, element: T) {\n      self.heap.push(element);\n      self.heapify_up();\n  }\n\n  fn increase_key(&mut self, index: usize, new_key: T) {\n      if (self.comparator)(&self.heap[index], &new_key) >= 0 {\n          panic!("New key must be greater than current key");\n      }\n\n      self.heap[index] = new_key;\n      self.heapify_up(index);\n  }\n\n  fn decrease_key(&mut self, index: usize, new_key: T) {\n      if (self.comparator)(&self.heap[index], &new_key) <= 0 {\n          panic!("New key must be less than current key");\n      }\n\n      self.heap[index] = new_key;\n      self.heapify_down(index);\n  }\n\n  fn meld(&mut self, other: &mut Heap<T>) {\n      let mut merged_heap = Heap::new(self.comparator.clone());\n      merged_heap.heap.extend(self.heap.drain(..));\n      merged_heap.heap.extend(other.heap.drain(..));\n\n      for i in (merged_heap.heap.len() / 2)..0 {\n          merged_heap.heapify_down(i);\n      }\n\n      *self = merged_heap;\n  }\n\n  fn heapify_up(&mut self, index: usize) {\n      let mut current_index = index;\n      let current_element = &mut self.heap[current_index];\n\n      while current_index > 0 {\n          let parent_index = (current_index - 1) / 2;\n          let parent = &mut self.heap[parent_index];\n\n          if (self.comparator)(current_element, parent) >= 0 {\n              break;\n          }\n\n          std::mem::swap(current_element, parent);\n          current_index = parent_index;\n      }\n  }\n\n  fn heapify_down(&mut self, index: usize) {\n      let mut current_index = index;\n\n      while current_index < self.heap.len() {\n          let left_child_index = 2 * current_index + 1;\n          let right_child_index = 2 * current_index + 2;\n          let left_child = self.heap.get(left_child_index);\n          let right_child = self.heap.get(right_child_index);\n\n          let min_child_index = if left_child.is_none() || right_child.is_none() {\n              if left_child.is_none() {\n                  right_child_index\n              } else {\n                  left_child_index\n              }\n          } else {\n              let current_element = &self.heap[current_index];\n              let left_child = left_child.unwrap();\n              let right_child = right_child.unwrap();\n\n              if (self.comparator)(current_element, left_child) <= 0\n                  && (self.comparator)(current_element, right_child) <= 0\n              {\n                  return;\n              }\n\n              if (self.comparator)(left_child, right_child) <= 0 {\n                  left_child_index\n              } else {\n                  right_child_index\n              }\n          };\n\n          if (self.comparator)(&self.heap[min_child_index], &self.heap[current_index]) >= 0 {\n              return;\n          }\n\n          self.heap.swap(current_index, min_child_index);\n          current_index = min_child_index;\n      }\n  }\n}\n',f='class Heap<T> {\n  private comparator: (a: T, b: T) => number;\n  private heap: T[];\n\n  constructor(comparator: (a: T, b: T) => number) {\n    this.comparator = comparator;\n    this.heap = [];\n  }\n\n  findMin(): T | null {\n    return this.heap[0] || null;\n  }\n\n  findMax(): T | null {\n    return this.heap[this.heap.length - 1] || null;\n  }\n\n  extractMin(): T | null {\n    if (this.heap.length === 0) return null;\n\n    const min = this.heap[0];\n    this.heap[0] = this.heap.pop() || null;\n    this.heapifyDown();\n\n    return min;\n  }\n\n  extractMax(): T | null {\n    if (this.heap.length === 0) return null;\n\n    const max = this.heap.pop();\n    this.heapifyDown();\n\n    return max;\n  }\n\n  insert(element: T) {\n    this.heap.push(element);\n    this.heapifyUp();\n  }\n\n  increaseKey(index: number, newKey: T) {\n    if (this.comparator(newKey, this.heap[index]) < 0) {\n      throw new Error("New key must be greater than current key");\n    }\n\n    this.heap[index] = newKey;\n    this.heapifyUp(index);\n  }\n\n  decreaseKey(index: number, newKey: T) {\n    if (this.comparator(newKey, this.heap[index]) > 0) {\n      throw new Error("New key must be less than current key");\n    }\n\n    this.heap[index] = newKey;\n    this.heapifyDown(index);\n  }\n\n  meld(other: Heap<T>): Heap<T> {\n    const mergedHeap = new Heap<T>(this.comparator);\n    mergedHeap.heap = mergedHeap.heap.concat(this.heap, other.heap);\n\n    for (let i = mergedHeap.heap.length / 2 - 1; i >= 0; i--) {\n      mergedHeap.heapifyDown(i);\n    }\n\n    return mergedHeap;\n  }\n\n  private heapifyUp(index: number = this.heap.length - 1) {\n    let currentIndex = index;\n    const currentElement = this.heap[currentIndex];\n\n    while (currentIndex > 0) {\n      const parentIndex = (currentIndex - 1) >> 1;\n      const parent = this.heap[parentIndex];\n\n      if (this.comparator(currentElement, parent) >= 0) break;\n\n      this.heap[currentIndex] = parent;\n      currentIndex = parentIndex;\n    }\n\n    this.heap[currentIndex] = currentElement;\n  }\n\n  private heapifyDown(index: number = 0) {\n    let currentIndex = index;\n\n    while (currentIndex < this.heap.length) {\n      const leftChildIndex = currentIndex * 2 + 1;\n      const rightChildIndex = currentIndex * 2 + 2;\n      const leftChild = this.heap[leftChildIndex];\n      const rightChild = this.heap[rightChildIndex];\n\n      let minChildIndex: number | null = null;\n\n      if (leftChild !== undefined && rightChild !== undefined) {\n        if (this.comparator(leftChild, rightChild) <= 0) {\n          minChildIndex = leftChildIndex;\n        } else {\n          minChildIndex = rightChildIndex;\n        }\n      } else if (leftChild !== undefined) {\n        minChildIndex = leftChildIndex;\n      } else if (rightChild !== undefined) {\n        minChildIndex = rightChildIndex;\n      }\n\n      if (minChildIndex === null) {\n        break;\n      }\n\n      const minChild = this.heap[minChildIndex];\n      if (this.comparator(minChild, this.heap[currentIndex]) >= 0) {\n        break;\n      }\n\n      this.heap[currentIndex] = minChild;\n      this.heap[minChildIndex] = this.heap[currentIndex];\n      currentIndex = minChildIndex;\n    }\n\n    this.heap[currentIndex] = this.heap[index];\n  }\n}\n',m={title:"Heap",description:"Heap Data Structure",hide_table_of_contents:!0},_=void 0,g={},j=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function y(e){const n={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(32034).A+""})}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Operation"}),(0,r.jsx)("th",{children:"find MIN/MAX"}),(0,r.jsx)("th",{children:"delete MIN/MAX - remove root node"}),(0,r.jsx)("th",{children:"insert - update a key"}),(0,r.jsx)("th",{children:"increase key"}),(0,r.jsx)("th",{children:"meld - merge 2 heaps"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Binary_heap",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.p,{children:"Binary"})})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"fair",children:"O(n)"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Leftist_tree",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.p,{children:"Leftist"})})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Binomial_heap",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.p,{children:"Binomial"})})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fibonacci_heap",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.p,{children:"Fibonacci"})})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Pairing_heap",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.p,{children:"Pairing"})})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Brodal_queue",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.p,{children:"Brodal"})})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Rank-pairing_heap",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.p,{children:"Rank-pairing"})})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fibonacci_heap",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.p,{children:"Strict Fibonacci"})})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/2%E2%80%933_heap",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.p,{children:"2-3 heap"})})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{className:"good",children:"O(log n)"})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(h.A,{queryString:"primary",children:[(0,r.jsxs)(l.A,{value:"short",label:"Short",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Heap"})," is a tree-like data structure used for efficient storage and retrieval of data."]}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Simplified"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Heap"}),", it's like a family tree of blocks where each block (called 'nodes') has children, but the rule is, the parent block is always bigger (or smaller depending on the type of heap) than its\nchildren blocks. This helps find the biggest or smallest block quickly."]})]})]}),(0,r.jsxs)(l.A,{value:"detailed",label:"Detailed",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Heap"})," is a tree-based data structure that follows the heap property. It's used in efficient graph algorithms like Dijkstra's algorithm and the sorting algorithm heapsort. Heaps can also find\nthe `k-th`` smallest or largest element in an array, and are implemented as binary trees."]}),(0,r.jsx)(n.p,{children:"They're used in applications like priority queues, schedulers, and quick median calculations on data sets."})]})]}),"\n",(0,r.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,r.jsxs)(h.A,{queryString:"primary",children:[(0,r.jsx)(l.A,{value:"practice",label:"Practice",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Aspect"}),(0,r.jsx)("th",{children:"Pseudo Code"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Heapify Up"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"heapify_up(index):\n  current_index = index\n  current_element = heap[current_index]\n\n  while current_index > 0:\n    parent_index = (current_index - 1) / 2\n    parent = heap[parent_index]\n\n    if current_element > parent:\n      break\n    heap[current_index] = parent\n    current_index = parent_index\n\n  heap[current_index] = current_element\n"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Heapify Down"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"heapify_down(index):\n  current_index = index\n  while current_index < heap.length:\n    left_child_index=2 * current_index + 1\n    right_child_index = 2 * current_index + 2\n    left_child = heap[left_child_index]\n    right_child = heap[right_child_index]\n\n    min_child_index = \xf8\n    if left_child == \xf8 || right_child == \xf8:\n      if left_child == \xf8:\n        min_child_index = left_child_index\n      else:\n        min_child_index = right_child_index\n    else:\n      if left_child == right_child:\n        if left_child < heap[current_index]:\n          min_child_index = left_child_index\n        else:\n          min_child_index = right_child_index\n      else if left_child < heap[current_index]:\n        min_child_index = left_child_index\n      else:\n        min_child_index = right_child_index\n\n    if min_child_index == \xf8 || heap[min_child_index] > heap[current_index]:\n      break\n\n    min_child = heap[min_child_index]\n    heap[current_index] = min_child\n    current_index = min_child_index\n"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Find MIN"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"find_min():\n  if heap == \xf8:\n    return \xf8\n  return heap[0]\n"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Find MAX"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"find_max():\n  if heap == \xf8:\n    return \xf8\n  return heap[heap.length - 1]\n"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Extract MIN"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"extract_min():\n  if heap == \xf8:\n    return \xf8\n  min = heap[0]\n  heap[0] = heap[heap.length - 1]\n  heap.remove_last()\n  heapify_down(0)\n  return min\n"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Extract MAX"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"extract_max():\n  if heap == \xf8:\n    return \xf8\n\n  max = heap[heap.length - 1]\n  heap[0] = heap[heap.length - 1]\n  heap.remove_last()\n  heapify_down()\n  return max\n"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Insertion"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"insert(element):\n  heap.add(element)\n  heapify_up(heap.length - 1)\n"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Increase Key"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'increase_key(index, newKey):\n  if newKey <> heap[index]:\n    "New key must be greater than current key"\n\n  heap[index] = newKey\n  heapifyUp(index)\n'})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Decrease Key"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'decrease_key(index, newKey):\n  if newKey > heap[index]:\n    "New key must be less than current key"\n\n  heap[index] = newKey\n  heapify_down(index)\n'})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Meld"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"meld(other):\n  merged_heap = Heap()\n  merged_heap.heap = heap + other.heap\n\n  for i, i in heap.length / 2, i >= 0:\n    heapify_down(i)\n\n  return merged_heap\n"})})})]})]})]})}),(0,r.jsx)(l.A,{value:"solution",label:"Solution",children:(0,r.jsxs)(h.A,{queryString:"code",children:[(0,r.jsx)(l.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,r.jsx)(d.A,{language:"go",children:c})}),(0,r.jsx)(l.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,r.jsx)(d.A,{language:"java",children:s})}),(0,r.jsx)(l.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,r.jsx)(d.A,{language:"js",children:p})}),(0,r.jsx)(l.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,r.jsx)(d.A,{language:"kotlin",children:x})}),(0,r.jsx)(l.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,r.jsx)(d.A,{language:"python",children:o})}),(0,r.jsx)(l.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,r.jsx)(d.A,{language:"rust",children:u})}),(0,r.jsx)(l.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,r.jsx)(d.A,{language:"ts",children:f})})]})})]})]})}function I(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(y,{...e})}):y(e)}},32034:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/heap-6def555c1f64f65a093ac1bd267d4c17.svg"}}]);