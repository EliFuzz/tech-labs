"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3425],{52781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>x,contentTitle:()=>f,default:()=>k,frontMatter:()=>m,metadata:()=>v,toc:()=>y});var n=r(11527),i=r(88672),a=r(29140),l=r(52360),s=r(52296);const o="package main\n\nfunc quicksort(arr []int) []int {\n    if len(arr) <= 1 {\n        return arr\n    }\n\n    pivot := arr[0]\n    var left, right []int\n\n    for _, v := range arr[1:] {\n        if v <= pivot {\n            left = append(left, v)\n        } else {\n            right = append(right, v)\n        }\n    }\n\n    left = quicksort(left)\n    right = quicksort(right)\n\n    return append(append(left, pivot), right...)\n}\n",c="import java.util.Arrays;\n\npublic class QuickSort {\n\n  public static int[] quicksort(int[] arr) {\n    if (arr.length <= 1) {\n      return arr;\n    }\n\n    int pivot = arr[0];\n    int[] left = Arrays.stream(arr).skip(1).filter(x -> x <= pivot).toArray();\n    int[] right = Arrays.stream(arr).skip(1).filter(x -> x > pivot).toArray();\n\n    left = quicksort(left);\n    right = quicksort(right);\n\n    int[] result = new int[left.length + right.length + 1];\n    System.arraycopy(left, 0, result, 0, left.length);\n    result[left.length] = pivot;\n    System.arraycopy(right, 0, result, left.length + 1, right.length);\n\n    return result;\n  }\n}\n",h="function quicksort(arr) {\n  if (arr.length <= 1) {\n    return arr;\n  }\n\n  const pivot = arr[0];\n  const left = [];\n  const right = [];\n\n  for (let i = 1; i < arr.length; i++) {\n    if (arr[i] <= pivot) {\n      left.push(arr[i]);\n    } else {\n      right.push(arr[i]);\n    }\n  }\n\n  return [...quicksort(left), pivot, ...quicksort(right)];\n}\n",u="fun quicksort(arr: IntArray): IntArray {\n    if (arr.size <= 1) return arr\n\n    val pivot = arr[0]\n    val left = arr.drop(1).filter { it <= pivot }.toIntArray()\n    val right = arr.drop(1).filter { it > pivot }.toIntArray()\n\n    val leftSorted = quicksort(left)\n    val rightSorted = quicksort(right)\n\n    return leftSorted + pivot + rightSorted\n}\n",d="def quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n\n    pivot = arr[0]\n    left = [x for x in arr[1:] if x <= pivot]\n    right = [x for x in arr[1:] if x > pivot]\n\n    return quicksort(left) + [pivot] + quicksort(right)\n",p="fn quicksort(arr: &mut [i32]) {\n    if arr.len() <= 1 {\n        return;\n    }\n\n    let pivot = arr[0];\n    let (mut left, mut right): (Vec<_>, Vec<_>) = arr[1..]\n        .iter()\n        .partition(|&x| x <= &pivot);\n\n    quicksort(&mut left);\n    quicksort(&mut right);\n\n    arr.copy_from_slice(&[left, vec![pivot], right].concat());\n}\n",g="function quicksort(arr: number[]): number[] {\n  if (arr.length <= 1) {\n    return arr;\n  }\n\n  const pivot = arr[0];\n  const left: number[] = [];\n  const right: number[] = [];\n\n  for (let i = 1; i < arr.length; i++) {\n    if (arr[i] <= pivot) {\n      left.push(arr[i]);\n    } else {\n      right.push(arr[i]);\n    }\n  }\n\n  return [...quicksort(left), pivot, ...quicksort(right)];\n}\n",m={title:"Quicksort",description:"Quicksort",hide_table_of_contents:!0},f=void 0,v={id:"education/computer-science/algorithms/algo/quicksort",title:"Quicksort",description:"Quicksort",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/quicksort.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/quicksort",permalink:"/docs/education/computer-science/algorithms/algo/quicksort",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/quicksort.mdx",tags:[],version:"current",frontMatter:{title:"Quicksort",description:"Quicksort",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Prim's Algorithm",permalink:"/docs/education/computer-science/algorithms/algo/prims-algorithm"},next:{title:"Rabin Karp Algorithm",permalink:"/docs/education/computer-science/algorithms/algo/rabin-karp-algorithm"}},x={},y=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function j(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(l.Z,{value:"definition",label:"Definition",children:(0,n.jsx)(t.p,{children:"Quicksort is a highly efficient sorting algorithm that works by partitioning an array into smaller sub-arrays, then recursively sorting each sub-array. It follows the divide-and-conquer strategy, making it particularly effective for large datasets"})}),(0,n.jsx)(l.Z,{value:"how",label:"Explanation",children:(0,n.jsx)(t.p,{children:"Selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then recursively sorted. This process continues until the entire array is sorted"})}),(0,n.jsx)(l.Z,{value:"guidance",label:"Guidance",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Choose a pivot element from the array (commonly the last element)"}),"\n",(0,n.jsxs)(t.li,{children:["Partition the array into two sub-arrays","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"elements less than the pivot"}),"\n",(0,n.jsx)(t.li,{children:"elements greater than the pivot"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Recursively apply the above steps to the sub-arrays until the base case (sub-array size is 1 or 0) is reached"}),"\n",(0,n.jsx)(t.li,{children:"Concatenate the sorted sub-arrays to obtain the sorted array"}),"\n"]})}),(0,n.jsx)(l.Z,{value:"tips",label:"Tips",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"always try to choose a pivot that helps in evenly dividing the array. Common choices include the first, last, or middle element"}),"\n",(0,n.jsx)(t.li,{children:"implementing a technique like the 'median of three' to choose a pivot can improve performance, especially for nearly sorted arrays"}),"\n",(0,n.jsx)(t.li,{children:"quicksort can be implemented in-place, reducing the need for additional memory allocation"}),"\n"]})})]}),"\n",(0,n.jsx)(t.h2,{id:"practice",children:"Practice"}),"\n",(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(l.Z,{value:"practice",label:"Practice",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"quicksort(array, low, high):\n  if low < high:\n    // Partition the array and get the pivot index\n    pivot_index = partition(array, low, high)\n    // Recursively sort the sub-arrays\n    quicksort(array, low, pivot_index - 1)\n    quicksort(array, pivot_index + 1, high)\n\npartition(array, low, high):\n  // Choose the pivot (here, we choose the last element)\n  pivot = array[high]\n  // Index of the smaller element\n  smaller_index = low - 1\n\n  // Iterate through the array from low to high\n  for j = low to high - 1:\n    // If current element is smaller than or equal to pivot\n    if array[j] <= pivot:\n      // Increment index of smaller element\n      smaller_index = smaller_index + 1\n      // Swap smaller element with current element\n      swap(array, smaller_index, j)\n\n  // Swap pivot with element at smaller_index + 1\n  swap(array, smaller_index + 1, high)\n  // Return the partitioning index\n  return smaller_index + 1\n\nswap(array, i, j):\n  // Swap elements at indices i and j in the array\n  temp = array[i]\n  array[i] = array[j]\n  array[j] = temp\n"})})}),(0,n.jsx)(l.Z,{value:"solution",label:"Solution",children:(0,n.jsxs)(a.Z,{queryString:"code",children:[(0,n.jsx)(l.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,n.jsx)(s.Z,{language:"go",children:o})}),(0,n.jsx)(l.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,n.jsx)(s.Z,{language:"java",children:c})}),(0,n.jsx)(l.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,n.jsx)(s.Z,{language:"js",children:h})}),(0,n.jsx)(l.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,n.jsx)(s.Z,{language:"kotlin",children:u})}),(0,n.jsx)(l.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,n.jsx)(s.Z,{language:"python",children:d})}),(0,n.jsx)(l.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,n.jsx)(s.Z,{language:"rust",children:p})}),(0,n.jsx)(l.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,n.jsx)(s.Z,{language:"ts",children:g})})]})})]})]})}function k(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}}}]);