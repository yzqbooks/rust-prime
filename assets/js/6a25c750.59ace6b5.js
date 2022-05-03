"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[3260],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),f=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=f(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=f(r),d=a,m=l["".concat(u,".").concat(d)]||l[d]||s[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var f=2;f<o;f++)i[f]=r[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},752:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={},u="FFI",f={unversionedId:"ffi/preface",id:"ffi/preface",title:"FFI",description:"FFI(Foreign Function Interface)\u662f\u7528\u6765\u4e0e\u5176\u5b83\u8bed\u8a00\u4ea4\u4e92\u7684\u63a5\u53e3\uff0c\u5728\u6709\u4e9b\u8bed\u8a00\u91cc\u9762\u79f0\u4e3a\u8bed\u8a00\u7ed1\u5b9a(language bindings)\uff0cJava \u91cc\u9762\u4e00\u822c\u79f0\u4e3a JNI(Java Native Interface) \u6216 JNA(Java Native Access)\u3002\u7531\u4e8e\u73b0\u5b9e\u4e2d\u5f88\u591a\u7a0b\u5e8f\u662f\u7531\u4e0d\u540c\u7f16\u7a0b\u8bed\u8a00\u5199\u7684\uff0c\u5fc5\u7136\u4f1a\u6d89\u53ca\u5230\u8de8\u8bed\u8a00\u8c03\u7528\uff0c\u6bd4\u5982 A \u8bed\u8a00\u5199\u7684\u51fd\u6570\u5982\u679c\u60f3\u5728 B \u8bed\u8a00\u91cc\u9762\u8c03\u7528\uff0c\u8fd9\u65f6\u4e00\u822c\u6709\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\uff1a\u4e00\u79cd\u662f\u5c06\u51fd\u6570\u505a\u6210\u4e00\u4e2a\u670d\u52a1\uff0c\u901a\u8fc7\u8fdb\u7a0b\u95f4\u901a\u4fe1(IPC)\u6216\u7f51\u7edc\u534f\u8bae\u901a\u4fe1(RPC, RESTful\u7b49)\uff1b\u53e6\u4e00\u79cd\u5c31\u662f\u76f4\u63a5\u901a\u8fc7 FFI \u8c03\u7528\u3002\u524d\u8005\u9700\u8981\u81f3\u5c11\u4e24\u4e2a\u72ec\u7acb\u7684\u8fdb\u7a0b\u624d\u80fd\u5b9e\u73b0\uff0c\u800c\u540e\u8005\u76f4\u63a5\u5c06\u5176\u5b83\u8bed\u8a00\u7684\u63a5\u53e3\u5185\u5d4c\u5230\u672c\u8bed\u8a00\u4e2d\uff0c\u6240\u4ee5\u8c03\u7528\u6548\u7387\u6bd4\u524d\u8005\u9ad8\u3002",source:"@site/docs/ffi/preface.md",sourceDirName:"ffi",slug:"/ffi/preface",permalink:"/rust-docs/docs/ffi/preface",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ffi/preface.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5c06Rust\u7f16\u8bd1\u6210\u5e93",permalink:"/rust-docs/docs/ffi/compiling-rust-to-lib"},next:{title:"\u6ce8\u91ca",permalink:"/rust-docs/docs/flow/comment"}},p={},s=[],l={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ffi"},"FFI"),(0,o.kt)("p",null,"FFI(",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Foreign_function_interface"},"Foreign Function Interface"),")\u662f\u7528\u6765\u4e0e\u5176\u5b83\u8bed\u8a00\u4ea4\u4e92\u7684\u63a5\u53e3\uff0c\u5728\u6709\u4e9b\u8bed\u8a00\u91cc\u9762\u79f0\u4e3a\u8bed\u8a00\u7ed1\u5b9a(language bindings)\uff0cJava \u91cc\u9762\u4e00\u822c\u79f0\u4e3a JNI(Java Native Interface) \u6216 JNA(Java Native Access)\u3002\u7531\u4e8e\u73b0\u5b9e\u4e2d\u5f88\u591a\u7a0b\u5e8f\u662f\u7531\u4e0d\u540c\u7f16\u7a0b\u8bed\u8a00\u5199\u7684\uff0c\u5fc5\u7136\u4f1a\u6d89\u53ca\u5230\u8de8\u8bed\u8a00\u8c03\u7528\uff0c\u6bd4\u5982 A \u8bed\u8a00\u5199\u7684\u51fd\u6570\u5982\u679c\u60f3\u5728 B \u8bed\u8a00\u91cc\u9762\u8c03\u7528\uff0c\u8fd9\u65f6\u4e00\u822c\u6709\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\uff1a\u4e00\u79cd\u662f\u5c06\u51fd\u6570\u505a\u6210\u4e00\u4e2a\u670d\u52a1\uff0c\u901a\u8fc7\u8fdb\u7a0b\u95f4\u901a\u4fe1(",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inter-process_communication"},"IPC"),")\u6216\u7f51\u7edc\u534f\u8bae\u901a\u4fe1(",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Remote_procedure_call"},"RPC"),", ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"RESTful"),"\u7b49)\uff1b\u53e6\u4e00\u79cd\u5c31\u662f\u76f4\u63a5\u901a\u8fc7 FFI \u8c03\u7528\u3002\u524d\u8005\u9700\u8981\u81f3\u5c11\u4e24\u4e2a\u72ec\u7acb\u7684\u8fdb\u7a0b\u624d\u80fd\u5b9e\u73b0\uff0c\u800c\u540e\u8005\u76f4\u63a5\u5c06\u5176\u5b83\u8bed\u8a00\u7684\u63a5\u53e3\u5185\u5d4c\u5230\u672c\u8bed\u8a00\u4e2d\uff0c\u6240\u4ee5\u8c03\u7528\u6548\u7387\u6bd4\u524d\u8005\u9ad8\u3002"),(0,o.kt)("p",null,'\u5f53\u524d\u7684\u7cfb\u7edf\u7f16\u7a0b\u9886\u57df\u5927\u90e8\u5206\u88ab C/C++ \u5360\u9886\uff0c\u800c Rust \u5b9a\u4f4d\u4e3a\u7cfb\u7edf\u7f16\u7a0b\u8bed\u8a00\uff0c\u5c11\u4e0d\u4e86\u4e0e\u73b0\u6709\u7684 C/C++ \u4ee3\u7801\u4ea4\u4e92\uff0c\u53e6\u5916\u4e3a\u4e86\u7ed9\u90a3\u4e9b"\u6162"\u811a\u672c\u8bed\u8a00\u8c03\u7528\uff0cRust \u5fc5\u7136\u5f97\u5bf9 FFI \u6709\u5b8c\u5584\u7684\u652f\u6301\uff0c\u672c\u7ae0\u6211\u4eec\u5c31\u6765\u8c08\u8c08 Rust \u7684 FFI \u7cfb\u7edf\u3002'))}d.isMDXComponent=!0}}]);