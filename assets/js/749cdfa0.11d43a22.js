"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2444],{81164:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>x,default:()=>v,frontMatter:()=>g,metadata:()=>m,toc:()=>C});var n=a(11527),r=a(88672),i=a(29140),s=a(52360),c=a(52296);const l="package main\n\nfunc caesarCipher(text string, shift int) string {\n    result := \"\"\n    for _, char := range text {\n        if char >= 'A' && char <= 'Z' {\n            result += string((int(char-'A')+shift)%26 + 'A')\n        } else if char >= 'a' && char <= 'z' {\n            result += string((int(char-'a')+shift)%26 + 'a')\n        } else {\n            result += string(char)\n        }\n    }\n    return result\n}\n",h="public class CaesarCipher {\n\n  public static String caesarCipher(String text, int shift) {\n    StringBuilder result = new StringBuilder();\n    for (char c : text.toCharArray()) {\n      if (Character.isUpperCase(c)) {\n        result.append((char) ((c + shift - 'A') % 26 + 'A'));\n      } else if (Character.isLowerCase(c)) {\n        result.append((char) ((c + shift - 'a') % 26 + 'a'));\n      } else {\n        result.append(c);\n      }\n    }\n    return result.toString();\n  }\n}\n",o='function caesarCipher(text, shift) {\n  return text.replace(/[a-zA-Z]/g, function (char) {\n    const baseCharCode = char <= "Z" ? 65 : 97;\n    return String.fromCharCode(\n      ((char.charCodeAt(0) - baseCharCode + shift) % 26) + baseCharCode,\n    );\n  });\n}\n',d="fun caesarCipher(text: String, shift: Int): String {\n    return text.map { char ->\n        when {\n            char in 'A'..'Z' -> ((char - 'A' + shift) % 26 + 'A'.toInt()).toChar()\n            char in 'a'..'z' -> ((char - 'a' + shift) % 26 + 'a'.toInt()).toChar()\n            else -> char\n        }\n    }.joinToString(\"\")\n}\n",u="def caesar_cipher(text, shift):\n    result = \"\"\n    for char in text:\n        if char.isalpha():\n            base = ord('A') if char.isupper() else ord('a')\n            result += chr((ord(char) - base + shift) % 26 + base)\n        else:\n            result += char\n    return result\n",p="fn caesar_cipher(text: &str, shift: u8) -> String {\n    text.chars()\n        .map(|c| {\n            if c.is_ascii_alphabetic() {\n                let base = if c.is_ascii_uppercase() { b'A' } else { b'a' };\n                ((c as u8 - base + shift) % 26 + base) as char\n            } else {\n                c\n            }\n        })\n        .collect()\n}\n",f='function caesarCipher(text: string, shift: number): string {\n  return text.replace(/[a-zA-Z]/g, (char: string) => {\n    const baseCharCode = char <= "Z" ? 65 : 97;\n    return String.fromCharCode(\n      ((char.charCodeAt(0) - baseCharCode + shift) % 26) + baseCharCode,\n    );\n  });\n}\n',g={title:"Caesar Cipher",description:"Caesar Cipher",hide_table_of_contents:!0},x=void 0,m={id:"education/computer-science/algorithms/algo/caesar-cipher",title:"Caesar Cipher",description:"Caesar Cipher",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/caesar-cipher.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/caesar-cipher",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/caesar-cipher",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/caesar-cipher.mdx",tags:[],version:"current",frontMatter:{title:"Caesar Cipher",description:"Caesar Cipher",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Bucket Sort",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/bucket-sort"},next:{title:"Cartesian Product",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/cartesian-product"}},b={},C=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function j(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(s.Z,{value:"definition",label:"Definition",children:(0,n.jsx)(t.p,{children:"The Caesar Cipher is a simple substitution cipher technique in cryptography. It involves shifting the letters of the alphabet by a fixed number of positions. It's named after Julius Caesar, who is reputed to have used it to communicate with his generals"})}),(0,n.jsx)(s.Z,{value:"how",label:"Explanation",children:(0,n.jsx)(t.p,{children:"In the Caesar Cipher algorithm, a fixed number called the \"key\" or \"shift\" is chosen. This key determines how many positions each letter in the plaintext message is shifted. For instance, with a shift of 3, 'A' becomes 'D', 'B' becomes 'E', and so forth. The alphabet wraps around, meaning 'Z' becomes 'C'. Ultimately, the shifted letters constitute the ciphertext"})}),(0,n.jsx)(s.Z,{value:"guidance",label:"Guidance",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Decide on a shift value, typically denoted by 'k'"}),"\n",(0,n.jsx)(t.li,{children:"Iterate through each character in the plaintext message"}),"\n",(0,n.jsxs)(t.li,{children:["For each character","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"if it's a letter, shift it by 'k' positions"}),"\n",(0,n.jsx)(t.li,{children:"preserve uppercase/lowercase and handle wrapping around the alphabet"}),"\n",(0,n.jsx)(t.li,{children:"if it's not a letter, leave it unchanged"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Assemble the shifted characters to form the ciphertext"}),"\n"]})}),(0,n.jsx)(s.Z,{value:"tips",label:"Tips",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"remember to handle both uppercase and lowercase letters separately"}),"\n",(0,n.jsx)(t.li,{children:"ensure the shift value is within the range 1-25 to avoid redundant shifts"}),"\n",(0,n.jsx)(t.li,{children:"watch out for non-alphabetic characters in the plaintext and maintain their positions in the ciphertext"}),"\n"]})})]}),"\n",(0,n.jsx)(t.h2,{id:"practice",children:"Practice"}),"\n",(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(s.Z,{value:"practice",label:"Practice",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"caesarCipher(plaintext, shift):\n  ciphertext = \"\"\n  for each character in plaintext:\n    if character is an uppercase letter:\n      shifted_char = (character + shift - 'A') % 26 + 'A'\n    else if character is a lowercase letter:\n      shifted_char = (character + shift - 'a') % 26 + 'a'\n    else:\n      shifted_char = character\n    ciphertext += shifted_char\n  return ciphertext\n"})})}),(0,n.jsx)(s.Z,{value:"solution",label:"Solution",children:(0,n.jsxs)(i.Z,{queryString:"code",children:[(0,n.jsx)(s.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,n.jsx)(c.Z,{language:"go",children:l})}),(0,n.jsx)(s.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,n.jsx)(c.Z,{language:"java",children:h})}),(0,n.jsx)(s.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,n.jsx)(c.Z,{language:"js",children:o})}),(0,n.jsx)(s.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,n.jsx)(c.Z,{language:"kotlin",children:d})}),(0,n.jsx)(s.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,n.jsx)(c.Z,{language:"python",children:u})}),(0,n.jsx)(s.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,n.jsx)(c.Z,{language:"rust",children:p})}),(0,n.jsx)(s.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,n.jsx)(c.Z,{language:"ts",children:f})})]})})]})]})}function v(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}}}]);