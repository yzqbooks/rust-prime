"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[7606],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8126:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],i={},p="Heap & Stack",u={unversionedId:"heap-stack/heap-stack",id:"heap-stack/heap-stack",title:"Heap & Stack",description:"\u7b80\u4ecb",source:"@site/docs/heap-stack/heap-stack.md",sourceDirName:"heap-stack",slug:"/heap-stack/",permalink:"/rust-docs/docs/heap-stack/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/heap-stack/heap-stack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/rust-docs/docs/generic/exercise/"},next:{title:"Rust for Linux",permalink:"/rust-docs/docs/install/install_rust_on_linux"}},c={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"Rust \u4e2d\u7684\u5806\u548c\u6808",id:"rust-\u4e2d\u7684\u5806\u548c\u6808",level:2},{value:"Box",id:"box",level:2}],d={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"heap--stack"},"Heap & Stack"),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"\u5806\u548c\u6808\u662f\u8ba1\u7b97\u673a\u91cc\u9762\u6700\u57fa\u672c\u7684\u6982\u5ff5\uff0c\u4e0d\u8fc7\u5982\u679c\u4e00\u76f4\u4f7f\u7528\u9ad8\u7ea7\u8bed\u8a00\u5982 Python/Ruby/PHP/Java \u7b49\u4e4b\u7c7b\u7684\u8bed\u8a00\u7684\u8bdd\uff0c\u53ef\u80fd\u5bf9\u5806\u548c\u6808\u5e76\u4e0d\u600e\u4e48\u7406\u89e3\uff0c\u5f53\u7136\u8fd9\u91cc\u7684\u6808(Stack)\u5e76\u4e0d\u662f\u6570\u636e\u7ed3\u6784\u91cc\u9762\u7684\u6982\u5ff5\uff0c\u800c\u662f\u8ba1\u7b97\u673a\u5bf9\u5185\u5b58\u7684\u4e00\u4e2a\u62bd\u8c61\u3002\u76f8\u6bd4\u800c\u8a00\uff0cC/C++/Rust \u8fd9\u4e9b\u8bed\u8a00\u5c31\u5fc5\u987b\u5bf9\u5806\u548c\u6808\u7684\u6982\u5ff5\u975e\u5e38\u4e86\u89e3\u624d\u80fd\u5199\u51fa\u6b63\u786e\u7684\u7a0b\u5e8f\uff0c\u4e4b\u6240\u4ee5\u6709\u8fd9\u6837\u7684\u533a\u522b\u662f\u56e0\u4e3a\u5b83\u4eec\u7684\u5185\u5b58\u7ba1\u7406\u65b9\u5f0f\u4e0d\u540c\uff0cPython \u4e4b\u7c7b\u7684\u8bed\u8a00\u7a0b\u5e8f\u8fd0\u884c\u65f6\u4f1a\u540c\u65f6\u4f1a\u8fd0\u884c\u5783\u573e\u56de\u6536\u5668\uff0c\u5783\u573e\u56de\u6536\u5668\u4e0e\u7528\u6237\u7a0b\u5e8f\u6216\u5e76\u884c\u6267\u884c\u6216\u4ea4\u9519\u6267\u884c\uff0c\u5783\u573e\u56de\u6536\u5668\u4f1a\u81ea\u52a8\u91ca\u653e\u4e0d\u518d\u4f7f\u7528\u7684\u5185\u5b58\u7a7a\u95f4\uff0c\u800c C/C++/Rust \u5219\u6ca1\u6709\u5783\u573e\u56de\u6536\u5668\u3002"),(0,a.kt)("p",null,"\u64cd\u4f5c\u7cfb\u7edf\u4f1a\u5c06\u7269\u7406\u5185\u5b58\u6620\u5c04\u6210\u865a\u62df\u5730\u5740\u7a7a\u95f4\uff0c\u7a0b\u5e8f\u5728\u542f\u52a8\u65f6\u770b\u5230\u7684\u865a\u62df\u5730\u5740\u7a7a\u95f4\u662f\u4e00\u5757\u5b8c\u6574\u8fde\u7eed\u7684\u5185\u5b58\u3002"),(0,a.kt)("p",null,"\u6808\u5185\u5b58\u4ece\u9ad8\u4f4d\u5730\u5740\u5411\u4e0b\u589e\u957f\uff0c\u4e14\u6808\u5185\u5b58\u5206\u914d\u662f\u8fde\u7eed\u7684\uff0c\u4e00\u822c\u64cd\u4f5c\u7cfb\u7edf\u5bf9\u6808\u5185\u5b58\u5927\u5c0f\u662f\u6709\u9650\u5236\u7684\uff0cLinux/Unix \u7c7b\u7cfb\u7edf\u4e0a\u9762\u53ef\u4ee5\u901a\u8fc7 ulimit \u8bbe\u7f6e\u6700\u5927\u6808\u7a7a\u95f4\u5927\u5c0f\uff0c\u6240\u4ee5 C \u8bed\u8a00\u4e2d\u65e0\u6cd5\u521b\u5efa\u4efb\u610f\u957f\u5ea6\u7684\u6570\u7ec4\u3002\u5728Rust\u91cc\uff0c\u51fd\u6570\u8c03\u7528\u65f6\u4f1a\u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u6808\u7a7a\u95f4\uff0c\u8c03\u7528\u7ed3\u675f\u540e Rust \u4f1a\u8ba9\u8fd9\u4e2a\u6808\u7a7a\u95f4\u91cc\u7684\u5bf9\u8c61\u81ea\u52a8\u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"Drop")," \u6d41\u7a0b\uff0c\u6700\u540e\u6808\u9876\u6307\u9488\u81ea\u52a8\u79fb\u52a8\u5230\u4e0a\u4e00\u4e2a\u8c03\u7528\u6808\u9876\uff0c\u65e0\u9700\u7a0b\u5e8f\u5458\u624b\u52a8\u5e72\u9884\uff0c\u56e0\u800c\u6808\u5185\u5b58\u7533\u8bf7\u548c\u91ca\u653e\u662f\u975e\u5e38\u9ad8\u6548\u7684\u3002"),(0,a.kt)("p",null,"\u76f8\u5bf9\u5730\uff0c\u5806\u4e0a\u5185\u5b58\u5219\u662f\u4ece\u4f4e\u4f4d\u5730\u5740\u5411\u4e0a\u589e\u957f\uff0c\u5806\u5185\u5b58\u901a\u5e38\u53ea\u53d7\u7269\u7406\u5185\u5b58\u9650\u5236\uff0c\u800c\u4e14\u901a\u5e38\u662f\u4e0d\u8fde\u7eed\u7684\uff0c\u4e00\u822c\u7531\u7a0b\u5e8f\u5458\u624b\u52a8\u7533\u8bf7\u548c\u91ca\u653e\u7684\uff0c\u5982\u679c\u60f3\u7533\u8bf7\u4e00\u5757\u8fde\u7eed\u5185\u5b58\uff0c\u5219\u64cd\u4f5c\u7cfb\u7edf\u9700\u8981\u5728\u5806\u4e2d\u67e5\u627e\u4e00\u5757\u672a\u4f7f\u7528\u7684\u6ee1\u8db3\u5927\u5c0f\u7684\u8fde\u7eed\u5185\u5b58\u7a7a\u95f4\uff0c\u6545\u5176\u6548\u7387\u6bd4\u6808\u8981\u4f4e\u5f88\u591a\uff0c\u5c24\u5176\u662f\u5806\u4e0a\u5982\u679c\u6709\u5927\u91cf\u4e0d\u8fde\u7eed\u5185\u5b58\u65f6\u3002\u53e6\u5916\u5185\u5b58\u4f7f\u7528\u5b8c\u4e5f\u5fc5\u987b\u7531\u7a0b\u5e8f\u5458\u624b\u52a8\u91ca\u653e\uff0c\u4e0d\u7136\u5c31\u4f1a\u51fa\u73b0\u5185\u5b58\u6cc4\u6f0f\uff0c\u5185\u5b58\u6cc4\u6f0f\u5bf9\u9700\u8981\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u7a0b\u5e8f(\u4f8b\u5982\u5b88\u62a4\u8fdb\u7a0b)\u5f71\u54cd\u975e\u5e38\u5927\u3002"),(0,a.kt)("h2",{id:"rust-\u4e2d\u7684\u5806\u548c\u6808"},"Rust \u4e2d\u7684\u5806\u548c\u6808"),(0,a.kt)("p",null,"\u7531\u4e8e\u51fd\u6570\u6808\u5728\u51fd\u6570\u6267\u884c\u5b8c\u540e\u4f1a\u9500\u6bc1\uff0c\u6240\u4ee5\u6808\u4e0a\u5b58\u50a8\u7684\u53d8\u91cf\u4e0d\u80fd\u5728\u51fd\u6570\u4e4b\u95f4\u4f20\u9012\uff0c\u8fd9\u4e5f\u610f\u5473\u7740\u51fd\u6570\u6ca1\u6cd5\u8fd4\u56de\u6808\u4e0a\u53d8\u91cf\u7684\u5f15\u7528\uff0c\u800c\u8fd9\u901a\u5e38\u662f C/C++ \u65b0\u624b\u5e38\u72af\u7684\u9519\u8bef\u3002\u800c Rust \u4e2d\u7f16\u8bd1\u5668\u5219\u4f1a\u68c0\u67e5\u51fa\u8fd9\u79cd\u9519\u8bef\uff0c\u9519\u8bef\u63d0\u793a\u4e00\u822c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"xxx does not live long enough"),"\uff0c\u770b\u4e0b\u9762\u4e00\u4e2a\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let b = foo("world");\n    println!("{}", b);\n}\n\nfn foo(x: &str) -> &str {\n    let a = "Hello, ".to_string() + x;\n    &a\n}\n')),(0,a.kt)("p",null,"\u4e4b\u6240\u4ee5\u8fd9\u6837\u5199\uff0c\u5f88\u591a\u4eba\u89c9\u5f97\u53ef\u4ee5\u76f4\u63a5\u62f7\u8d1d\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," \u7684\u5f15\u7528\u4ece\u800c\u907f\u514d\u62f7\u8d1d\u6574\u4e2a\u5b57\u7b26\u4e32\uff0c\u7136\u800c\u5f97\u5230\u7684\u7ed3\u679c\u5374\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"a does not live long enough")," \u7684\u7f16\u8bd1\u9519\u8bef\u3002\u56e0\u4e3a\u5f15\u7528\u4e86\u4e00\u4e2a\u51fd\u6570\u6808\u4e2d\u4e34\u65f6\u521b\u5efa\u7684\u53d8\u91cf\uff0c\u51fd\u6570\u6808\u5728\u51fd\u6570\u8c03\u7528\u7ed3\u675f\u540e\u4f1a\u9500\u6bc1\uff0c\u8fd9\u6837\u8fd4\u56de\u7684\u5f15\u7528\u5c31\u53d8\u5f97\u6beb\u65e0\u610f\u4e49\u4e86\uff0c\u6307\u5411\u4e86\u4e00\u4e2a\u5e76\u4e0d\u5b58\u5728\u7684\u53d8\u91cf\u3002\u76f8\u5bf9\u4e8e C/C++ \u800c\u8a00\uff0c\u4f7f\u7528 Rust \u5c31\u4f1a\u5e78\u8fd0\u5f88\u591a\uff0c\u56e0\u4e3a C/C++ \u4e2d\u5199\u51fa\u4e0a\u9762\u90a3\u6837\u7684\u7a0b\u5e8f\uff0c\u7f16\u8bd1\u5668\u4f1a\u9ed8\u9ed8\u5730\u8ba9\u4f60\u901a\u8fc7\u76f4\u5230\u8fd0\u884c\u65f6\u624d\u4f1a\u7ed9\u4f60\u62a5\u9519\u3002"),(0,a.kt)("p",null,"\u5176\u5b9e\u7531\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," \u672c\u8eab\u662f String \u7c7b\u578b\uff0c\u662f\u4f7f\u7528\u5806\u6765\u5b58\u50a8\u7684\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u8fd4\u56de\uff0c\u5728\u51fd\u6570\u8fd4\u56de\u65f6\u51fd\u6570\u6808\u9500\u6bc1\u540e\u4f9d\u7136\u5b58\u5728\u3002\u540c\u65f6 Rust \u4e2d\u4e0b\u9762\u7684\u4ee3\u7801\u5b9e\u9645\u4e0a\u4e5f\u53ea\u662f\u6d45\u62f7\u8d1d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let b = foo("world");\n    println!("{}", b);\n}\n\nfn foo(x: &str) -> String {\n    let a = "Hello, ".to_string() + x;\n    a\n}\n')),(0,a.kt)("p",null,"Rust \u9ed8\u8ba4\u4f7f\u7528\u6808\u6765\u5b58\u50a8\u53d8\u91cf\uff0c\u800c\u6808\u4e0a\u5185\u5b58\u5206\u914d\u662f\u8fde\u7eed\u7684\uff0c\u6240\u4ee5\u5fc5\u987b\u5728\u7f16\u8bd1\u4e4b\u524d\u4e86\u89e3\u53d8\u91cf\u5360\u7528\u7684\u5185\u5b58\u7a7a\u95f4\u5927\u5c0f\uff0c\u7f16\u8bd1\u5668\u624d\u80fd\u5408\u7406\u5b89\u6392\u5185\u5b58\u5e03\u5c40\u3002"),(0,a.kt)("h2",{id:"box"},"Box"),(0,a.kt)("p",null,"C \u91cc\u9762\u662f\u901a\u8fc7 malloc/free \u624b\u52a8\u7ba1\u7406\u5806\u4e0a\u5185\u5b58\u7a7a\u95f4\u7684\uff0c\u800c Rust \u5219\u6709\u591a\u79cd\u65b9\u5f0f\uff0c\u5176\u4e2d\u6700\u5e38\u7528\u7684\u4e00\u79cd\u5c31\u662f Box,\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Box::new()")," \u53ef\u4ee5\u5728\u5806\u4e0a\u7533\u8bf7\u4e00\u5757\u5185\u5b58\u7a7a\u95f4\uff0c\u4e0d\u50cf C \u91cc\u9762\u4e00\u6837\u5806\u4e0a\u7a7a\u95f4\u9700\u8981\u624b\u52a8\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"free")," \u91ca\u653e\uff0cRust \u4e2d\u662f\u5728\u7f16\u8bd1\u671f\u7f16\u8bd1\u5668\u501f\u52a9 lifetime \u5bf9\u5806\u5185\u5b58\u751f\u547d\u671f\u8fdb\u884c\u5206\u6790\uff0c\u5728\u751f\u547d\u671f\u7ed3\u675f\u65f6\u81ea\u52a8\u63d2\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"free"),"\u3002\u5f53\u524d  Rust \u5e95\u5c42\u5373 Box \u80cc\u540e\u662f\u8c03\u7528 jemalloc \u6765\u505a\u5185\u5b58\u7ba1\u7406\u7684\uff0c\u6240\u4ee5\u5806\u4e0a\u7a7a\u95f4\u662f\u4e0d\u9700\u8981\u7a0b\u5e8f\u5458\u624b\u52a8\u53bb\u7ba1\u7406\u91ca\u653e\u7684\u3002\u5f88\u591a\u65f6\u5019\u4f60\u88ab\u7f16\u8bd1\u5668\u8650\u5f97\u6b7b\u53bb\u6d3b\u6765\u65f6\uff0c\u90a3\u4e9b ",(0,a.kt)("inlineCode",{parentName:"p"},"borrow"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"move"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lifetime")," \u9519\u8bef\u5176\u5b9e\u5c31\u662f\u7f16\u8bd1\u5668\u5728\u6559\u4f60\u8ba4\u8bc6\u5185\u5b58\u5e03\u5c40\uff0c\u6559\u4f60\u7528 lifetime \u89c4\u5219\u53bb\u63a7\u5236\u5185\u5b58\u3002\u8fd9\u5957\u89c4\u5219\u8bf4\u96be\u4e0d\u96be\uff0c\u8bf4\u7b80\u5355\u4e5f\u4e0d\u7b80\u5355\uff0c\u4ee5\u524d\u7528\u522b\u7684\u8bed\u8a00\u5199\u7a0b\u5e8f\u65f6\u5bf9\u5185\u5b58\u4e0d\u5173\u5fc3\u7684\uff0c\u521a\u5199\u8d77\u6765\u53ef\u80fd\u771f\u7684\u4f1a\u88ab\u8650\u5f97\u6b7b\u53bb\u6d3b\u6765\uff0c\u4f46\u662f\u4e00\u65e6\u719f\u6089\u8fd9\u5957\u89c4\u5219\uff0c\u5bf9\u5185\u5b58\u5e03\u5c40\u638c\u63e1\u6e05\u695a\u540e\uff0c\u501f\u52a9\u7f16\u8bd1\u5668\u7684\u63d0\u793a\u5199\u8d77\u7a0b\u5e8f\u6765\u5c31\u4f1a\u5982\u9c7c\u5f97\u6c34\uff0c\u8fd9\u5957\u89c4\u5219\u662f\u7406\u8bba\u754c\u7814\u7a76\u7684\u6210\u679c\u5728Rust\u7f16\u8bd1\u5668\u4e0a\u7684\u5b9e\u8df5\u3002"),(0,a.kt)("p",null,'\u5927\u591a\u6570\u5e26 GC \u7684\u9762\u5411\u5bf9\u8c61\u8bed\u8a00\u91cc\u9762\u7684\u5bf9\u8c61\u90fd\u662f\u501f\u52a9 box \u6765\u5b9e\u73b0\u7684\uff0c\u6bd4\u5982\u5e38\u89c1\u7684\u52a8\u6001\u8bed\u8a00 Python/Ruby/JavaScript \u7b49\uff0c\u5176\u5ba3\u79f0\u7684"\u4e00\u5207\u7686\u5bf9\u8c61(Everything is an object)"\uff0c\u91cc\u9762\u6240\u8c13\u7684\u5bf9\u8c61\u57fa\u672c\u4e0a\u90fd\u662f boxed value\u3002'),(0,a.kt)("p",null,"boxed \u503c\u76f8\u5bf9\u4e8e unboxed\uff0c\u5185\u5b58\u5360\u7528\u7a7a\u95f4\u4f1a\u5927\u4e9b\uff0c\u540c\u65f6\u8bbf\u95ee\u503c\u7684\u65f6\u5019\u4e5f\u9700\u8981\u5148\u8fdb\u884c unbox\uff0c\u5373\u5bf9\u6307\u9488\u8fdb\u884c\u89e3\u5f15\u7528\u518d\u83b7\u53d6\u771f\u6b63\u5b58\u50a8\u7684\u503c\uff0c\u6240\u4ee5\u5185\u5b58\u8bbf\u95ee\u5f00\u9500\u4e5f\u4f1a\u5927\u4e9b\u3002\u65e2\u7136 boxed \u503c\u65e2\u8d39\u7a7a\u95f4\u53c8\u8d39\u65f6\u95f4\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u8981\u8fd9\u4e48\u505a\u5462\uff1f\u56e0\u4e3a\u901a\u8fc7 box\uff0c\u6240\u6709\u5bf9\u8c61\u770b\u8d77\u6765\u5c31\u50cf\u662f\u4ee5\u76f8\u540c\u5927\u5c0f\u5b58\u50a8\u7684\uff0c\u56e0\u4e3a\u53ea\u9700\u8981\u5b58\u50a8\u4e00\u4e2a\u6307\u9488\u5c31\u591f\u4e86\uff0c\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u540c\u7b49\u770b\u5f85\u5404\u79cd\u503c\uff0c\u800c\u4e0d\u7528\u53bb\u7ba1\u5b9e\u9645\u5b58\u50a8\u662f\u591a\u5927\u7684\u503c\uff0c\u5982\u4f55\u7533\u8bf7\u548c\u91ca\u653e\u76f8\u5e94\u8d44\u6e90\u3002"),(0,a.kt)("p",null,"Box \u662f\u5806\u4e0a\u5206\u914d\u7684\u5185\u5b58\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Box::new()")," \u4f1a\u521b\u5efa\u4e00\u4e2a\u5806\u7a7a\u95f4\u5e76\u8fd4\u56de\u4e00\u4e2a\u6307\u5411\u5806\u7a7a\u95f4\u7684\u6307\u9488"),(0,a.kt)("p",null,"nightly \u7248\u672c\u4e2d\u5f15\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"box")," \u5173\u952e\u8bcd\uff0c\u53ef\u4ee5\u7528\u6765\u53d6\u4ee3 ",(0,a.kt)("inlineCode",{parentName:"p"},"Box::new()")," \u7533\u8bf7\u4e00\u4e2a\u5806\u7a7a\u95f4\uff0c\u4e5f\u53ef\u4ee5\u7528\u5728\u6a21\u5f0f\u5339\u914d\u4e0a\u9762"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![feature(box_syntax, box_patterns)]\nfn main() {\n   let boxed = Some(box 5);\n   match boxed {\n       Some(box unboxed) => println!("Some {}", unboxed),\n       None => println!("None"),\n   }\n}\n')),(0,a.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5bf9\u6bd4\u4e00\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<i32>")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<Box<i32>>")," \u5185\u5b58\u5e03\u5c40\uff0c\u8fd9\u4e24\u4e2a\u56fe\u6765\u81ea ",(0,a.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/21066133/what-is-the-difference-between-veci32-and-vecboxi32/21067103#21067103"},"Stack Overflow"),"\uff0c\u4ece\u8fd9\u4e24\u5f20\u5185\u5b58\u5206\u5e03\u56fe\u53ef\u4ee5\u6e05\u695a\u76f4\u89c2\u5730\u770b\u51fa Box \u662f\u5982\u4f55\u5b58\u50a8\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Vec<i32>\n\n(stack)    (heap)\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u250c\u2500\u2500\u2500\u2510\n\u2502 vec1 \u2502\u2500\u2500\u2192\u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u251c\u2500\u2500\u2500\u2524\n           \u2502 2 \u2502\n           \u251c\u2500\u2500\u2500\u2524\n           \u2502 3 \u2502\n           \u251c\u2500\u2500\u2500\u2524\n           \u2502 4 \u2502\n           \u2514\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Vec<Box<i32>>\n\n(stack)    (heap)   \u250c\u2500\u2500\u2500\u2510\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u250c\u2500\u2500\u2500\u2510 \u250c\u2500\u2192\u2502 1 \u2502\n\u2502 vec2 \u2502\u2500\u2500\u2192\u2502   \u2502\u2500\u2518  \u2514\u2500\u2500\u2500\u2518\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u251c\u2500\u2500\u2500\u2524    \u250c\u2500\u2500\u2500\u2510\n           \u2502   \u2502\u2500\u2500\u2500\u2192\u2502 2 \u2502\n           \u251c\u2500\u2500\u2500\u2524    \u2514\u2500\u2500\u2500\u2518\n           \u2502   \u2502\u2500\u2510  \u250c\u2500\u2500\u2500\u2510\n           \u251c\u2500\u2500\u2500\u2524 \u2514\u2500\u2192\u2502 3 \u2502\n           \u2502   \u2502\u2500\u2510  \u2514\u2500\u2500\u2500\u2518\n           \u2514\u2500\u2500\u2500\u2518 \u2502  \u250c\u2500\u2500\u2500\u2510\n                 \u2514\u2500\u2192\u2502 4 \u2502\n                    \u2514\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u4e00\u4e9b\u8bed\u8a00\u91cc\u4f1a\u6709\u770b\u8d77\u6765\u65e2\u50cf\u6570\u7ec4\u53c8\u50cf\u5217\u8868\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4f8b\u5982 python \u4e2d\u7684 List\uff0c\u5176\u5b9e\u5c31\u662f\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<Box<i32>>")," \u7c7b\u4f3c\uff0c\u53ea\u662f\u628a i32 \u6362\u6210\u4efb\u610f\u7c7b\u578b\uff0c\u5c31\u64cd\u4f5c\u6548\u7387\u800c\u8a00\u6bd4\u5355\u7eaf\u7684 List \u9ad8\u6548\uff0c\u540c\u65f6\u53c8\u6bd4\u6570\u7ec4\u4f7f\u7528\u66f4\u7075\u6d3b\u3002"),(0,a.kt)("p",null,"\u4e00\u822c\u800c\u8a00\uff0c\u5728\u7f16\u8bd1\u671f\u95f4\u4e0d\u80fd\u786e\u5b9a\u5927\u5c0f\u7684\u6570\u636e\u7c7b\u578b\u90fd\u9700\u8981\u4f7f\u7528\u5806\u4e0a\u5185\u5b58\uff0c\u56e0\u4e3a\u7f16\u8bd1\u5668\u65e0\u6cd5\u5728\u6808\u4e0a\u5206\u914d \u7f16\u8bd1\u671f\u672a\u77e5\u5927\u5c0f \u7684\u5185\u5b58\uff0c\u6240\u4ee5\u8bf8\u5982 String, Vec \u8fd9\u4e9b\u7c7b\u578b\u7684\u5185\u5b58\u5176\u5b9e\u662f\u88ab\u5206\u914d\u5728\u5806\u4e0a\u7684\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u8f7b\u677e\u7684\u5c06\u4e00\u4e2a Vec move \u51fa\u4f5c\u7528\u57df\u800c\u4e0d\u5fc5\u62c5\u5fc3\u6d88\u8017\uff0c\u56e0\u4e3a\u6570\u636e\u5b9e\u9645\u4e0a\u4e0d\u4f1a\u88ab\u590d\u5236\u3002"),(0,a.kt)("p",null,"\u53e6\u5916,\u9700\u8981\u4ece\u51fd\u6570\u4e2d\u8fd4\u56de\u4e00\u4e2a\u6d45\u62f7\u8d1d\u7684\u53d8\u91cf\u65f6\u4e5f\u9700\u8981\u4f7f\u7528\u5806\u5185\u5b58\u800c\u4e0d\u80fd\u76f4\u63a5\u8fd4\u56de\u4e00\u4e2a\u6307\u5411\u51fd\u6570\u5185\u90e8\u5b9a\u4e49\u53d8\u91cf\u7684\u5f15\u7528\u3002"))}m.isMDXComponent=!0}}]);