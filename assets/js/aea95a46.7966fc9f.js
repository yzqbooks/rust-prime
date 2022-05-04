"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[1764],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,k=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return t?r.createElement(k,i(i({ref:n},d),{},{components:t})):r.createElement(k,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=s;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9312:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=["components"],o={},c="Rc \u548c Arc",p={unversionedId:"rcarc/rcarc",id:"rcarc/rcarc",title:"Rc \u548c Arc",description:"Rust \u5efa\u7acb\u5728\u6240\u6709\u6743\u4e4b\u4e0a\u7684\u8fd9\u4e00\u5957\u673a\u5236\uff0c\u5b83\u8981\u6c42\u4e00\u4e2a\u8d44\u6e90\u540c\u4e00\u65f6\u523b\u6709\u4e14\u53ea\u80fd\u6709\u4e00\u4e2a\u62e5\u6709\u6240\u6709\u6743\u7684\u7ed1\u5b9a\u6216 &mut \u5f15\u7528\uff0c\u8fd9\u5728\u5927\u90e8\u5206\u7684\u60c5\u51b5\u4e0b\u4fdd\u8bc1\u4e86\u5185\u5b58\u7684\u5b89\u5168\u3002\u4f46\u662f\u8fd9\u6837\u7684\u8bbe\u8ba1\u662f\u76f8\u5f53\u4e25\u683c\u7684\uff0c\u5728\u53e6\u5916\u4e00\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5b83\u9650\u5236\u4e86\u7a0b\u5e8f\u7684\u4e66\u5199\uff0c\u65e0\u6cd5\u5b9e\u73b0\u67d0\u4e9b\u529f\u80fd\u3002\u56e0\u6b64\uff0cRust \u5728 std \u5e93\u4e2d\u63d0\u4f9b\u4e86\u989d\u5916\u7684\u63aa\u65bd\u6765\u8865\u5145\u6240\u6709\u6743\u673a\u5236\uff0c\u4ee5\u5e94\u5bf9\u66f4\u5e7f\u6cdb\u7684\u573a\u666f\u3002",source:"@site/docs/rcarc/rcarc.md",sourceDirName:"rcarc",slug:"/rcarc/",permalink:"/rust-docs/docs/rcarc/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rcarc/rcarc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6570\u7ec4\u3001\u52a8\u6001\u6570\u7ec4\u548c\u5b57\u7b26\u4e32",permalink:"/rust-docs/docs/quickstart/vector-string"},next:{title:"Cell, RefCell",permalink:"/rust-docs/docs/rcarc/cell"}},d={},u=[{value:"Rc",id:"rc",level:2},{value:"Rc Weak",id:"rc-weak",level:2},{value:"Arc",id:"arc",level:2},{value:"Arc Weak",id:"arc-weak",level:3},{value:"\u4e00\u4e2a\u4f8b\u5b50",id:"\u4e00\u4e2a\u4f8b\u5b50",level:2}],s={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rc-\u548c-arc"},"Rc \u548c Arc"),(0,l.kt)("p",null,"Rust \u5efa\u7acb\u5728\u6240\u6709\u6743\u4e4b\u4e0a\u7684\u8fd9\u4e00\u5957\u673a\u5236\uff0c\u5b83\u8981\u6c42\u4e00\u4e2a\u8d44\u6e90\u540c\u4e00\u65f6\u523b\u6709\u4e14\u53ea\u80fd\u6709\u4e00\u4e2a\u62e5\u6709\u6240\u6709\u6743\u7684\u7ed1\u5b9a\u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"&mut")," \u5f15\u7528\uff0c\u8fd9\u5728\u5927\u90e8\u5206\u7684\u60c5\u51b5\u4e0b\u4fdd\u8bc1\u4e86\u5185\u5b58\u7684\u5b89\u5168\u3002\u4f46\u662f\u8fd9\u6837\u7684\u8bbe\u8ba1\u662f\u76f8\u5f53\u4e25\u683c\u7684\uff0c\u5728\u53e6\u5916\u4e00\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5b83\u9650\u5236\u4e86\u7a0b\u5e8f\u7684\u4e66\u5199\uff0c\u65e0\u6cd5\u5b9e\u73b0\u67d0\u4e9b\u529f\u80fd\u3002\u56e0\u6b64\uff0cRust \u5728 std \u5e93\u4e2d\u63d0\u4f9b\u4e86\u989d\u5916\u7684\u63aa\u65bd\u6765\u8865\u5145\u6240\u6709\u6743\u673a\u5236\uff0c\u4ee5\u5e94\u5bf9\u66f4\u5e7f\u6cdb\u7684\u573a\u666f\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4 Rust \u4e2d\uff0c\u5bf9\u4e00\u4e2a\u8d44\u6e90\uff0c\u540c\u4e00\u65f6\u523b\uff0c\u6709\u4e14\u53ea\u6709\u4e00\u4e2a\u6240\u6709\u6743\u62e5\u6709\u8005\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Rc")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Arc")," \u4f7f\u7528\u5f15\u7528\u8ba1\u6570\u7684\u65b9\u6cd5\uff0c\u8ba9\u7a0b\u5e8f\u5728\u540c\u4e00\u65f6\u523b\uff0c\u5b9e\u73b0\u540c\u4e00\u8d44\u6e90\u7684\u591a\u4e2a\u6240\u6709\u6743\u62e5\u6709\u8005\uff0c\u591a\u4e2a\u62e5\u6709\u8005\u5171\u4eab\u8d44\u6e90\u3002"),(0,l.kt)("h2",{id:"rc"},"Rc"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Rc")," \u7528\u4e8e\u540c\u4e00\u7ebf\u7a0b\u5185\u90e8\uff0c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"use std::rc::Rc")," \u6765\u5f15\u5165\u3002\u5b83\u6709\u4ee5\u4e0b\u51e0\u4e2a\u7279\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"Rc")," \u5305\u88c5\u8d77\u6765\u7684\u7c7b\u578b\u5bf9\u8c61\uff0c\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"immutable")," \u7684\uff0c\u5373 \u4e0d\u53ef\u53d8\u7684\u3002\u5373\u4f60\u65e0\u6cd5\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"li"},"Rc<T>")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"T")," \u5bf9\u8c61\uff0c\u53ea\u80fd\u8bfb\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u65e6\u6700\u540e\u4e00\u4e2a\u62e5\u6709\u8005\u6d88\u5931\uff0c\u5219\u8d44\u6e90\u4f1a\u88ab\u81ea\u52a8\u56de\u6536\uff0c\u8fd9\u4e2a\u751f\u547d\u5468\u671f\u662f\u5728\u7f16\u8bd1\u671f\u5c31\u786e\u5b9a\u4e0b\u6765\u7684\uff1b"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Rc")," \u53ea\u80fd\u7528\u4e8e\u540c\u4e00\u7ebf\u7a0b\u5185\u90e8\uff0c\u4e0d\u80fd\u7528\u4e8e\u7ebf\u7a0b\u4e4b\u95f4\u7684\u5bf9\u8c61\u5171\u4eab\uff08\u4e0d\u80fd\u8de8\u7ebf\u7a0b\u4f20\u9012\uff09\uff1b"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Rc")," \u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u6307\u9488\uff0c\u5b83\u4e0d\u5f71\u54cd\u5305\u88f9\u5bf9\u8c61\u7684\u65b9\u6cd5\u8c03\u7528\u5f62\u5f0f\uff08\u5373\u4e0d\u5b58\u5728\u5148\u89e3\u5f00\u5305\u88f9\u518d\u8c03\u7528\u503c\u8fd9\u4e00\u8bf4\uff09\u3002")),(0,l.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"use std::rc::Rc;\n\nlet five = Rc::new(5);\nlet five2 = five.clone();\nlet five3 = five.clone();\n\n")),(0,l.kt)("h2",{id:"rc-weak"},"Rc Weak"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Weak")," \u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"use std::rc::Weak")," \u6765\u5f15\u5165\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Rc")," \u662f\u4e00\u4e2a\u5f15\u7528\u8ba1\u6570\u6307\u9488\uff0c\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"Weak")," \u662f\u4e00\u4e2a\u6307\u9488\uff0c\u4f46\u4e0d\u589e\u52a0\u5f15\u7528\u8ba1\u6570\uff0c\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Rc")," \u7684 weak \u7248\u3002\u5b83\u6709\u4ee5\u4e0b\u51e0\u4e2a\u7279\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u53ef\u8bbf\u95ee\uff0c\u4f46\u4e0d\u62e5\u6709\u3002\u4e0d\u589e\u52a0\u5f15\u7528\u8ba1\u6570\uff0c\u56e0\u6b64\uff0c\u4e0d\u4f1a\u5bf9\u8d44\u6e90\u56de\u6536\u7ba1\u7406\u9020\u6210\u5f71\u54cd\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u53ef\u7531 ",(0,l.kt)("inlineCode",{parentName:"li"},"Rc<T>")," \u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"downgrade")," \u65b9\u6cd5\u800c\u8f6c\u6362\u6210 ",(0,l.kt)("inlineCode",{parentName:"li"},"Weak<T>"),"\uff1b"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Weak<T>")," \u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"upgrade")," \u65b9\u6cd5\u8f6c\u6362\u6210 ",(0,l.kt)("inlineCode",{parentName:"li"},"Option<Rc<T>>"),"\uff0c\u5982\u679c\u8d44\u6e90\u5df2\u7ecf\u88ab\u91ca\u653e\uff0c\u5219 Option \u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"None"),"\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5e38\u7528\u4e8e\u89e3\u51b3\u5faa\u73af\u5f15\u7528\u7684\u95ee\u9898\u3002")),(0,l.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"use std::rc::Rc;\n\nlet five = Rc::new(5);\n\nlet weak_five = Rc::downgrade(&five);\n\nlet strong_five: Option<Rc<_>> = weak_five.upgrade();\n")),(0,l.kt)("h2",{id:"arc"},"Arc"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Arc")," \u662f\u539f\u5b50\u5f15\u7528\u8ba1\u6570\uff0c\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Rc")," \u7684\u591a\u7ebf\u7a0b\u7248\u672c\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Arc")," \u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"std::sync::Arc")," \u5f15\u5165\u3002"),(0,l.kt)("p",null,"\u5b83\u7684\u7279\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Arc")," \u53ef\u8de8\u7ebf\u7a0b\u4f20\u9012\uff0c\u7528\u4e8e\u8de8\u7ebf\u7a0b\u5171\u4eab\u4e00\u4e2a\u5bf9\u8c61\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"Arc")," \u5305\u88f9\u8d77\u6765\u7684\u7c7b\u578b\u5bf9\u8c61\uff0c\u5bf9\u53ef\u53d8\u6027\u6ca1\u6709\u8981\u6c42\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u65e6\u6700\u540e\u4e00\u4e2a\u62e5\u6709\u8005\u6d88\u5931\uff0c\u5219\u8d44\u6e90\u4f1a\u88ab\u81ea\u52a8\u56de\u6536\uff0c\u8fd9\u4e2a\u751f\u547d\u5468\u671f\u662f\u5728\u7f16\u8bd1\u671f\u5c31\u786e\u5b9a\u4e0b\u6765\u7684\uff1b"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Arc")," \u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u6307\u9488\uff0c\u5b83\u4e0d\u5f71\u54cd\u5305\u88f9\u5bf9\u8c61\u7684\u65b9\u6cd5\u8c03\u7528\u5f62\u5f0f\uff08\u5373\u4e0d\u5b58\u5728\u5148\u89e3\u5f00\u5305\u88f9\u518d\u8c03\u7528\u503c\u8fd9\u4e00\u8bf4\uff09\uff1b"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Arc")," \u5bf9\u4e8e\u591a\u7ebf\u7a0b\u7684\u5171\u4eab\u72b6\u6001",(0,l.kt)("strong",{parentName:"li"},"\u51e0\u4e4e\u662f\u5fc5\u987b\u7684"),"\uff08\u51cf\u5c11\u590d\u5236\uff0c\u63d0\u9ad8\u6027\u80fd\uff09\u3002")),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"use std::sync::Arc;\nuse std::thread;\n\nfn main() {\n    let numbers: Vec<_> = (0..100u32).collect();\n    let shared_numbers = Arc::new(numbers);\n\n    for _ in 0..10 {\n        let child_numbers = shared_numbers.clone();\n\n        thread::spawn(move || {\n            let local_numbers = &child_numbers[..];\n\n            // Work with the local numbers\n        });\n    }\n}\n")),(0,l.kt)("h3",{id:"arc-weak"},"Arc Weak"),(0,l.kt)("p",null,"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"Rc")," \u7c7b\u4f3c\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Arc")," \u4e5f\u6709\u4e00\u4e2a\u5bf9\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Weak")," \u7c7b\u578b\uff0c\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"std::sync::Weak")," \u5f15\u5165\u3002"),(0,l.kt)("p",null,"\u610f\u4e49\u4e0e\u7528\u6cd5\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"Rc Weak")," \u57fa\u672c\u4e00\u81f4\uff0c\u4e0d\u540c\u7684\u70b9\u662f\u8fd9\u662f\u591a\u7ebf\u7a0b\u7684\u7248\u672c\u3002\u6545\u4e0d\u518d\u8d58\u8ff0\u3002"),(0,l.kt)("h2",{id:"\u4e00\u4e2a\u4f8b\u5b50"},"\u4e00\u4e2a\u4f8b\u5b50"),(0,l.kt)("p",null,"\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u8868\u8ff0\u7684\u662f\u5982\u4f55\u5b9e\u73b0\u591a\u4e2a\u5bf9\u8c61\u540c\u65f6\u5f15\u7528\u53e6\u5916\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'use std::rc::Rc;\n\nstruct Owner {\n    name: String\n}\n\nstruct Gadget {\n    id: i32,\n    owner: Rc<Owner>\n}\n\nfn main() {\n    // Create a reference counted Owner.\n    let gadget_owner : Rc<Owner> = Rc::new(\n        Owner { name: String::from("Gadget Man") }\n    );\n\n    // Create Gadgets belonging to gadget_owner. To increment the reference\n    // count we clone the `Rc<T>` object.\n    let gadget1 = Gadget { id: 1, owner: gadget_owner.clone() };\n    let gadget2 = Gadget { id: 2, owner: gadget_owner.clone() };\n\n    drop(gadget_owner);\n\n    // Despite dropping gadget_owner, we\'re still able to print out the name\n    // of the Owner of the Gadgets. This is because we\'ve only dropped the\n    // reference count object, not the Owner it wraps. As long as there are\n    // other `Rc<T>` objects pointing at the same Owner, it will remain\n    // allocated. Notice that the `Rc<T>` wrapper around Gadget.owner gets\n    // automatically dereferenced for us.\n    println!("Gadget {} owned by {}", gadget1.id, gadget1.owner.name);\n    println!("Gadget {} owned by {}", gadget2.id, gadget2.owner.name);\n\n    // At the end of the method, gadget1 and gadget2 get destroyed, and with\n    // them the last counted references to our Owner. Gadget Man now gets\n    // destroyed as well.\n}\n')))}m.isMDXComponent=!0}}]);