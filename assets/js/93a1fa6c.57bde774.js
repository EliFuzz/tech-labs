"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5986],{74170:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>y,contentTitle:()=>p,default:()=>j,frontMatter:()=>f,metadata:()=>v,toc:()=>g});var t=r(11527),a=r(88672),i=r(29140),s=r(52360),l=r(52296);const c="package main\n\nfunc accessElement(arr []int, index int) int {\n\treturn arr[index]\n}\n\nfunc updateElement(arr []int, index, value int) {\n\tarr[index] = value\n}\n\nfunc findLength(arr []int) int {\n\treturn len(arr)\n}\n\nfunc iterateElements(arr []int) {\n\tfor _, element := range arr {\n\t\tfmt.Println(element)\n\t}\n}\n\nfunc appendElement(arr []int, value int) []int {\n\treturn append(arr, value)\n}\n\nfunc insertElement(arr []int, index, value int) []int {\n\tarr = append(arr[:index], append([]int{value}, arr[index:]...)...)\n\treturn arr\n}\n\nfunc deleteElement(arr []int, index int) []int {\n\treturn append(arr[:index], arr[index+1:]...)\n}\n\nfunc removeElement(arr []int, value int) []int {\n\tfor i := range arr {\n\t\tif arr[i] == value {\n\t\t\treturn append(arr[:i], arr[i+1:]...)\n\t\t}\n\t}\n\treturn arr\n}\n\nfunc popElement(arr []int, index int) (int, []int) {\n\tvalue := arr[index]\n\treturn value, append(arr[:index], arr[index+1:]...)\n}\n\nfunc searchElement(arr []int, value int) bool {\n\tfor _, element := range arr {\n\t\tif element == value {\n\t\t\treturn true\n\t\t}\n\t}\n\treturn false\n}\n\nfunc indexOfElement(arr []int, value int) int {\n\tfor i, element := range arr {\n\t\tif element == value {\n\t\t\treturn i\n\t\t}\n\t}\n\treturn -1\n}\n\nfunc sortArray(arr []int) {\n\tsort.Slice(arr, func(i, j int) bool {\n\t\treturn arr[i] < arr[j]\n\t})\n}\n\nfunc reverseArray(arr []int) {\n\tfor i, j := 0, len(arr)-1; i < j; i, j = i+1, j-1 {\n\t\tarr[i], arr[j] = arr[j], arr[i]\n\t}\n}\n\nfunc copyArray(arr []int) []int {\n\tnewArr := make([]int, len(arr))\n\tcopy(newArr, arr)\n\treturn newArr\n}\n\nfunc sliceArray(arr []int, start, stop int) []int {\n\treturn arr[start:stop]\n}\n\nfunc concatenateArrays(arr1, arr2 []int) []int {\n\treturn append(arr1, arr2...)\n}\n",d="import java.util.Arrays;\n\npublic class ArrayOperations {\n\n  public static int accessElement(int[] arr, int index) {\n    return arr[index];\n  }\n\n  public static void updateElement(int[] arr, int index, int value) {\n    arr[index] = value;\n  }\n\n  public static int findLength(int[] arr) {\n    return arr.length;\n  }\n\n  public static void iterateElements(int[] arr) {\n    for (int element : arr) {\n      System.out.println(element);\n    }\n  }\n\n  public static void appendElement(int[] arr, int value) {\n    arr = Arrays.copyOf(arr, arr.length + 1);\n    arr[arr.length - 1] = value;\n  }\n\n  public static void insertElement(int[] arr, int index, int value) {\n    int[] newArr = new int[arr.length + 1];\n    System.arraycopy(arr, 0, newArr, 0, index);\n    newArr[index] = value;\n    System.arraycopy(arr, index, newArr, index + 1, arr.length - index);\n    arr = newArr;\n  }\n\n  public static void deleteElement(int[] arr, int index) {\n    int[] newArr = new int[arr.length - 1];\n    System.arraycopy(arr, 0, newArr, 0, index);\n    System.arraycopy(arr, index + 1, newArr, index, arr.length - index - 1);\n    arr = newArr;\n  }\n\n  public static void removeElement(int[] arr, int value) {\n    int indexToRemove = -1;\n    for (int i = 0; i < arr.length; i++) {\n      if (arr[i] == value) {\n        indexToRemove = i;\n        break;\n      }\n    }\n    if (indexToRemove != -1) {\n      deleteElement(arr, indexToRemove);\n    }\n  }\n\n  public static int popElement(int[] arr, int index) {\n    int value = arr[index];\n    deleteElement(arr, index);\n    return value;\n  }\n\n  public static boolean searchElement(int[] arr, int value) {\n    for (int element : arr) {\n      if (element == value) {\n        return true;\n      }\n    }\n    return false;\n  }\n\n  public static int indexOfElement(int[] arr, int value) {\n    for (int i = 0; i < arr.length; i++) {\n      if (arr[i] == value) {\n        return i;\n      }\n    }\n    return -1;\n  }\n\n  public static void sortArray(int[] arr) {\n    Arrays.sort(arr);\n  }\n\n  public static void reverseArray(int[] arr) {\n    for (int i = 0, j = arr.length - 1; i < j; i++, j--) {\n      int temp = arr[i];\n      arr[i] = arr[j];\n      arr[j] = temp;\n    }\n  }\n\n  public static int[] copyArray(int[] arr) {\n    return Arrays.copyOf(arr, arr.length);\n  }\n\n  public static int[] sliceArray(int[] arr, int start, int stop) {\n    return Arrays.copyOfRange(arr, start, stop);\n  }\n\n  public static int[] concatenateArrays(int[] arr1, int[] arr2) {\n    int[] result = new int[arr1.length + arr2.length];\n    System.arraycopy(arr1, 0, result, 0, arr1.length);\n    System.arraycopy(arr2, 0, result, arr1.length, arr2.length);\n    return result;\n  }\n}\n",u="function accessElement(arr, index) {\n  return arr[index];\n}\n\nfunction updateElement(arr, index, value) {\n  arr[index] = value;\n}\n\nfunction findLength(arr) {\n  return arr.length;\n}\n\nfunction iterateElements(arr) {\n  arr.forEach((element) => {\n    console.log(element);\n  });\n}\n\nfunction appendElement(arr, value) {\n  arr.push(value);\n}\n\nfunction insertElement(arr, index, value) {\n  arr.splice(index, 0, value);\n}\n\nfunction deleteElement(arr, index) {\n  arr.splice(index, 1);\n}\n\nfunction removeElement(arr, value) {\n  const index = arr.indexOf(value);\n  if (index !== -1) {\n    deleteElement(arr, index);\n  }\n}\n\nfunction popElement(arr, index) {\n  return arr.splice(index, 1)[0];\n}\n\nfunction searchElement(arr, value) {\n  return arr.includes(value);\n}\n\nfunction indexOfElement(arr, value) {\n  return arr.indexOf(value);\n}\n\nfunction sortArray(arr) {\n  arr.sort((a, b) => a - b);\n}\n\nfunction reverseArray(arr) {\n  arr.reverse();\n}\n\nfunction copyArray(arr) {\n  return [...arr];\n}\n\nfunction sliceArray(arr, start, stop) {\n  return arr.slice(start, stop);\n}\n\nfunction concatenateArrays(arr1, arr2) {\n  return arr1.concat(arr2);\n}\n",o="fun accessElement(arr: IntArray, index: Int): Int {\n    return arr[index]\n}\n\nfun updateElement(arr: IntArray, index: Int, value: Int) {\n    arr[index] = value\n}\n\nfun findLength(arr: IntArray): Int {\n    return arr.size\n}\n\nfun iterateElements(arr: IntArray) {\n    arr.forEach { element ->\n        println(element)\n    }\n}\n\nfun appendElement(arr: IntArray, value: Int): IntArray {\n    return arr.plus(value)\n}\n\nfun insertElement(arr: IntArray, index: Int, value: Int): IntArray {\n    return arr.sliceArray(0 until index) + value + arr.sliceArray(index until arr.size)\n}\n\nfun deleteElement(arr: IntArray, index: Int): IntArray {\n    return arr.sliceArray(0 until index) + arr.sliceArray(index + 1 until arr.size)\n}\n\nfun removeElement(arr: IntArray, value: Int): IntArray {\n    val index = arr.indexOf(value)\n    return if (index != -1) {\n        deleteElement(arr, index)\n    } else {\n        arr\n    }\n}\n\nfun popElement(arr: IntArray, index: Int): Pair<Int, IntArray> {\n    val value = arr[index]\n    return value to deleteElement(arr, index)\n}\n\nfun searchElement(arr: IntArray, value: Int): Boolean {\n    return arr.contains(value)\n}\n\nfun indexOfElement(arr: IntArray, value: Int): Int {\n    return arr.indexOf(value)\n}\n\nfun sortArray(arr: IntArray) {\n    arr.sort()\n}\n\nfun reverseArray(arr: IntArray) {\n    arr.reverse()\n}\n\nfun copyArray(arr: IntArray): IntArray {\n    return arr.copyOf()\n}\n\nfun sliceArray(arr: IntArray, start: Int, stop: Int): IntArray {\n    return arr.sliceArray(start until stop)\n}\n\nfun concatenateArrays(arr1: IntArray, arr2: IntArray): IntArray {\n    return arr1 + arr2\n}\n",m="def access_element(arr, index):\n    return arr[index]\n\ndef update_element(arr, index, value):\n    arr[index] = value\n\ndef find_length(arr):\n    return len(arr)\n\ndef iterate_elements(arr):\n    for element in arr:\n        print(element)\n\ndef append_element(arr, value):\n    arr.append(value)\n\ndef insert_element(arr, index, value):\n    arr.insert(index, value)\n\ndef remove_element(arr, value):\n    arr.remove(value)\n\ndef pop_element(arr, index):\n    return arr.pop(index)\n\ndef search_element(arr, value):\n    return value in arr\n\ndef index_of_element(arr, value):\n    return arr.index(value)\n\ndef sort_array(arr):\n    arr.sort()\n\ndef reverse_array(arr):\n    arr.reverse()\n\ndef slice_array(arr, start, stop):\n    return arr[start:stop]\n\ndef concatenate_arrays(arr1, arr2):\n    return arr1 + arr2\n",h='fn access_element(arr: &[i32], index: usize) -> i32 {\n    arr[index]\n}\n\nfn update_element(arr: &mut [i32], index: usize, value: i32) {\n    arr[index] = value;\n}\n\nfn find_length(arr: &[i32]) -> usize {\n    arr.len()\n}\n\nfn iterate_elements(arr: &[i32]) {\n    for &element in arr {\n        println!("{}", element);\n    }\n}\n\nfn append_element(arr: &mut Vec<i32>, value: i32) {\n    arr.push(value);\n}\n\nfn insert_element(arr: &mut Vec<i32>, index: usize, value: i32) {\n    arr.insert(index, value);\n}\n\nfn delete_element(arr: &mut Vec<i32>, index: usize) {\n    arr.remove(index);\n}\n\nfn remove_element(arr: &mut Vec<i32>, value: i32) {\n    if let Some(index) = arr.iter().position(|&x| x == value) {\n        arr.remove(index);\n    }\n}\n\nfn pop_element(arr: &mut Vec<i32>, index: usize) -> (i32, Vec<i32>) {\n    let value = arr.remove(index);\n    (value, arr)\n}\n\nfn search_element(arr: &[i32], value: i32) -> bool {\n    arr.contains(&value)\n}\n\nfn index_of_element(arr: &[i32], value: i32) -> Option<usize> {\n    arr.iter().position(|&x| x == value)\n}\n\nfn sort_array(arr: &mut [i32]) {\n    arr.sort();\n}\n\nfn reverse_array(arr: &mut [i32]) {\n    arr.reverse();\n}\n\nfn copy_array(arr: &[i32]) -> Vec<i32> {\n    arr.to_vec()\n}\n\nfn slice_array(arr: &[i32], start: usize, stop: usize) -> Vec<i32> {\n    arr[start..stop].to_vec()\n}\n\nfn concatenate_arrays(arr1: &[i32], arr2: &[i32]) -> Vec<i32> {\n    let mut result = arr1.to_vec();\n    result.extend_from_slice(arr2);\n    result\n}\n',x="function accessElement(arr: number[], index: number): number {\n  return arr[index];\n}\n\nfunction updateElement(arr: number[], index: number, value: number): void {\n  arr[index] = value;\n}\n\nfunction findLength(arr: number[]): number {\n  return arr.length;\n}\n\nfunction iterateElements(arr: number[]): void {\n  arr.forEach((element) => {\n    console.log(element);\n  });\n}\n\nfunction appendElement(arr: number[], value: number): void {\n  arr.push(value);\n}\n\nfunction insertElement(arr: number[], index: number, value: number): void {\n  arr.splice(index, 0, value);\n}\n\nfunction deleteElement(arr: number[], index: number): void {\n  arr.splice(index, 1);\n}\n\nfunction removeElement(arr: number[], value: number): void {\n  const indexToRemove = arr.indexOf(value);\n  if (indexToRemove !== -1) {\n    deleteElement(arr, indexToRemove);\n  }\n}\n\nfunction popElement(arr: number[], index: number): [number, number[]] {\n  const value = arr.splice(index, 1)[0];\n  return [value, arr];\n}\n\nfunction searchElement(arr: number[], value: number): boolean {\n  return arr.includes(value);\n}\n\nfunction indexOfElement(arr: number[], value: number): number {\n  return arr.indexOf(value);\n}\n\nfunction sortArray(arr: number[]): void {\n  arr.sort((a, b) => a - b);\n}\n\nfunction reverseArray(arr: number[]): void {\n  arr.reverse();\n}\n\nfunction copyArray(arr: number[]): number[] {\n  return [...arr];\n}\n\nfunction sliceArray(arr: number[], start: number, stop: number): number[] {\n  return arr.slice(start, stop);\n}\n\nfunction concatenateArrays(arr1: number[], arr2: number[]): number[] {\n  return arr1.concat(arr2);\n}\n",f={title:"Array",description:"Array Data Structure",hide_table_of_contents:!0},p=void 0,v={id:"education/computer-science/data-structures/basic/array",title:"Array",description:"Array Data Structure",source:"@site/docs/education/01-computer-science/09-data-structures/02-basic/01-array.mdx",sourceDirName:"education/01-computer-science/09-data-structures/02-basic",slug:"/education/computer-science/data-structures/basic/array",permalink:"/tech-labs/docs/education/computer-science/data-structures/basic/array",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/09-data-structures/02-basic/01-array.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Array",description:"Array Data Structure",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Basic",permalink:"/tech-labs/docs/category/basic"},next:{title:"Linked List",permalink:"/tech-labs/docs/education/computer-science/data-structures/basic/linked-list"}},y={},g=[{value:"Definition",id:"definition",level:2},{value:"Advantages",id:"advantages",level:4},{value:"Disadvantages",id:"disadvantages",level:4},{value:"Variants",id:"variants",level:4},{value:"One-Dimensional",id:"one-dimensional",level:5},{value:"Two-Dimensional",id:"two-dimensional",level:5},{value:"Multi-Dimensional",id:"multi-dimensional",level:5},{value:"Practice",id:"practice",level:2}];function b(n){const e={admonition:"admonition",h2:"h2",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:r(83250).Z+""})}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("thead",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Space"}),(0,t.jsx)("th",{colspan:"6",children:"Time"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{}),(0,t.jsx)("th",{children:"Access"}),(0,t.jsx)("th",{children:"Lookup"}),(0,t.jsx)("th",{children:"Insertion"}),(0,t.jsx)("th",{children:"Deletion"})]})]}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{className:"fair",children:"O(n)"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{className:"fair",children:"O(n)"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{className:"fair",children:"O(n)"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{className:"excellent",children:"O(1)"})})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(s.Z,{value:"short",label:"Short",children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Array"})," is a data structure that stores elements of the same type in contiguous memory locations, allowing for efficient indexing and retrieval."]}),(0,t.jsx)(e.admonition,{title:"Simplified",type:"note",children:(0,t.jsx)(e.p,{children:"It's like organized row of storage bins where you can put similar items. Each bin has a number, making it easy to find and grab what you need quickly, helping to keep things neat and orderly."})})]}),(0,t.jsxs)(s.Z,{value:"detailed",label:"Detailed",children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Array"})," is a linear data structure that stores a fixed-size collection of elements in contiguous memory locations. Elements are accessed using numerical indices, allowing for efficient\nretrieval. Arrays hold elements of the same data type and provide rapid, constant-time access. They are fundamental in algorithms and data structures, forming the basis for more complex structures\nlike matrices."]}),(0,t.jsx)(e.h4,{id:"advantages",children:"Advantages"}),(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Fast and efficient access"}),": Arrays have a constant time complexity ",(0,t.jsx)("code",{className:"excellent",children:"O(1)"})," for indexing, meaning that you can retrieve or update any element in an\narray with a single operation, regardless of the size of the array"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Low memory overhead"}),": Arrays only store the elements and their addresses, without any extra information or pointers, resulting in lower memory usage compared to other data structures"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Ease of implementation"}),": Most programming languages support arrays natively or provide built-in functions and libraries for working with arrays, making them easy to implement and use"]}),"\n"]}),(0,t.jsx)(e.h4,{id:"disadvantages",children:"Disadvantages"}),(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Fixed size"}),": The number of elements in an array must be predefined, and once declared, the size of the array cannot be changed. This makes insertion and deletion operations trickier, as the\narray stores elements in consecutive memory locations"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Limited data types"}),": Arrays can only store elements of the same data type, which can be restrictive when working with diverse data sets"]}),"\n"]}),(0,t.jsx)(e.h4,{id:"variants",children:"Variants"}),(0,t.jsx)(e.h5,{id:"one-dimensional",children:"One-Dimensional"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:r(83250).Z+""})}),(0,t.jsx)(e.p,{children:"Linear data structure that stores a fixed-size, contiguous collection of elements with the same data type."}),(0,t.jsx)(e.h5,{id:"two-dimensional",children:"Two-Dimensional"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:r(76938).Z+""})}),(0,t.jsx)(e.p,{children:"Structured data format that arranges elements in rows and columns. It is useful for organizing and accessing data in a grid-like fashion, with fixed sizes and efficient storage in contiguous\nmemory locations."}),(0,t.jsx)(e.h5,{id:"multi-dimensional",children:"Multi-Dimensional"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:r(53666).Z+"",width:"1737",height:"961"})}),(0,t.jsx)(e.p,{children:"Multi-dimensional array is a data structure that organizes elements in more than two dimensions. It enables systematic organization and access to data in structured spaces, with fixed sizes along\neach dimension and contiguous memory storage."})]})]}),"\n",(0,t.jsx)(e.h2,{id:"practice",children:"Practice"}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(s.Z,{value:"practice",label:"Practice",children:(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Aspect"}),(0,t.jsx)("th",{children:"Pseudo Code"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Reverse"}),(0,t.jsx)("td",{children:"Iterate array from the end to the start, appending each element to a new array"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Slice"}),(0,t.jsx)("td",{children:"Creating a new list, then iterating from the start to stop index in the input array, adding each element to the new list"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Concatenate"}),(0,t.jsx)("td",{children:"Combine two arrays into one by first copying elements from the first array, then appending elements from the second array to a new array"})]})]})]})}),(0,t.jsx)(s.Z,{value:"solution",label:"Solution",children:(0,t.jsxs)(i.Z,{queryString:"code",children:[(0,t.jsx)(s.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,t.jsx)(l.Z,{language:"go",children:c})}),(0,t.jsx)(s.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,t.jsx)(l.Z,{language:"java",children:d})}),(0,t.jsx)(s.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,t.jsx)(l.Z,{language:"js",children:u})}),(0,t.jsx)(s.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,t.jsx)(l.Z,{language:"kotlin",children:o})}),(0,t.jsx)(s.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,t.jsx)(l.Z,{language:"python",children:m})}),(0,t.jsx)(s.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,t.jsx)(l.Z,{language:"rust",children:h})}),(0,t.jsx)(s.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,t.jsx)(l.Z,{language:"ts",children:x})})]})})]})]})}function j(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(b,{...n})}):b(n)}},53666:(n,e,r)=>{r.d(e,{Z:()=>t});const t=r.p+"assets/images/multi-dimensional-array-fa2c1eb6b4886208283068f1bd6e1864.svg"},83250:(n,e,r)=>{r.d(e,{Z:()=>t});const t=r.p+"assets/images/one-dimensional-array-d47509ce61f4b26c3fdd550e1a54ec63.svg"},76938:(n,e,r)=>{r.d(e,{Z:()=>t});const t=r.p+"assets/images/two-dimensional-array-6ed3ab644055f2e8df7b4752f7d1562e.svg"}}]);