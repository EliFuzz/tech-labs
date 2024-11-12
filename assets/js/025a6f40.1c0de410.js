"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2435],{40562:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>x,contentTitle:()=>w,default:()=>H,frontMatter:()=>g,metadata:()=>i,toc:()=>b});const i=JSON.parse('{"id":"education/computer-science/algorithms/algo/rabin-karp-algorithm","title":"Rabin Karp Algorithm","description":"Rabin Karp Algorithm","source":"@site/docs/education/01-computer-science/10-algorithms/04-algo/rabin-karp-algorithm.mdx","sourceDirName":"education/01-computer-science/10-algorithms/04-algo","slug":"/education/computer-science/algorithms/algo/rabin-karp-algorithm","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/rabin-karp-algorithm","draft":false,"unlisted":false,"editUrl":"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/04-algo/rabin-karp-algorithm.mdx","tags":[],"version":"current","frontMatter":{"title":"Rabin Karp Algorithm","description":"Rabin Karp Algorithm","hide_table_of_contents":true},"sidebar":"education","previous":{"title":"Quicksort","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/quicksort"},"next":{"title":"Radian & Degree","permalink":"/tech-labs/docs/education/computer-science/algorithms/algo/radian-and-degree"}}');var a=e(86070),r=e(15658),s=e(33407),h=e(33903),l=e(68171);const o="package main\n\nconst (\n\tprime = 101\n)\n\nfunc rabinKarp(text, pattern string) []int {\n\tvar result []int\n\tn, m := len(text), len(pattern)\n\tif n < m {\n\t\treturn result\n\t}\n\n\th := 1\n\tfor i := 0; i < m-1; i++ {\n\t\th = (h * 256) % prime\n\t}\n\n\tpatternHash := 0\n\twindowHash := 0\n\tfor i := 0; i < m; i++ {\n\t\tpatternHash = (256*patternHash + int(pattern[i])) % prime\n\t\twindowHash = (256*windowHash + int(text[i])) % prime\n\t}\n\n\tfor i := 0; i <= n-m; i++ {\n\t\tif patternHash == windowHash {\n\t\t\tmatch := true\n\t\t\tfor j := 0; j < m; j++ {\n\t\t\t\tif text[i+j] != pattern[j] {\n\t\t\t\t\tmatch = false\n\t\t\t\t\tbreak\n\t\t\t\t}\n\t\t\t}\n\t\t\tif match {\n\t\t\t\tresult = append(result, i)\n\t\t\t}\n\t\t}\n\n\t\tif i < n-m {\n\t\t\twindowHash = (256*(windowHash-int(text[i])*h) + int(text[i+m])) % prime\n\t\t\tif windowHash < 0 {\n\t\t\t\twindowHash += prime\n\t\t\t}\n\t\t}\n\t}\n\n\treturn result\n}\n",c="import java.util.ArrayList;\nimport java.util.List;\n\npublic class RabinKarp {\n\n  private static final int prime = 101;\n\n  public static List<Integer> rabinKarp(String text, String pattern) {\n    List<Integer> indices = new ArrayList<>();\n    int n = text.length();\n    int m = pattern.length();\n    if (n < m) {\n      return indices;\n    }\n\n    int h = 1;\n    for (int i = 0; i < m - 1; i++) {\n      h = (h * 256) % prime;\n    }\n\n    int patternHash = 0;\n    int windowHash = 0;\n    for (int i = 0; i < m; i++) {\n      patternHash = (256 * patternHash + pattern.charAt(i)) % prime;\n      windowHash = (256 * windowHash + text.charAt(i)) % prime;\n    }\n\n    for (int i = 0; i <= n - m; i++) {\n      if (patternHash == windowHash) {\n        boolean match = true;\n        for (int j = 0; j < m; j++) {\n          if (text.charAt(i + j) != pattern.charAt(j)) {\n            match = false;\n            break;\n          }\n        }\n        if (match) {\n          indices.add(i);\n        }\n      }\n      \n      if (i < n - m) {\n        windowHash = (256 * (windowHash - text.charAt(i) * h) + text.charAt(i + m)) % prime;\n        if (windowHash < 0) {\n          windowHash += prime;\n        }\n      }\n    }\n    return indices;\n  }\n}\n",m="function rabinKarp(text, pattern) {\n  const prime = 101;\n  const result = [];\n  const n = text.length;\n  const m = pattern.length;\n  if (n < m) {\n    return result;\n  }\n\n  let h = 1;\n  for (let i = 0; i < m - 1; i++) {\n    h = (h * 256) % prime;\n  }\n\n  let patternHash = 0;\n  let windowHash = 0;\n  for (let i = 0; i < m; i++) {\n    patternHash = (256 * patternHash + pattern.charCodeAt(i)) % prime;\n    windowHash = (256 * windowHash + text.charCodeAt(i)) % prime;\n  }\n\n  for (let i = 0; i <= n - m; i++) {\n    if (patternHash === windowHash) {\n      let match = true;\n      for (let j = 0; j < m; j++) {\n        if (text[i + j] !== pattern[j]) {\n          match = false;\n          break;\n        }\n      }\n      if (match) {\n        result.push(i);\n      }\n    }\n    \n    if (i < n - m) {\n      windowHash =\n        (256 * (windowHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) %\n        prime;\n      if (windowHash < 0) {\n        windowHash += prime;\n      }\n    }\n  }\n  return result;\n}\n",u="fun rabinKarp(text: String, pattern: String): List<Int> {\n    val prime = 101\n    val result = mutableListOf<Int>()\n    val n = text.length\n    val m = pattern.length\n    if (n < m) {\n        return result\n    }\n\n    var h = 1\n    repeat(m - 1) {\n        h = h * 256 % prime\n    }\n\n    var patternHash = 0\n    var windowHash = 0\n    for (i in 0 until m) {\n        patternHash = (256 * patternHash + pattern[i].toInt()) % prime\n        windowHash = (256 * windowHash + text[i].toInt()) % prime\n    }\n\n    for (i in 0..n - m) {\n        if (patternHash == windowHash) {\n            var match = true\n            for (j in 0 until m) {\n                if (text[i + j] != pattern[j]) {\n                    match = false\n                    break\n                }\n            }\n            if (match) {\n                result.add(i)\n            }\n        }\n        \n        if (i < n - m) {\n            windowHash = (256 * (windowHash - text[i].toInt() * h) + text[i + m].toInt()) % prime\n            if (windowHash < 0) {\n                windowHash += prime\n            }\n        }\n    }\n    return result\n}\n",p="def rabin_karp(text, pattern):\n    prime = 101\n    result = []\n    n, m = len(text), len(pattern)\n    if n < m:\n        return result\n\n    h = 1\n    for _ in range(m - 1):\n        h = (h * 256) % prime\n\n    pattern_hash = 0\n    window_hash = 0\n    for i in range(m):\n        pattern_hash = (256 * pattern_hash + ord(pattern[i])) % prime\n        window_hash = (256 * window_hash + ord(text[i])) % prime\n\n    for i in range(n - m + 1):\n        if pattern_hash == window_hash:\n            match = True\n            for j in range(m):\n                if text[i + j] != pattern[j]:\n                    match = False\n                    break\n            if match:\n                result.append(i)\n        if i < n - m:\n            window_hash = (256 * (window_hash - ord(text[i]) * h) + ord(text[i + m])) % prime\n    return result\n",d="fn rabin_karp(text: &str, pattern: &str) -> Vec<usize> {\n    const PRIME: usize = 101;\n    let mut result = Vec::new();\n    let n = text.len();\n    let m = pattern.len();\n    if n < m {\n        return result;\n    }\n\n    let mut h = 1;\n    for _ in 0..m - 1 {\n        h = (h * 256) % PRIME;\n    }\n\n    let mut pattern_hash = 0;\n    let mut window_hash = 0;\n    for i in 0..m {\n        pattern_hash = (256 * pattern_hash + pattern.as_bytes()[i] as usize) % PRIME;\n        window_hash = (256 * window_hash + text.as_bytes()[i] as usize) % PRIME;\n    }\n\n    for i in 0..=n - m {\n        if pattern_hash == window_hash {\n            let mut match_found = true;\n            for j in 0..m {\n                if text.as_bytes()[i + j] != pattern.as_bytes()[j] {\n                    match_found = false;\n                    break;\n                }\n            }\n            if match_found {\n                result.push(i);\n            }\n        }\n        if i < n - m {\n            window_hash =\n                (256 * (window_hash as isize - text.as_bytes()[i] as isize * h as isize) as usize\n                    + text.as_bytes()[i + m] as usize)\n                    % PRIME;\n            if window_hash < 0 {\n                window_hash += PRIME;\n            }\n        }\n    }\n    result\n}\n",f="function rabinKarp(text: string, pattern: string): number[] {\n  const prime = 101;\n  const result: number[] = [];\n  const n = text.length;\n  const m = pattern.length;\n  if (n < m) {\n    return result;\n  }\n\n  let h = 1;\n  for (let i = 0; i < m - 1; i++) {\n    h = (h * 256) % prime;\n  }\n\n  let patternHash = 0;\n  let windowHash = 0;\n  for (let i = 0; i < m; i++) {\n    patternHash = (256 * patternHash + pattern.charCodeAt(i)) % prime;\n    windowHash = (256 * windowHash + text.charCodeAt(i)) % prime;\n  }\n\n  for (let i = 0; i <= n - m; i++) {\n    if (patternHash === windowHash) {\n      let match = true;\n      for (let j = 0; j < m; j++) {\n        if (text[i + j] !== pattern[j]) {\n          match = false;\n          break;\n        }\n      }\n      if (match) {\n        result.push(i);\n      }\n    }\n    if (i < n - m) {\n      windowHash =\n        (256 * (windowHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) %\n        prime;\n      if (windowHash < 0) {\n        windowHash += prime;\n      }\n    }\n  }\n  return result;\n}\n",g={title:"Rabin Karp Algorithm",description:"Rabin Karp Algorithm",hide_table_of_contents:!0},w=void 0,x={},b=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function j(n){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsxs)(s.A,{queryString:"primary",children:[(0,a.jsx)(h.A,{value:"definition",label:"Definition",children:(0,a.jsx)(t.p,{children:"The Rabin-Karp Algorithm is a string-searching algorithm that efficiently finds the occurrence of a pattern within a text. It's particularly useful when the pattern searching involves multiple occurrences in the text"})}),(0,a.jsx)(h.A,{value:"how",label:"Explanation",children:(0,a.jsx)(t.p,{children:"Hashing the pattern and each substring of the text, then comparing these hashes to find matches. To avoid recomputing hashes for each substring, it uses a rolling hash function. This function efficiently updates the hash value by subtracting the contribution of the outgoing character and adding the contribution of the incoming character. When a match is found, it verifies the match by comparing the actual characters. By utilizing hashing, it significantly reduces the number of comparisons needed, leading to faster search times"})}),(0,a.jsx)(h.A,{value:"guidance",label:"Guidance",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Compute the hash value of the pattern"}),"\n",(0,a.jsx)(t.li,{children:"Slide the pattern over the text, computing the hash of each substring using the rolling hash function"}),"\n",(0,a.jsx)(t.li,{children:"Compare the hash values of the pattern and the current substring"}),"\n",(0,a.jsx)(t.li,{children:"If the hash values match, compare the actual characters to confirm the match"}),"\n",(0,a.jsx)(t.li,{children:"If a match is confirmed, record the position/index of the match"}),"\n",(0,a.jsx)(t.li,{children:"Continue sliding the pattern until the end of the text is reached"}),"\n"]})}),(0,a.jsx)(h.A,{value:"tips",label:"Tips",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"use a rolling hash function to efficiently update hash values"}),"\n",(0,a.jsx)(t.li,{children:"employ a hash function that minimizes collisions for better performance"}),"\n",(0,a.jsx)(t.li,{children:"choose a base and a prime number carefully to avoid hash collisions"}),"\n",(0,a.jsx)(t.li,{children:"utilize modular arithmetic to prevent overflow when dealing with large hash values"}),"\n"]})})]}),"\n",(0,a.jsx)(t.h2,{id:"practice",children:"Practice"}),"\n",(0,a.jsxs)(s.A,{queryString:"primary",children:[(0,a.jsx)(h.A,{value:"practice",label:"Practice",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'rabin_karp(text, pattern):\n  n = length(text)\n  m = length(pattern)\n  prime = a large prime number\n  base = a base value for the hash function\n\n  pattern_hash = hash(pattern)   # Compute hash of the pattern\n  text_hash = hash(text[0:m])    # Compute hash of the initial substring of text\n\n  for i from 0 to n-m:\n    if pattern_hash == text_hash:\n      if pattern == text[i:i+m]:\n        print "Pattern found at index", i\n    if i < n-m:\n      text_hash = (text_hash - ord(text[i]) * base**m) * base + ord(text[i+m])\n\n# Rolling hash function\nhash(s):\n  hash_value = 0\n  for character in s:\n    hash_value = (hash_value * base + ord(character)) % prime\n  return hash_value\n'})})}),(0,a.jsx)(h.A,{value:"solution",label:"Solution",children:(0,a.jsxs)(s.A,{queryString:"code",children:[(0,a.jsx)(h.A,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,a.jsx)(l.A,{language:"go",children:o})}),(0,a.jsx)(h.A,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,a.jsx)(l.A,{language:"java",children:c})}),(0,a.jsx)(h.A,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,a.jsx)(l.A,{language:"js",children:m})}),(0,a.jsx)(h.A,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,a.jsx)(l.A,{language:"kotlin",children:u})}),(0,a.jsx)(h.A,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,a.jsx)(l.A,{language:"python",children:p})}),(0,a.jsx)(h.A,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,a.jsx)(l.A,{language:"rust",children:d})}),(0,a.jsx)(h.A,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,a.jsx)(l.A,{language:"ts",children:f})})]})})]})]})}function H(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(j,{...n})}):j(n)}}}]);