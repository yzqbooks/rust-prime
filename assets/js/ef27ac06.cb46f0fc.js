"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[1462],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,k=d["".concat(o,".").concat(m)]||d[m]||s[m]||l;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9055:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=["components"],p={},o="\u539f\u751f\u7c7b\u578b",u={unversionedId:"type/types",id:"type/types",title:"\u539f\u751f\u7c7b\u578b",description:"\u50cf\u5176\u4ed6\u73b0\u4ee3\u7f16\u7a0b\u8bed\u8a00\u4e00\u6837\uff0cRust\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u57fa\u7840\u7684\u7c7b\u578b\uff0c\u6211\u4eec\u4e00\u822c\u79f0\u4e4b\u4e3a\u539f\u751f\u7c7b\u578b\u3002\u5176\u5f3a\u5927\u7684\u7c7b\u578b\u7cfb\u7edf\u5c31\u662f\u5efa\u7acb\u5728\u8fd9\u4e9b\u539f\u751f\u7c7b\u578b\u4e4b\u4e0a\u7684\uff0c\u56e0\u6b64\uff0c\u5728\u5199Rust\u4ee3\u7801\u4e4b\u524d\uff0c\u5fc5\u987b\u8981\u5bf9Rust\u7684\u539f\u751f\u7c7b\u578b\u6709\u4e00\u5b9a\u7684\u4e86\u89e3\u3002",source:"@site/docs/type/types.md",sourceDirName:"type",slug:"/type/types",permalink:"/rust-docs/docs/type/types",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/type/types.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"String",permalink:"/rust-docs/docs/type/string"},next:{title:"Unsafe\u3001\u539f\u59cb\u6307\u9488",permalink:"/rust-docs/docs/unsafe-rawpointer/preface"}},c={},s=[{value:"bool",id:"bool",level:2},{value:"char",id:"char",level:2},{value:"\u6570\u5b57\u7c7b\u578b",id:"\u6570\u5b57\u7c7b\u578b",level:2},{value:"\u81ea\u9002\u5e94\u7c7b\u578b",id:"\u81ea\u9002\u5e94\u7c7b\u578b",level:3},{value:"\u6570\u7ec4 array",id:"\u6570\u7ec4-array",level:2},{value:"Slice",id:"slice",level:2},{value:"\u52a8\u6001\u6570\u7ec4 Vec",id:"\u52a8\u6001\u6570\u7ec4-vec",level:2},{value:"\u6700\u539f\u751f\u5b57\u7b26\u4e32 str",id:"\u6700\u539f\u751f\u5b57\u7b26\u4e32-str",level:2},{value:"\u51fd\u6570\u7c7b\u578b Functions",id:"\u51fd\u6570\u7c7b\u578b-functions",level:2}],d={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u539f\u751f\u7c7b\u578b"},"\u539f\u751f\u7c7b\u578b"),(0,l.kt)("p",null,"\u50cf\u5176\u4ed6\u73b0\u4ee3\u7f16\u7a0b\u8bed\u8a00\u4e00\u6837\uff0cRust\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u57fa\u7840\u7684\u7c7b\u578b\uff0c\u6211\u4eec\u4e00\u822c\u79f0\u4e4b\u4e3a",(0,l.kt)("em",{parentName:"p"},"\u539f\u751f\u7c7b\u578b"),"\u3002\u5176\u5f3a\u5927\u7684\u7c7b\u578b\u7cfb\u7edf\u5c31\u662f\u5efa\u7acb\u5728\u8fd9\u4e9b\u539f\u751f\u7c7b\u578b\u4e4b\u4e0a\u7684\uff0c\u56e0\u6b64\uff0c\u5728\u5199Rust\u4ee3\u7801\u4e4b\u524d\uff0c\u5fc5\u987b\u8981\u5bf9Rust\u7684\u539f\u751f\u7c7b\u578b\u6709\u4e00\u5b9a\u7684\u4e86\u89e3\u3002"),(0,l.kt)("h2",{id:"bool"},"bool"),(0,l.kt)("p",null,"Rust\u81ea\u5e26\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"bool"),"\u7c7b\u578b\uff0c\u5176\u53ef\u80fd\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\u6216\u8005",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\u3002\n\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8fd9\u6837\u7684\u65b9\u5f0f\u53bb\u58f0\u660e\u5b83\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"let is_she_love_me = false;\nlet mut is_he_love_me: bool = true;\n")),(0,l.kt)("p",null,"\u5f53\u7136\uff0cbool\u7c7b\u578b\u88ab\u7528\u7684\u6700\u591a\u7684\u5730\u65b9\u5c31\u662f\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"if\u8868\u8fbe\u5f0f"),"\u91cc\u4e86\u3002"),(0,l.kt)("h2",{id:"char"},"char"),(0,l.kt)("p",null,"\u5728Rust\u4e2d\uff0c\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"char"),"\u7c7b\u578b\u8868\u793a\u4e00\u4e2a",(0,l.kt)("em",{parentName:"p"},"Unicode"),"\u5b57\u7b26,\u8fd9\u4e5f\u5c31\u610f\u5473\u7740\uff0c\u5728\u67d0\u4e9b\u8bed\u8a00\u91cc\u4ee3\u8868\u4e00\u4e2a\u5b57\u7b26(8bit)\u7684char\uff0c\u5728Rust\u91cc\u5b9e\u9645\u4e0a\u662f\u56db\u4e2a\u5b57\u8282(32bit)\u3002\n\u540c\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5404\u79cd\u5947\u602a\u7684\u975e\u4e2d\u6587\u5b57\u7b26\u968f\u5fc3\u6240\u6b32\u7684\u8d4b\u503c\u7ed9\u4e00\u4e2achar\u7c7b\u578b\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cRust\u4e2d\u6211\u4eec\u8981\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"'"),"\u6765\u8868\u793a\u4e00\u4e2achar\uff0c\u5982\u679c\u7528",(0,l.kt)("inlineCode",{parentName:"p"},'"'),"\u7684\u8bdd\u4f60\u5f97\u5230\u7684\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"&'static str"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"let c = 'x';\nlet cc = '\u738b';\n")),(0,l.kt)("h2",{id:"\u6570\u5b57\u7c7b\u578b"},"\u6570\u5b57\u7c7b\u578b"),(0,l.kt)("p",null,"\u548c\u5176\u4ed6\u7c7bC\u7cfb\u7684\u8bed\u8a00\u4e0d\u4e00\u6837\uff0cRust\u7528\u4e00\u79cd",(0,l.kt)("em",{parentName:"p"},"\u7b26\u53f7+\u4f4d\u6570"),"\u7684\u65b9\u5f0f\u6765\u8868\u793a\u5176\u57fa\u672c\u7684\u6570\u5b57\u7c7b\u578b\u3002\u53ef\u80fd\u4f60\u4e60\u60ef\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"int"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"double"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"float"),"\u4e4b\u7c7b\u7684\u8868\u793a\u6cd5\uff0cRust\u7684\u8868\u793a\u6cd5\u9700\u8981\u4f60\u7a0d\u5fae\u9002\u5e94\u4e00\u4e0b\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u7528\u7684\u7b26\u53f7\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"i"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"f"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"u")),(0,l.kt)("p",null,"\u4f60\u53ef\u7528\u7684\u4f4d\u6570\uff0c\u5f53\u7136\u4e86\uff0c\u90fd\u662f2\u7684n\u6b21\u5e42\uff0c\u5206\u522b\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"8"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"16"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"32"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"64"),"\u53ca",(0,l.kt)("inlineCode",{parentName:"p"},"size"),"\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u5176\u7ec4\u5408\u8d77\u6765\uff0c\u5f62\u6210\u8bf8\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"i32"),",",(0,l.kt)("inlineCode",{parentName:"p"},"u16"),"\u7b49\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u5f53\u7136\u4e86\uff0c\u8fd9\u6837\u7684\u7ec4\u5408\u5e76\u4e0d\u81ea\u7531\uff0c\u56e0\u4e3a\u6d6e\u70b9\u7c7b\u578b\u6700\u5c11\u53ea\u80fd\u752832\u4f4d\u6765\u8868\u793a\uff0c\u56e0\u6b64\u53ea\u80fd\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"f32"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"f64"),"\u6765\u8868\u793a\u3002"),(0,l.kt)("h3",{id:"\u81ea\u9002\u5e94\u7c7b\u578b"},"\u81ea\u9002\u5e94\u7c7b\u578b"),(0,l.kt)("p",null,"\u770b\u5b8c\u4e0a\u9762\u4f60\u4e00\u5b9a\u4f1a\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"isize"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"usize"),"\u5f88\u597d\u5947\u3002\u8fd9\u4e24\u4e2a\u662f\u6765\u5e72\u5565\u7684\u3002\u8fd9\u4e24\u4e2a\u561b\uff0c\u5176\u5b9e\u662f\u53d6\u51b3\u4e8e\u4f60\u7684\u64cd\u4f5c\u7cfb\u7edf\u7684\u4f4d\u6570\u3002\u7b80\u5355\u7c97\u66b4\u4e00\u70b9\u6bd4\u598264\u4f4d\u7535\u8111\u4e0a\u5c31\u662f64\u4f4d\uff0c32\u4f4d\u7535\u8111\u4e0a\u5c31\u662f32\u4f4d\uff0c16\u4f4d\u2026\u2026\u5475\u5475\u54d2\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4f60\u4e0d\u80fd\u56e0\u4e3a\u4f60\u7684\u7535\u8111\u662f64\u4f4d\u7684\uff0c\u800c\u5f3a\u884c\u5c06\u5b83\u7b49\u540c\u4e8e64\uff0c\u4e5f\u5c31\u662f\u8bf4",(0,l.kt)("inlineCode",{parentName:"p"},"isize != i64"),"\uff0c\u4efb\u4f55\u60c5\u51b5\u4e0b\u4f60\u90fd\u9700\u8981\u5f3a\u5236\u8f6c\u6362\u3002"),(0,l.kt)("h2",{id:"\u6570\u7ec4-array"},"\u6570\u7ec4 array"),(0,l.kt)("p",null,"Rust\u7684\u6570\u7ec4\u662f\u88ab\u8868\u793a\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"[T;N]"),"\u3002\u5176\u4e2dN\u8868\u793a\u6570\u7ec4\u5927\u5c0f\uff0c\u5e76\u4e14\u8fd9\u4e2a\u5927\u5c0f\u4e00\u5b9a\u662f\u4e2a\u7f16\u8bd1\u65f6\u5c31\u80fd\u83b7\u5f97\u7684\u6574\u6570\u503c\uff0cT\u8868\u793a",(0,l.kt)("inlineCode",{parentName:"p"},"\u6cdb\u578b"),"\u7c7b\u578b\uff0c\u5373\u4efb\u610f\u7c7b\u578b\u3002\u6211\u4eec\u53ef\u4ee5\u8fd9\u4e48\u6765\u58f0\u660e\u548c\u4f7f\u7528\u4e00\u4e2a\u6570\u7ec4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'let a = [8, 9, 10];\nlet b: [u8;3] = [8, 6, 5];\nprint!("{}", a[0]);\n')),(0,l.kt)("p",null,"\u548cGolang\u4e00\u6837\uff0cRust\u7684\u6570\u7ec4\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"N"),"\uff08\u5927\u5c0f\uff09\u4e5f\u662f\u7c7b\u578b\u7684\u4e00\u90e8\u5206\uff0c\u5373",(0,l.kt)("inlineCode",{parentName:"p"},"[u8; 3] != [u8; 4]"),"\u3002\u8fd9\u4e48\u8bbe\u8ba1\u662f\u4e3a\u4e86\u66f4\u5b89\u5168\u548c\u9ad8\u6548\u7684\u4f7f\u7528\u5185\u5b58\uff0c\u5f53\u7136\u4e86\uff0c\u8fd9\u4f1a\u7ed9\u7b2c\u4e00\u6b21\u63a5\u89e6\u7c7b\u4f3c\u6982\u5ff5\u7684\u4eba\u5e26\u6765\u4e00\u70b9\u70b9\u56f0\u96be\uff0c\u6bd4\u5982\u4ee5\u4e0b\u4ee3\u7801\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn show(arr: [u8;3]) {\n    for i in &arr {\n        print!("{} ", i);\n    }\n}\n\nfn main() {\n    let a: [u8; 3] = [1, 2, 3];\n    show(a);\n    let b: [u8; 4] = [1, 2, 3, 4];\n    show(b);\n}\n')),(0,l.kt)("p",null,"\u7f16\u8bd1\u8fd0\u884c\u5b83\u4f60\u5c06\u83b7\u5f97\u4e00\u4e2a\u7f16\u8bd1\u9519\u8bef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<anon>:11:10: 11:11 error: mismatched types:\n expected `[u8; 3]`,\n    found `[u8; 4]`\n(expected an array with a fixed size of 3 elements,\n    found one with 4 elements) [E0308]\n<anon>:11     show(b);\n                   ^\n<anon>:11:10: 11:11 help: see the detailed explanation for E0308\nerror: aborting due to previous error\n")),(0,l.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u4f60\u5c06\u4e00\u4e2a4\u957f\u5ea6\u7684\u6570\u7ec4\u8d4b\u503c\u7ed9\u4e86\u4e00\u4e2a\u53ea\u9700\u89813\u957f\u5ea6\u6570\u7ec4\u4f5c\u4e3a\u53c2\u6570\u7684\u51fd\u6570\u3002\u90a3\u4e48\u5982\u4f55\u5199\u4e00\u4e2a\u901a\u7528\u7684show\u65b9\u6cd5\u6765\u5c55\u73b0\u4efb\u610f\u957f\u5ea6\u6570\u7ec4\u5462\uff1f\u8bf7\u770b\u4e0b\u8282",(0,l.kt)("inlineCode",{parentName:"p"},"Slice")),(0,l.kt)("h2",{id:"slice"},"Slice"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Slice"),"\u4ece\u76f4\u89c2\u4e0a\u8bb2\uff0c\u662f\u5bf9\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Array"),"\u7684\u5207\u7247\uff0c\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"Slice"),"\uff0c\u4f60\u80fd\u83b7\u53d6\u5230\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Array"),"\u7684\u90e8\u5206\u6216\u8005\u5168\u90e8\u7684\u8bbf\u95ee\u6743\u9650\u3002\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Array"),"\u4e0d\u540c\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Slice"),"\u662f\u53ef\u4ee5\u52a8\u6001\u7684\uff0c\u4f46\u662f\u5462\uff0c\u5176\u8303\u56f4\u662f\u4e0d\u80fd\u8d85\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"Array"),"\u7684\u5927\u5c0f\uff0c\u8fd9\u70b9\u548cGolang\u662f\u4e0d\u4e00\u6837\u7684\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Slice"),"\u7684\u8868\u8fbe\u5f0f\u53ef\u4ee5\u4e3a\u5982\u4e0b: ",(0,l.kt)("inlineCode",{parentName:"p"},"&[T]")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"&mut [T]"),"\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc",(0,l.kt)("inlineCode",{parentName:"p"},"&"),"\u7b26\u53f7\u662f\u4e00\u4e2a\u96be\u70b9\uff0c\u6211\u4eec\u4e0d\u59a8\u653e\u5f00\u8fd9\u4e2a\u7b26\u53f7\uff0c\u7b80\u5355\u7684\u628a\u5b83\u770b\u6210\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Slice"),"\u7684\u7532\u9c7c\u81c0\u90e8\u2014\u2014\u89c4\u5b9a\u3002\u53e6\u5916\uff0c\u540c\u6837\u7684\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Slice"),"\u4e5f\u662f\u53ef\u4ee5\u901a\u8fc7\u4e0b\u6807\u7684\u65b9\u5f0f\u8bbf\u95ee\u5176\u5143\u7d20\uff0c\u4e0b\u6807\u4e5f\u662f\u4ece0\u5f00\u59cb\u7684\u54df\u3002\n\u4f60\u53ef\u4ee5\u8fd9\u4e48\u58f0\u660e\u5e76\u4f7f\u7528\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Slice"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"let arr = [1, 2, 3, 4, 5, 6];\nlet slice_complete = &arr[..]; // \u83b7\u53d6\u5168\u90e8\u5143\u7d20\nlet slice_middle = &arr[1..4]; // \u83b7\u53d6\u4e2d\u95f4\u5143\u7d20\uff0c\u6700\u540e\u53d6\u5f97\u7684Slice\u4e3a [2, 3, 4] \u3002\u5207\u7247\u9075\u5faa\u5de6\u95ed\u53f3\u5f00\u539f\u5219\u3002\nlet slice_right = &arr[1..]; // \u6700\u540e\u83b7\u5f97\u7684\u5143\u7d20\u4e3a[2, 3, 4, 5, 6]\uff0c\u957f\u5ea6\u4e3a5\u3002\nlet slice_left = &arr[..3]; // \u6700\u540e\u83b7\u5f97\u7684\u5143\u7d20\u4e3a[1, 2, 3]\uff0c\u957f\u5ea6\u4e3a3\u3002\n")),(0,l.kt)("p",null,"\u600e\u4e48\u6837\uff0c\u4e86\u89e3\u4e86\u5427\u3002\n\u90a3\u4e48\u63a5\u4e0b\u6765\u6211\u4eec\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Slice"),"\u6765\u6539\u9020\u4e00\u4e0b\u4e0a\u9762\u7684\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn show(arr: &[u8]) {\n    for i in arr {\n        print!("{} ", i);\n    }\n    println!("");\n}\n\nfn main() {\n    let a: [u8; 3] = [1, 2, 3];\n    let slice_a = &a[..];\n    show(slice_a);\n    let b: [u8; 4] = [1, 2, 3, 4];\n    show(&b[..]);\n}\n')),(0,l.kt)("p",null,"\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1 2 3\n1 2 3 4\n")),(0,l.kt)("h2",{id:"\u52a8\u6001\u6570\u7ec4-vec"},"\u52a8\u6001\u6570\u7ec4 Vec"),(0,l.kt)("p",null,"\u719f\u6089C++ STL\u7684\u540c\u5b66\u53ef\u80fd\u5bf9C++\u7684vector\u5f88\u719f\u6089\uff0c\u540c\u6837\u7684\uff0cRust\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7c7b\u4f3c\u7684\u4e1c\u897f\u3002\u4ed6\u53eb",(0,l.kt)("inlineCode",{parentName:"p"},"Vec"),"\u3002"),(0,l.kt)("p",null,"\u5728\u57fa\u7840\u7c7b\u578b\u91cc\u8bb2",(0,l.kt)("inlineCode",{parentName:"p"},"Vec"),"\u8c8c\u4f3c\u662f\u4e0d\u592a\u5408\u9002\u7684\uff0c\u4f46\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\u7684\u5e94\u7528\u6bd4\u8f83\u5e7f\u6cdb\uff0c\u6240\u4ee5\u8bf4\u5148\u7c97\u7565\u7684\u4ecb\u7ecd\u4e00\u4e0b\uff0c\u5728\u96c6\u5408\u7c7b\u578b\u7684\u7ae0\u8282\u4f1a\u6709\u8be6\u7ec6\u8bb2\u8ff0\u3002"),(0,l.kt)("p",null,"\u5728Rust\u91cc\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Vec"),"\u88ab\u8868\u793a\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Vec<T>"),"\uff0c \u5176\u4e2dT\u662f\u4e00\u4e2a\u6cdb\u578b\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u4ecb\u7ecd\u51e0\u79cd\u5178\u578b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Vec"),"\u7684\u7528\u6cd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'let mut v1: Vec<i32> = vec![1, 2, 3]; // \u901a\u8fc7vec!\u5b8f\u6765\u58f0\u660e\nlet v2 = vec![0; 10]; // \u58f0\u660e\u4e00\u4e2a\u521d\u59cb\u957f\u5ea6\u4e3a10\u7684\u503c\u5168\u4e3a0\u7684\u52a8\u6001\u6570\u7ec4\nprintln!("{}", v1[0]); // \u901a\u8fc7\u4e0b\u6807\u6765\u8bbf\u95ee\u6570\u7ec4\u5143\u7d20\n\nfor i in &v1 {\n    print!("{}", i); // &Vec<i32> \u53ef\u4ee5\u901a\u8fc7 Deref \u8f6c\u6362\u6210 &[i32]\n}\n\nprintln!("");\n\nfor i in &mut v1 {\n    *i = *i+1;\n    print!("{}", i); // \u53ef\u53d8\u8bbf\u95ee\n}\n\n')),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1\n123\n234\n")),(0,l.kt)("h2",{id:"\u6700\u539f\u751f\u5b57\u7b26\u4e32-str"},"\u6700\u539f\u751f\u5b57\u7b26\u4e32 str"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"str"),"\u6765\u58f0\u660e\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u4e8b\u5b9e\u4e0a\uff0cRust\u4e2d\uff0c\u6240\u6709\u7528",(0,l.kt)("inlineCode",{parentName:"p"},'""'),"\u5305\u88f9\u8d77\u6765\u7684\u90fd\u53ef\u4ee5\u79f0\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"&str"),"(\u6ce8\u610f\u8fd9\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"&"),",\u8fd9\u662f\u96be\u70b9\uff0c\u4e0d\u7528\u7ba1\u4ed6\uff0c\u4e0d\u662f\u4e48\uff1f)\uff0c\u4f46\u662f\u8fd9\u4e2a\u7c7b\u578b\u88ab\u5355\u72ec\u7528\u7684\u60c5\u51b5\u5f88\u5c11\uff0c\u56e0\u6b64\uff0c\u6211\u4eec\u5c06\u5728\u4e0b\u4e00\u8282\u7740\u91cd\u4ecb\u7ecd\u5b57\u7b26\u4e32\u7c7b\u578b\u3002"),(0,l.kt)("h2",{id:"\u51fd\u6570\u7c7b\u578b-functions"},"\u51fd\u6570\u7c7b\u578b Functions"),(0,l.kt)("p",null,"\u51fd\u6570\u540c\u6837\u7684\u662f\u4e00\u4e2a\u7c7b\u578b\uff0c\u8fd9\u91cc\u53ea\u7ed9\u5927\u5bb6\u666e\u53ca\u4e00\u4e9b\u57fa\u672c\u7684\u6982\u5ff5\uff0c\u51fd\u6570\u7c7b\u578b\u6d89\u53ca\u5230\u6bd4\u8f83\u9ad8\u9636\u7684\u5e94\u7528\uff0c\u5e0c\u671b\u5927\u5bb6\u80fd\u5728\u540e\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"\u95ed\u5305"),"\u7ae0\u8282\u4ed4\u7ec6\u53c2\u8bfb"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u5c0f\u4f8b\u5b50"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"fn foo(x: i32) -> i32 { x+1 }\n\nlet x: fn(i32) -> i32 = foo;\n\nassert_eq!(11, x(10));\n")))}m.isMDXComponent=!0}}]);