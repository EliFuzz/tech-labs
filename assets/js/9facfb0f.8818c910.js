"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6549],{36577:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var r=i(11527),n=i(84135),t=i(40521),d=i(74109);const l={title:"Security",description:"Security Overview",hide_table_of_contents:!0},c=void 0,a={id:"education/software-development/security",title:"Security",description:"Security Overview",source:"@site/docs/education/03-software-development/07-security.mdx",sourceDirName:"education/03-software-development",slug:"/education/software-development/security",permalink:"/tech-labs/docs/education/software-development/security",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/03-software-development/07-security.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Security",description:"Security Overview",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Architecture Styles",permalink:"/tech-labs/docs/education/software-development/architecture-styles"},next:{title:"Design Patterns",permalink:"/tech-labs/docs/category/design-patterns"}},o={},h=[];function x(e){const s={code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(d.Z,{value:"fe",label:"Frontend (FE)",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Type"}),(0,r.jsx)("th",{children:"Definition"}),(0,r.jsx)("th",{children:"Impact"}),(0,r.jsx)("th",{children:"Prevention"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Cross-Site Scripting (XSS)"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(s.p,{children:"Injecting malicious scripts into web pages viewed by other users"}),(0,r.jsx)(s.p,{children:"Types"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Reflected XSS"}),": malicious script comes from the current HTTP request (",(0,r.jsx)(s.code,{children:"https://insecure-website.com/status?message=<script>/*+Bad+stuff+here...+*/<\/script>"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Stored XSS"}),": malicious script comes from the website's database (",(0,r.jsx)(s.code,{children:"<p><script>/* Bad stuff here... */<\/script></p>"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"DOM-based XSS"}),": vulnerability exists in client-side code rather than server-side code (",(0,r.jsx)(s.code,{children:"You searched for: <img src=1 onerror='/* Bad stuff here... */'>"}),")"]}),"\n"]})]}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Steal sensitive data like login credentials, personal data, or credit card details"}),(0,r.jsx)("li",{children:"Hijack an account"}),(0,r.jsx)("li",{children:"Spread web worms"}),(0,r.jsx)("li",{children:"Access browser history and clipboard contents"}),(0,r.jsx)("li",{children:"Control the browser remotely"}),(0,r.jsx)("li",{children:"Scan and exploit intranet appliances and applications"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Validate, sanitize, and escape user inputs"}),(0,r.jsx)("li",{children:"Filter input on arrival"}),(0,r.jsx)("li",{children:"Encode data on output"}),(0,r.jsx)("li",{children:"Use appropriate response headers"}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.p,{children:"Implement Content Security Policy"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"It's HTTP header that allows site operators fine-grained control over where resources on their site can be loaded from"}),(0,r.jsx)("li",{children:"disable inline JavaScript (either reflected or stored \u2013 means that improperly escaped user-inputs can generate code that is interpreted by the web browser as JavaScript)"})]})]})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Cross-Site Request Forgery (CSRF)"})}),(0,r.jsx)("td",{children:"An attacker tricks a victim into performing actions on their behalf on a web application"}),(0,r.jsx)("td",{children:"Unauthorized actions performed on a user's behalf, potentially leading to data loss or account takeover"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Use unique CSRF Tokens"}),(0,r.jsx)("li",{children:"Use anti-CSRF tokens in forms"}),(0,r.jsxs)("li",{children:["Validate Request Origin (",(0,r.jsx)(s.code,{children:"Origin"})," and ",(0,r.jsx)(s.code,{children:"Referer"})," headers)"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.p,{children:"Secure cookies (Session Hijacking)"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Set ",(0,r.jsx)(s.code,{children:"Expires"})," and ",(0,r.jsx)(s.code,{children:"Max-Age"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.strong,{children:"Secure"}),": Ensures that the cookie will only be sent if the request is made over a secure (HTTPS) connection (prevents man-in-the-middle attacks)"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.strong,{children:"HttpOnly"}),": Prevents JavaScript from having access to the cookie (prevents XSS attacks)"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.strong,{children:"SameSite"}),": Can be set to only send cookies if the request origin matches the target domain (prevents CSRF attacks)"]})]})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.p,{children:"Cross-Origin Resource Sharing (CORS) allows servers to specify who (i.e., which origins) can access the assets on the server"}),(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:["Set ",(0,r.jsx)(s.code,{children:"Access-Control-Allow-Origin"})," header"]})})]}),(0,r.jsx)("li",{children:"Use HTTPS (SSL) connection"}),(0,r.jsx)("li",{children:"Setup Root SSL certificate that is trusted certificate authority (CA)"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Clickjacking"})}),(0,r.jsx)("td",{children:"Manipulating a website user's interaction by hiding clickable elements behind opaque layers"}),(0,r.jsx)("td",{children:"Trick users into performing undesired actions, potentially leading to sensitive data exposure"}),(0,r.jsxs)("td",{children:["Implement ",(0,r.jsx)(s.code,{children:"X-Frame-Options"})," HTTP response header. Use ",(0,r.jsx)(s.strong,{children:"framebusting"})," scripts"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Insecure Direct Object References (IDOR)"})}),(0,r.jsx)("td",{children:"When a web application exposes a reference to an internal implementation object"}),(0,r.jsx)("td",{children:"Unauthorized data access or manipulation"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Implement proper access control checks"}),(0,r.jsx)("li",{children:"Avoid exposing direct object references to users"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Unvalidated Redirects and Forwards"})}),(0,r.jsx)("td",{children:"Web applications often redirect and forward users to other pages and websites, and use untrusted data to determine the destination"}),(0,r.jsx)("td",{children:"Phishing attacks, forcing users to perform undesired actions or download malicious software"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Avoid using user-supplied input to determine the destination of redirects and forwards"}),(0,r.jsx)("li",{children:"Validate the destination of redirects and forwards before allowing them to take place"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Security Misconfiguration"})}),(0,r.jsx)("td",{children:"Inadequate default security configurations, incomplete or ad hoc configurations, open cloud storage, misconfigured HTTP headers, and verbose error messages containing sensitive information"}),(0,r.jsx)("td",{children:"Unauthorized access to sensitive data, or functionality that can compromise the entire system"}),(0,r.jsx)("td",{children:"Regular security hardening of your servers, applications, and databases"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Injection Flaws"})}),(0,r.jsx)("td",{children:"Occur when untrusted data is sent to an interpreter as part of a command or query"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Data loss, corruption, or disclosure to unauthorized parties"}),(0,r.jsx)("li",{children:"Denial of service"}),(0,r.jsx)("li",{children:"Full host takeover"})]})}),(0,r.jsx)("td",{children:"Use prepared statements with parameterized queries, use safe API which avoids the use of interpreter entirely or provides a parameterized interface"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Components with Known Vulnerabilities"})}),(0,r.jsx)("td",{children:"Using software libraries or components with known vulnerabilities"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Serious data loss"}),(0,r.jsx)("li",{children:"Server takeover"})]})}),(0,r.jsx)("td",{children:"Regularly update and patch all components used in the application"})]})]})]})}),(0,r.jsx)(d.Z,{value:"be",label:"Backend (BE)",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Type"}),(0,r.jsx)("th",{children:"Definition"}),(0,r.jsx)("th",{children:"Impact"}),(0,r.jsx)("th",{children:"Prevention"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Injection Flaws"})}),(0,r.jsx)("td",{children:"More details could be found in Frontend section"}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Validation must be performed on both (FE and BE) sides"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Cross-Site Scripting (XSS)"})}),(0,r.jsx)("td",{children:"More details could be found in Frontend section"}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Validation must be performed on both (FE and BE) sides"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Cross-Site Request Forgery (CSRF)"})}),(0,r.jsx)("td",{children:"More details could be found in Frontend section"}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Validation must be performed on both (FE and BE) sides"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Security Misconfiguration"})}),(0,r.jsx)("td",{children:"More details could be found in Frontend section"}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Validation must be performed on both (FE and BE) sides"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Insecure Direct Object References (IDOR)"})}),(0,r.jsx)("td",{children:"More details could be found in Frontend section"}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Validation must be performed on both (FE and BE) sides"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Unvalidated Redirects and Forwards"})}),(0,r.jsx)("td",{children:"More details could be found in Frontend section"}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Validation must be performed on both (FE and BE) sides"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Broken Authentication"})}),(0,r.jsx)("td",{children:"When session management is not properly implemented, allowing attackers to compromise passwords, keys or session tokens"}),(0,r.jsx)("td",{children:"Unauthorized access to accounts and data"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Multi-factor authentication"}),(0,r.jsx)("li",{children:"Session timeout"}),(0,r.jsx)("li",{children:"Password complexity rules"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Sensitive Data Exposure"})}),(0,r.jsx)("td",{children:"When an application does not adequately protect sensitive information"}),(0,r.jsx)("td",{children:"Credit card fraud, identity theft, and other serious crimes"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Encrypt sensitive data"}),(0,r.jsx)("li",{children:"Disable caching for sensitive data and use secure cookies"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Components with Known Vulnerabilities"})}),(0,r.jsx)("td",{children:"More details could be found in Frontend section"}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Validation must be performed on both (FE and BE) sides"})]})]})]})}),(0,r.jsx)(d.Z,{value:"db",label:"Database (DB)",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Type"}),(0,r.jsx)("th",{children:"Definition"}),(0,r.jsx)("th",{children:"Impact"}),(0,r.jsx)("th",{children:"Prevention"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"SQL Injection"})}),(0,r.jsx)("td",{children:"Technique where an attacker can inject SQL queries into an application to manipulate a database"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Unauthorized access"}),(0,r.jsx)("li",{children:"Data corruption or loss"}),(0,r.jsx)("li",{children:"Expose sensitive information"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Use prepared statements"}),(0,r.jsx)("li",{children:"Use parameterized queries"}),(0,r.jsx)("li",{children:"Apply least privilege principle"}),(0,r.jsx)("li",{children:"Validate and sanitize user input"}),(0,r.jsx)("li",{children:"Use deny/allow list validation"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Inadequate Authentication/Authorization"})}),(0,r.jsx)("td",{children:"Absence or poor implementation of user authentication or authorization process"}),(0,r.jsx)("td",{children:"Unauthorized access to sensitive data or critical functionalities"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Implement strong authentication and authorization mechanisms"}),(0,r.jsx)("li",{children:"Multi-factor authentication"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Unencrypted Data"})}),(0,r.jsx)("td",{children:"Storing sensitive data in plain text"}),(0,r.jsx)("td",{children:"Data breaches, exposing sensitive user or system information"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Always encrypt sensitive data"}),(0,r.jsx)("li",{children:"Use secure hashing algorithms"}),(0,r.jsx)("li",{children:"Use secure protocols for data transfer"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Data Leakage"})}),(0,r.jsx)("td",{children:"Unintended transfer or exposure of data from within an organization to an external or untrusted destination"}),(0,r.jsx)("td",{children:"Financial losses, damage to brand reputation, legal penalties"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Implement data loss prevention (DLP) solutions"}),(0,r.jsx)("li",{children:"Regular security audits"}),(0,r.jsx)("li",{children:"Use strong encryption"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Insecure Database Configuration"})}),(0,r.jsx)("td",{children:"Default or weak database configurations that can be easily exploited by attackers"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Unauthorized access"}),(0,r.jsx)("li",{children:"Data theft, loss, manipulation"}),(0,r.jsx)("li",{children:"System instability"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Regularly review and update database configurations"}),(0,r.jsx)("li",{children:"Disable unnecessary features"}),(0,r.jsx)("li",{children:"Secure database accounts"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Database Vulnerabilities"})}),(0,r.jsx)("td",{children:"Weaknesses or flaws in a database system that can be exploited"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Unauthorized access"}),(0,r.jsx)("li",{children:"Data theft, loss, manipulation"}),(0,r.jsx)("li",{children:"System instability"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Regularly update and patch database systems"}),(0,r.jsx)("li",{children:"Perform vulnerability assessments and penetration testing"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Lack of Backup and Recovery Plan"})}),(0,r.jsx)("td",{children:"Failure to regularly backup data and lack of a plan for data recovery"}),(0,r.jsx)("td",{children:"Data loss and system downtime in the event of a disaster or data corruption"}),(0,r.jsx)("td",{children:"Implement regular data backup"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Insecure Direct Object References (IDOR)"})}),(0,r.jsx)("td",{children:"A vulnerability where an application exposes direct references to database records"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Unauthorized access"}),(0,r.jsx)("li",{children:"Data theft, loss, manipulation"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Validate user requests"}),(0,r.jsx)("li",{children:"Implement access control checks"}),(0,r.jsx)("li",{children:"Use indirect object references"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Excessive Privileges"})}),(0,r.jsx)("td",{children:"Assigning more privileges to a database user than required"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Unauthorized activities"}),(0,r.jsx)("li",{children:"Data manipulation"}),(0,r.jsx)("li",{children:"Potential system damage"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Follow the principle of least privilege"}),(0,r.jsx)("li",{children:"Regularly review user privileges"})]})})]})]})]})}),(0,r.jsx)(d.Z,{value:"infra",label:"Infrastructure (Infra)",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Type"}),(0,r.jsx)("th",{children:"Definition"}),(0,r.jsx)("th",{children:"Impact"}),(0,r.jsx)("th",{children:"Prevention"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Unpatched Software"})}),(0,r.jsx)("td",{children:"Failure to regularly update software with security patches"}),(0,r.jsx)("td",{children:"System vulnerable to known threats"}),(0,r.jsx)("td",{children:"Regularly update and patch all software"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Insufficient transport layer protection"})}),(0,r.jsx)("td",{children:"Failure to adequately secure data during transmission over networks"}),(0,r.jsx)("td",{children:"Leaves data vulnerable to interception and eavesdropping"}),(0,r.jsx)("td",{children:(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:[(0,r.jsx)(s.p,{children:"Use protocols:"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"HTTPS"})," for web communications"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"SSH"})," for secure shell access"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"VPNs"})," for remote connections"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"TLS"})," encryption for email"]})]})]})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Distributed Denial of Service (DDoS) Attack"})}),(0,r.jsx)("td",{children:"Coordinated efforts to overwhelm a target system or network with a flood of traffic"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Disrupts access to services"}),(0,r.jsx)("li",{children:"Causing downtime"}),(0,r.jsx)("li",{children:"Potential financial losses"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Implement DDoS mitigation tools and services (e.g. CloudFlare)"}),(0,r.jsx)("li",{children:"Utilize firewalls and intrusion detection/prevention systems to filter and block malicious traffic"}),(0,r.jsx)("li",{children:"Distribute server load across multiple servers or utilize cloud-based DDoS protection services"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Weak Passwords"})}),(0,r.jsx)("td",{children:"Use of easily guessed or common passwords"}),(0,r.jsx)("td",{children:"Permits unauthorized access to systems"}),(0,r.jsx)("td",{children:"Implement strong password policies"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Lack of Encryption"})}),(0,r.jsx)("td",{children:"Failure to encrypt sensitive data"}),(0,r.jsx)("td",{children:"If data is breached, it can be easily read and used maliciously"}),(0,r.jsx)("td",{children:"Encrypt all sensitive data, both in transit and at REST"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Poor Access Control"})}),(0,r.jsx)("td",{children:"Failure to properly control who has access to data"}),(0,r.jsx)("td",{children:"Unauthorized users can access sensitive data or systems"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Implement strict access control policies"}),(0,r.jsx)("li",{children:"Regularly review and update access permissions"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Phishing Attacks"})}),(0,r.jsx)("td",{children:"Deceptive attempts to gain sensitive information"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Unauthorized access"}),(0,r.jsx)("li",{children:"Data breaches"}),(0,r.jsx)("li",{children:"Malware infection"})]})}),(0,r.jsx)("td",{children:"Use email filters to block known phishing attempts"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Malware Infection"})}),(0,r.jsx)("td",{children:"Malicious software designed to cause harm"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Can damage systems"}),(0,r.jsx)("li",{children:"Steal data"}),(0,r.jsx)("li",{children:"Disrupt operations"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Regularly update antivirus software"}),(0,r.jsx)("li",{children:"Avoid clicking suspicious links or downloading unverified software"})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Social Engineering"})}),(0,r.jsx)("td",{children:"Manipulative tactics used to trick individuals into divulging sensitive information"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Unauthorized access"}),(0,r.jsx)("li",{children:"Data breaches"})]})}),(0,r.jsx)("td",{children:"Encourage a culture of security awareness"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Outdated Hardware"})}),(0,r.jsx)("td",{children:"Using old or unsupported hardware"}),(0,r.jsx)("td",{children:"Older hardware may have known vulnerabilities that are not patched"}),(0,r.jsx)("td",{children:"Regularly update and replace hardware"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Lack of Incident Response Plan"})}),(0,r.jsx)("td",{children:"Failure to have a plan in place for when a security incident occurs"}),(0,r.jsx)("td",{children:"Increased damage and slower recovery times"}),(0,r.jsx)("td",{children:"Develop and regularly update an incident response plan"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Unsecured APIs"})}),(0,r.jsx)("td",{children:"APIs that do not have proper security measures in place"}),(0,r.jsx)("td",{children:"Unauthorized access to systems and data"}),(0,r.jsx)("td",{children:"Implement API security measures such as encryption, access control, and rate limiting"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Misconfigured Cloud Storage"})}),(0,r.jsx)("td",{children:"Incorrectly configured cloud storage settings that leave data exposed"}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Unauthorized access"}),(0,r.jsx)("li",{children:"Data breaches"})]})}),(0,r.jsx)("td",{children:"Regularly audit and test cloud storage configurations"})]})]})]})})]})}function j(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);