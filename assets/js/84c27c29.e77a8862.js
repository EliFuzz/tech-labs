"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9009],{70439:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>k,default:()=>v,frontMatter:()=>y,metadata:()=>j,toc:()=>f});var a=t(11527),s=t(88672),i=t(29140),l=t(52360),r=t(52296);const c="type HashTable struct {\n    table []*Pair\n    size  int\n}\n\ntype Pair struct {\n    Key   string\n    Value interface{}\n}\n\nfunc NewHashTable(size int) *HashTable {\n    return &HashTable{\n        table: make([]*Pair, size),\n        size:  size,\n    }\n}\n\nfunc (ht *HashTable) hash(key string) int {\n    return int(crc32.ChecksumIEEE([]byte(key)) % uint32(ht.size))\n}\n\nfunc (ht *HashTable) Insert(key string, value interface{}) {\n    index := ht.hash(key)\n    ht.table[index] = &Pair{Key: key, Value: value}\n}\n\nfunc (ht *HashTable) Search(key string) interface{} {\n    index := ht.hash(key)\n    if ht.table[index] != nil {\n        return ht.table[index].Value\n    }\n    return nil\n}\n\nfunc (ht *HashTable) Delete(key string) {\n    index := ht.hash(key)\n    ht.table[index] = nil\n}\n",h="import java.util.ArrayList;\nimport java.util.List;\n\npublic class HashTable {\n\n  private List<Pair<String, Object>> table;\n  private int size;\n\n  public HashTable() {\n    this.table = new ArrayList<>();\n    this.size = 10;\n  }\n\n  private int hash(String key) {\n    return key.hashCode() % size;\n  }\n\n  public void insert(String key, Object value) {\n    int index = hash(key);\n    table.add(index, new Pair<>(key, value));\n  }\n\n  public Object search(String key) {\n    int index = hash(key);\n    if (table.get(index) != null) {\n      return table.get(index).getValue();\n    }\n    return null;\n  }\n\n  public void delete(String key) {\n    int index = hash(key);\n    table.set(index, null);\n  }\n}\n",d="class HashTable {\n  constructor() {\n    this.table = [];\n    this.size = 10;\n  }\n\n  hash(key) {\n    return key.hashCode() % this.size;\n  }\n\n  insert(key, value) {\n    const index = this.hash(key);\n    this.table[index] = { key, value };\n  }\n\n  search(key) {\n    const index = this.hash(key);\n    if (this.table[index] !== undefined) {\n      return this.table[index].value;\n    }\n    return null;\n  }\n\n  delete(key) {\n    const index = this.hash(key);\n    this.table[index] = null;\n  }\n}\n",u="class HashTable {\n    private val table: MutableList<Pair<String, Any>?> = mutableListOf()\n    private val size: Int = 10\n\n    private fun hash(key: String): Int {\n        return key.hashCode() % size\n    }\n\n    fun insert(key: String, value: Any) {\n        val index = hash(key)\n        table[index] = Pair(key, value)\n    }\n\n    fun search(key: String): Any? {\n        val index = hash(key)\n        return table[index]?.second\n    }\n\n    fun delete(key: String) {\n        val index = hash(key)\n        table[index] = null\n    }\n}\n",o="class HashTable:\n    def __init__(self):\n        self.table = [None] * 10\n\n    def hash(self, key):\n        return hash(key) % len(self.table)\n\n    def insert(self, key, value):\n        index = self.hash(key)\n        self.table[index] = (key, value)\n\n    def search(self, key):\n        index = self.hash(key)\n        if self.table[index] is not None:\n            return self.table[index][1]\n        return None\n\n    def delete(self, key):\n        index = self.hash(key)\n        self.table[index] = None\n",x="use std::collections::HashMap;\n\nstruct HashTable {\n    table: HashMap<String, Box<dyn Any>>,\n}\n\nimpl HashTable {\n    fn new() -> Self {\n        HashTable {\n            table: HashMap::new(),\n        }\n    }\n\n    fn insert(&mut self, key: String, value: Box<dyn Any>) {\n        self.table.insert(key, value);\n    }\n\n    fn search(&self, key: &str) -> Option<&dyn Any> {\n        self.table.get(key).map(|value| value.as_ref())\n    }\n\n    fn delete(&mut self, key: &str) {\n        self.table.remove(key);\n    }\n}\n",b="class HashTable {\n  private table: { [key: string]: any } = {};\n  private size: number = 10;\n\n  insert(key: string, value: any) {\n    const index = this.hash(key);\n    this.table[index] = { key, value };\n  }\n\n  search(key: string): any {\n    const index = this.hash(key);\n    if (this.table[index] !== undefined) {\n      return this.table[index].value;\n    }\n    return null;\n  }\n\n  delete(key: string) {\n    const index = this.hash(key);\n    delete this.table[index];\n  }\n\n  private hash(key: string): number {\n    return key.hashCode() % this.size;\n  }\n}\n",y={title:"Hast Table",description:"Hast Table Data Structure",hide_table_of_contents:!0},k=void 0,j={id:"education/computer-science/data-structures/basic/hash-table",title:"Hast Table",description:"Hast Table Data Structure",source:"@site/docs/education/01-computer-science/09-data-structures/02-basic/06-hash-table.mdx",sourceDirName:"education/01-computer-science/09-data-structures/02-basic",slug:"/education/computer-science/data-structures/basic/hash-table",permalink:"/tech-labs/docs/education/computer-science/data-structures/basic/hash-table",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/09-data-structures/02-basic/06-hash-table.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Hast Table",description:"Hast Table Data Structure",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Stack",permalink:"/tech-labs/docs/education/computer-science/data-structures/basic/stack"},next:{title:"Heap",permalink:"/tech-labs/docs/education/computer-science/data-structures/basic/heap"}},p={},f=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function g(e){const n={admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(12780).Z+""})}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsxs)("thead",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Space"}),(0,a.jsx)("th",{colspan:"6",children:"Time"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{}),(0,a.jsx)("th",{children:"Access"}),(0,a.jsx)("th",{children:"Lookup"}),(0,a.jsx)("th",{children:"Insertion"}),(0,a.jsx)("th",{children:"Deletion"})]})]}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{className:"fair",children:"O(n)"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{className:"na",children:"N/A"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{className:"excellent",children:"O(1)"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{className:"excellent",children:"O(1)"})})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(l.Z,{value:"short",label:"Short",children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Hash Table"})," is a data structure used to store and retrieve data using a hash function."]}),(0,a.jsx)(n.admonition,{title:"Simplified",type:"note",children:(0,a.jsx)(n.p,{children:"You have a big box of toys and you want to find your favorite toy car quickly next time you play. So, you decide to keep each toy in a specific spot in the box. For example, you always put your\ntoy car in the top left corner. This way, the next time you want to play with it, you know exactly where it is and can grab it quickly without having to search through the whole box."})})]}),(0,a.jsx)(l.Z,{value:"detailed",label:"Detailed",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Hash Table"})," is a data structure that pairs keys with values. It uses a hash function to calculate an index for each key, directing it to a specific bucket or slot where the corresponding value\nis stored. While the goal is for each key to have a unique index, some hash functions may assign the same index to multiple keys, causing what's known as a hash collision. These collisions need to\nbe managed in the design of the hash table."]})})]}),"\n",(0,a.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(l.Z,{value:"practice",label:"Practice",children:(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Aspect"}),(0,a.jsx)("th",{children:"Pseudo Code"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Insertion"}),(0,a.jsx)("td",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"  insert(key, value):\n    index = key.hash_code() % HASH_MODULO\n    table[index] = Pair(key, value)\n\n"})})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Search"}),(0,a.jsx)("td",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:" search(key):\n   index = key.hash_code() % HASH_MODULO\n   if table[index] != \xf8:\n     return table[index]\n   return \xf8\n"})})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Deletion"}),(0,a.jsx)("td",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"delete(key):\n  index = key.hash_code() % HASH_MODULO\n  table[index] = null\n"})})})]})]})]})}),(0,a.jsx)(l.Z,{value:"solution",label:"Solution",children:(0,a.jsxs)(i.Z,{queryString:"code",children:[(0,a.jsx)(l.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,a.jsx)(r.Z,{language:"go",children:c})}),(0,a.jsx)(l.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,a.jsx)(r.Z,{language:"java",children:h})}),(0,a.jsx)(l.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,a.jsx)(r.Z,{language:"js",children:d})}),(0,a.jsx)(l.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,a.jsx)(r.Z,{language:"kotlin",children:u})}),(0,a.jsx)(l.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,a.jsx)(r.Z,{language:"python",children:o})}),(0,a.jsx)(l.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,a.jsx)(r.Z,{language:"rust",children:x})}),(0,a.jsx)(l.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,a.jsx)(r.Z,{language:"ts",children:b})})]})})]})]})}function v(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},12780:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hashTable-0b4d298e61982813195bfc0be65bd30a.svg"}}]);