"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[628],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(t),k=i,m=d["".concat(o,".").concat(k)]||d[k]||s[k]||r;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8545:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),l=["components"],p={},o="\u8c03\u7528ffi\u51fd\u6570",u={unversionedId:"ffi/calling-ffi-function",id:"ffi/calling-ffi-function",title:"\u8c03\u7528ffi\u51fd\u6570",description:"\u4e0b\u6587\u63d0\u5230\u7684ffi\u7686\u6307cffi\u3002",source:"@site/docs/ffi/calling-ffi-function.md",sourceDirName:"ffi",slug:"/ffi/calling-ffi-function",permalink:"/rust-docs/docs/ffi/calling-ffi-function",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ffi/calling-ffi-function.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"17.\u9519\u8bef\u5904\u7406",permalink:"/rust-docs/docs/error-handling/option-result"},next:{title:"\u5c06Rust\u7f16\u8bd1\u6210\u5e93",permalink:"/rust-docs/docs/ffi/compiling-rust-to-lib"}},c={},s=[{value:"Getting Start",id:"getting-start",level:2},{value:"\u5f15\u5165libc\u5e93",id:"\u5f15\u5165libc\u5e93",level:3},{value:"\u58f0\u660e\u4f60\u7684<code>ffi</code>\u51fd\u6570",id:"\u58f0\u660e\u4f60\u7684ffi\u51fd\u6570",level:3},{value:"\u8c03\u7528ffi\u51fd\u6570",id:"\u8c03\u7528ffi\u51fd\u6570-1",level:3},{value:"\u5c01\u88c5<code>unsafe</code>\uff0c\u66b4\u9732\u5b89\u5168\u63a5\u53e3",id:"\u5c01\u88c5unsafe\u66b4\u9732\u5b89\u5168\u63a5\u53e3",level:3},{value:"\u6570\u636e\u7ed3\u6784\u5bf9\u5e94",id:"\u6570\u636e\u7ed3\u6784\u5bf9\u5e94",level:2},{value:"\u7ed3\u6784\u4f53",id:"\u7ed3\u6784\u4f53",level:3},{value:"Union",id:"union",level:3},{value:"Enum",id:"enum",level:3},{value:"\u56de\u8c03\u51fd\u6570",id:"\u56de\u8c03\u51fd\u6570",level:3},{value:"\u5b57\u7b26\u4e32",id:"\u5b57\u7b26\u4e32",level:3},{value:"CStr",id:"cstr",level:4},{value:"CString",id:"cstring",level:4},{value:"\u4e0d\u900f\u660e\u7ed3\u6784\u4f53",id:"\u4e0d\u900f\u660e\u7ed3\u6784\u4f53",level:3},{value:"\u7a7a\u6307\u9488",id:"\u7a7a\u6307\u9488",level:3},{value:"\u5185\u5b58\u5b89\u5168",id:"\u5185\u5b58\u5b89\u5168",level:2},{value:"\u6790\u6784\u95ee\u9898",id:"\u6790\u6784\u95ee\u9898",level:3},{value:"\u53ef\u7a7a\u6307\u9488\u4f18\u5316",id:"\u53ef\u7a7a\u6307\u9488\u4f18\u5316",level:3},{value:"ownership\u5904\u7406",id:"ownership\u5904\u7406",level:3},{value:"panic",id:"panic",level:3},{value:"\u9759\u6001\u5e93/\u52a8\u6001\u5e93",id:"\u9759\u6001\u5e93\u52a8\u6001\u5e93",level:2},{value:"\u8c03\u7528\u7ea6\u5b9a",id:"\u8c03\u7528\u7ea6\u5b9a",level:2},{value:"bindgen",id:"bindgen",level:2}],d={toc:s};function k(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8c03\u7528ffi\u51fd\u6570"},"\u8c03\u7528ffi\u51fd\u6570"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0b\u6587\u63d0\u5230\u7684ffi\u7686\u6307cffi\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rust"),"\u4f5c\u4e3a\u4e00\u95e8",(0,r.kt)("strong",{parentName:"p"},"\u7cfb\u7edf"),"\u7ea7\u8bed\u8a00\uff0c\u81ea\u5e26\u5bf9ffi\u8c03\u7528\u7684\u652f\u6301\u3002"),(0,r.kt)("h2",{id:"getting-start"},"Getting Start"),(0,r.kt)("h3",{id:"\u5f15\u5165libc\u5e93"},"\u5f15\u5165libc\u5e93"),(0,r.kt)("p",null,"\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"cffi"),"\u7684\u6570\u636e\u7c7b\u578b\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"rust"),"\u4e0d\u5b8c\u5168\u76f8\u540c\uff0c\u6211\u4eec\u9700\u8981\u5f15\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"libc"),"\u5e93\u6765\u8868\u8fbe\u5bf9\u5e94",(0,r.kt)("inlineCode",{parentName:"p"},"ffi"),"\u51fd\u6570\u4e2d\u7684\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u884c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nlibc = "0.2.9"\n')),(0,r.kt)("p",null,"\u5728\u4f60\u7684rs\u6587\u4ef6\u4e2d\u5f15\u5165\u5e93:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"extern crate libc\n")),(0,r.kt)("p",null,"\u5728\u4ee5\u524d",(0,r.kt)("inlineCode",{parentName:"p"},"libc"),"\u5e93\u662f\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"rust"),"\u4e00\u8d77\u53d1\u5e03\u7684\uff0c\u540e\u6765libc\u88ab\u79fb\u5165\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"crates.io"),"\u901a\u8fc7cargo\u5b89\u88c5\u3002"),(0,r.kt)("h3",{id:"\u58f0\u660e\u4f60\u7684ffi\u51fd\u6570"},"\u58f0\u660e\u4f60\u7684",(0,r.kt)("inlineCode",{parentName:"h3"},"ffi"),"\u51fd\u6570"),(0,r.kt)("p",null,"\u5c31\u50cf",(0,r.kt)("inlineCode",{parentName:"p"},"c\u8bed\u8a00"),"\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"p"},"#include"),"\u58f0\u660e\u4e86\u5bf9\u5e94\u51fd\u6570\u7684\u5934\u6587\u4ef6\u4e00\u6837\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"rust"),"\u4e2d\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"ffi"),"\u4e5f\u9700\u8981\u5bf9\u5bf9\u5e94\u51fd\u6570\u8fdb\u884c\u58f0\u660e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use libc::c_int;\nuse libc::c_void;\nuse libc::size_t;\n\n#[link(name = "yourlib")]\nextern {\n    fn your_func(arg1: c_int, arg2: *mut c_void) -> size_t; // \u58f0\u660effi\u51fd\u6570\n    fn your_func2(arg1: c_int, arg2: *mut c_void) -> size_t;\n    static ffi_global: c_int; // \u58f0\u660effi\u5168\u5c40\u53d8\u91cf\n}\n')),(0,r.kt)("p",null,"\u58f0\u660e\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"ffi"),"\u5e93\u9700\u8981\u4e00\u4e2a\u6807\u8bb0\u6709",(0,r.kt)("inlineCode",{parentName:"p"},'#[link(name = "yourlib")]'),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"extern"),"\u5757\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\u4e3a\u5bf9\u5e94\u7684\u5e93(",(0,r.kt)("inlineCode",{parentName:"p"},"so"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"dll"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"dylib"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"a"),")\u7684\u540d\u5b57\u3002\n\u5982\uff1a\u5982\u679c\u4f60\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"p"},"snappy"),"\u5e93(",(0,r.kt)("inlineCode",{parentName:"p"},"libsnappy.so"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"libsnappy.dll"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"libsnappy.dylib"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"libsnappy.a"),"), \u5219\u5bf9\u5e94\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"snappy"),"\u3002\n\u5728\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"extern\u5757"),"\u4e2d\u4f60\u53ef\u4ee5\u58f0\u660e\u4efb\u610f\u591a\u7684\u51fd\u6570\u548c\u53d8\u91cf\u3002"),(0,r.kt)("h3",{id:"\u8c03\u7528ffi\u51fd\u6570-1"},"\u8c03\u7528ffi\u51fd\u6570"),(0,r.kt)("p",null,"\u58f0\u660e\u5b8c\u6210\u540e\u5c31\u53ef\u4ee5\u8fdb\u884c\u8c03\u7528\u4e86\u3002\n\u7531\u4e8e\u6b64\u51fd\u6570\u6765\u81ea\u5916\u90e8\u7684c\u5e93\uff0c\u6240\u4ee5rust\u5e76\u4e0d\u80fd\u4fdd\u8bc1\u8be5\u51fd\u6570\u7684\u5b89\u5168\u6027\u3002\u56e0\u6b64\uff0c\u8c03\u7528\u4efb\u4f55\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"ffi"),"\u51fd\u6570\u9700\u8981\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"unsafe"),"\u5757\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let result: size_t = unsafe {\n    your_func(1 as c_int, Box::into_raw(Box::new(3)) as *mut c_void)\n};\n")),(0,r.kt)("h3",{id:"\u5c01\u88c5unsafe\u66b4\u9732\u5b89\u5168\u63a5\u53e3"},"\u5c01\u88c5",(0,r.kt)("inlineCode",{parentName:"h3"},"unsafe"),"\uff0c\u66b4\u9732\u5b89\u5168\u63a5\u53e3"),(0,r.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u5e93\u4f5c\u8005\uff0c\u5bf9\u5916\u66b4\u9732\u4e0d\u5b89\u5168\u63a5\u53e3\u662f\u4e00\u79cd\u975e\u5e38\u4e0d\u5408\u683c\u7684\u505a\u6cd5\u3002\u5728\u505ac\u5e93\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"rust binding"),"\u65f6\uff0c\u6211\u4eec\u505a\u7684\u6700\u591a\u7684\u5c06\u662f\u5c06\u4e0d\u5b89\u5168\u7684c\u63a5\u53e3\u5c01\u88c5\u6210\u4e00\u4e2a\u5b89\u5168\u63a5\u53e3\u3002\n\u901a\u5e38\u505a\u6cd5\u662f\uff1a\u5728\u4e00\u4e2a\u53eb",(0,r.kt)("inlineCode",{parentName:"p"},"ffi.rs"),"\u4e4b\u7c7b\u7684\u6587\u4ef6\u4e2d\u5199\u4e0a\u6240\u6709\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"extern\u5757"),"\u7528\u4ee5\u58f0\u660effi\u51fd\u6570\u3002\u5728\u4e00\u4e2a\u53eb",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.rs"),"\u4e4b\u7c7b\u7684\u6587\u4ef6\u4e2d\u8fdb\u884c\u5305\u88c5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// ffi.rs\n#[link(name = "yourlib")]\nextern {\n    fn your_func(arg1: c_int, arg2: *mut c_void) -> size_t;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// wrapper.rs\nfn your_func_wrapper(arg1: i32, arg2: &mut i32) -> isize {\n    unsafe { your_func(1 as c_int, Box::into_raw(Box::new(3)) as *mut c_void) } as isize\n}\n")),(0,r.kt)("p",null,"\u5bf9\u5916\u66b4\u9732(pub use) ",(0,r.kt)("inlineCode",{parentName:"p"},"your_func_wrapper"),"\u51fd\u6570\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"\u6570\u636e\u7ed3\u6784\u5bf9\u5e94"},"\u6570\u636e\u7ed3\u6784\u5bf9\u5e94"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"libc"),"\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u5f88\u591a\u539f\u59cb\u6570\u636e\u7c7b\u578b\uff0c\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"c_int"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"c_float"),"\u7b49\uff0c\u4f46\u662f\u5bf9\u4e8e\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u5982\u7ed3\u6784\u4f53\uff0c\u5219\u9700\u8981\u6211\u4eec\u81ea\u884c\u5b9a\u4e49\u3002"),(0,r.kt)("h3",{id:"\u7ed3\u6784\u4f53"},"\u7ed3\u6784\u4f53"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rust"),"\u4e2d\u7ed3\u6784\u4f53\u9ed8\u8ba4\u7684\u5185\u5b58\u8868\u793a\u548cc\u5e76\u4e0d\u517c\u5bb9\u3002\u5982\u679c\u8981\u5c06\u7ed3\u6784\u4f53\u4f20\u7ed9ffi\u51fd\u6570\uff0c\u8bf7\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"rust"),"\u7684\u7ed3\u6784\u4f53\u6253\u4e0a\u6807\u8bb0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[repr(C)]\nstruct RustObject {\n    a: c_int,\n    // other members\n}\n")),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u5982\u679c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"#[repr(C, packed)]"),"\u5c06\u4e0d\u4e3a\u6b64\u7ed3\u6784\u4f53\u586b\u5145\u7a7a\u4f4d\u7528\u4ee5\u5bf9\u9f50\u3002"),(0,r.kt)("h3",{id:"union"},"Union"),(0,r.kt)("p",null,"\u6bd4\u8f83\u9057\u61be\u7684\u662f\uff0crust\u5230\u76ee\u524d\u4e3a\u6b62(2016-03-31)\u8fd8\u6ca1\u6709\u4e00\u4e2a\u5f88\u597d\u7684\u5e94\u5bf9c\u7684union\u7684\u65b9\u6cd5\u3002\u53ea\u80fd\u901a\u8fc7\u4e00\u4e9bhack\u6765\u5b9e\u73b0\u3002(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rfcs/pull/1444"},"\u5bf9\u5e94rfc"),")"),(0,r.kt)("h3",{id:"enum"},"Enum"),(0,r.kt)("p",null,"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"struct"),"\u4e00\u6837\uff0c\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"#[repr(C)]"),"\u6807\u8bb0\u5373\u53ef\u3002"),(0,r.kt)("h3",{id:"\u56de\u8c03\u51fd\u6570"},"\u56de\u8c03\u51fd\u6570"),(0,r.kt)("p",null,"\u548cc\u5e93\u6253\u4ea4\u9053\u65f6\uff0c\u6211\u4eec\u7ecf\u5e38\u4f1a\u9047\u5230\u4e00\u4e2a\u51fd\u6570\u63a5\u53d7\u53e6\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u7684\u60c5\u51b5\u3002\u5c06\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"rust"),"\u51fd\u6570\u8f6c\u53d8\u6210c\u53ef\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570\u975e\u5e38\u7b80\u5355\uff1a\u5728\u51fd\u6570\u524d\u9762\u52a0\u4e0a",(0,r.kt)("inlineCode",{parentName:"p"},'extern "C"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'extern "C" fn callback(a: c_int) { // \u8fd9\u4e2a\u51fd\u6570\u662f\u4f20\u7ed9c\u8c03\u7528\u7684\n    println!("hello {}!", a);\n}\n\n#[link(name = "yourlib")]\nextern {\n   fn run_callback(data: i32, cb: extern fn(i32));\n}\n\nfn main() {\n    unsafe {\n        run_callback(1 as i32, callback); // \u6253\u5370 1\n    }\n}\n')),(0,r.kt)("p",null,"\u5bf9\u5e94c\u5e93\u4ee3\u7801:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef void (*rust_callback)(int32_t);\n\nvoid run_callback(int32_t data, rust_callback callback) {\n    callback(data); // \u8c03\u7528\u4f20\u8fc7\u6765\u7684\u56de\u8c03\u51fd\u6570\n}\n")),(0,r.kt)("h3",{id:"\u5b57\u7b26\u4e32"},"\u5b57\u7b26\u4e32"),(0,r.kt)("p",null,"rust\u4e3a\u4e86\u5e94\u5bf9\u4e0d\u540c\u7684\u60c5\u51b5\uff0c\u6709\u5f88\u591a\u79cd\u5b57\u7b26\u4e32\u7c7b\u578b\u3002\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"CStr"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"CString"),"\u662f\u4e13\u7528\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"ffi"),"\u4ea4\u4e92\u7684\u3002"),(0,r.kt)("h4",{id:"cstr"},"CStr"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4ea7\u751f\u4e8ec\u7684\u5b57\u7b26\u4e32(\u5982\u5728c\u7a0b\u5e8f\u4e2d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"malloc"),"\u4ea7\u751f)\uff0crust\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"CStr"),"\u6765\u8868\u793a\uff0c\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"str"),"\u7c7b\u578b\u5bf9\u5e94\uff0c\u8868\u660e\u6211\u4eec\u5e76\u4e0d\u62e5\u6709\u8fd9\u4e2a\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::ffi::CStr;\nuse libc::c_char;\n#[link(name = "yourlib")]\nextern {\n    fn char_func() -> *mut c_char;\n}\n\nfn get_string() -> String {\n    unsafe {\n        let raw_string: *mut c_char = char_func();\n        let cstr = CStr::from_ptr(my_string());\n        cstr.to_string_lossy().into_owned()\n    }\n}\n')),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc",(0,r.kt)("inlineCode",{parentName:"p"},"get_string"),"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"CStr::from_ptr"),"\u4ecec\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"char*"),"\u83b7\u53d6\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5e76\u4e14\u8f6c\u5316\u6210\u4e86\u4e00\u4e2aString."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610fto_string_lossy()\u7684\u4f7f\u7528\uff1a\u56e0\u4e3a\u5728rust\u4e2d\u4e00\u5207\u5b57\u7b26\u90fd\u662f\u91c7\u7528utf8\u8868\u793a\u7684\u800cc\u4e0d\u662f\uff0c\n\u56e0\u6b64\u5982\u679c\u8981\u5c06c\u7684\u5b57\u7b26\u4e32\u8f6c\u6362\u5230rust\u5b57\u7b26\u4e32\u7684\u8bdd\uff0c\u9700\u8981\u68c0\u67e5\u662f\u5426\u90fd\u4e3a\u6709\u6548",(0,r.kt)("inlineCode",{parentName:"li"},"utf-8"),"\u5b57\u8282\u3002",(0,r.kt)("inlineCode",{parentName:"li"},"to_string_lossy"),"\u5c06\u8fd4\u56de\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"Cow<str>"),"\u7c7b\u578b\uff0c\n\u5373\u5982\u679cc\u5b57\u7b26\u4e32\u90fd\u4e3a\u6709\u6548",(0,r.kt)("inlineCode",{parentName:"li"},"utf-8"),"\u5b57\u8282\uff0c\u5219\u5c06\u51760\u5f00\u9500\u5730\u8f6c\u6362\u6210\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"&str"),"\u7c7b\u578b\uff0c\u82e5\u4e0d\u662f\uff0crust\u4f1a\u5c06\u5176\u62f7\u8d1d\u4e00\u4efd\u5e76\u4e14\u5c06\u975e\u6cd5\u5b57\u8282\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"U+FFFD"),"\u586b\u5145\u3002")),(0,r.kt)("h4",{id:"cstring"},"CString"),(0,r.kt)("p",null,"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"CStr"),"\u8868\u793a\u4ecec\u4e2d\u6765\uff0crust\u4e0d\u62e5\u6709\u5f52\u5c5e\u6743\u7684\u5b57\u7b26\u4e32\u76f8\u53cd\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"CString"),"\u8868\u793a\u7531rust\u5206\u914d\uff0c\u7528\u4ee5\u4f20\u7ed9c\u7a0b\u5e8f\u7684\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::ffi::CString;\nuse std::os::raw::c_char;\n\nextern {\n    fn my_printer(s: *const c_char);\n}\n\nlet c_to_print = CString::new("Hello, world!").unwrap();\nunsafe {\n    my_printer(c_to_print.as_ptr()); // \u4f7f\u7528 as_ptr \u5c06CString\u8f6c\u5316\u6210char\u6307\u9488\u4f20\u7ed9c\u51fd\u6570\n}\n')),(0,r.kt)("p",null,"\u6ce8\u610fc\u5b57\u7b26\u4e32\u4e2d\u5e76\u4e0d\u80fd\u5305\u542b",(0,r.kt)("inlineCode",{parentName:"p"},"\\0"),"\u5b57\u8282(\u56e0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\\0"),"\u7528\u6765\u8868\u793ac\u5b57\u7b26\u4e32\u7684\u7ed3\u675f\u7b26),\u56e0\u6b64",(0,r.kt)("inlineCode",{parentName:"p"},"CString::new"),"\u5c06\u8fd4\u56de\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"Result"),"\uff0c\n\u5982\u679c\u8f93\u5165\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"\\0"),"\u7684\u8bdd\u5219\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Error(NulError)"),"\u3002"),(0,r.kt)("h3",{id:"\u4e0d\u900f\u660e\u7ed3\u6784\u4f53"},"\u4e0d\u900f\u660e\u7ed3\u6784\u4f53"),(0,r.kt)("p",null,"C\u5e93\u5b58\u5728\u4e00\u79cd\u5e38\u89c1\u7684\u60c5\u51b5\uff1a\u5e93\u4f5c\u8005\u5e76\u4e0d\u60f3\u8ba9\u4f7f\u7528\u8005\u77e5\u9053\u4e00\u4e2a\u6570\u636e\u7c7b\u578b\u7684\u5177\u4f53\u5185\u5bb9\uff0c\u56e0\u6b64\u5e38\u5e38\u63d0\u4f9b\u4e86\u4e00\u5957\u5de5\u5177\u51fd\u6570\uff0c\u5e76\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"void*"),"\u6216\u4e0d\u900f\u660e\u7ed3\u6784\u4f53\u4f20\u5165\u4f20\u51fa\u8fdb\u884c\u64cd\u4f5c\u3002\n\u6bd4\u8f83\u5178\u578b\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"ncurse"),"\u5e93\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"WINDOW"),"\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u5f53\u53c2\u6570\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"void*"),"\u65f6\uff0c\u5728rust\u4e2d\u53ef\u4ee5\u548cc\u4e00\u6837\uff0c\u4f7f\u7528\u5bf9\u5e94\u7c7b\u578b",(0,r.kt)("inlineCode",{parentName:"p"},"*mut libc::c_void"),"\u8fdb\u884c\u64cd\u4f5c\u3002\u5982\u679c\u53c2\u6570\u4e3a\u4e0d\u900f\u660e\u7ed3\u6784\u4f53\uff0crust\u4e2d\u53ef\u4ee5\u4f7f\u7528\u7a7a\u767d",(0,r.kt)("inlineCode",{parentName:"p"},"enum"),"\u8fdb\u884c\u4ee3\u66ff:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'enum OpaqueStruct {}\n\nextern "C" {\n    pub fn foo(arg: *mut OpaqueStruct);\n}\n')),(0,r.kt)("p",null,"C\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"struct OpaqueStruct;\nvoid foo(struct OpaqueStruct *arg);\n")),(0,r.kt)("h3",{id:"\u7a7a\u6307\u9488"},"\u7a7a\u6307\u9488"),(0,r.kt)("p",null,"\u53e6\u4e00\u79cd\u5f88\u5e38\u89c1\u7684\u60c5\u51b5\u662f\u9700\u8981\u4e00\u4e2a\u7a7a\u6307\u9488\u3002\u8bf7\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"0 as *const _")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"std::ptr::null()"),"\u6765\u751f\u4ea7\u4e00\u4e2a\u7a7a\u6307\u9488\u3002"),(0,r.kt)("h2",{id:"\u5185\u5b58\u5b89\u5168"},"\u5185\u5b58\u5b89\u5168"),(0,r.kt)("p",null,"\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"ffi"),"\u8de8\u8d8a\u4e86rust\u8fb9\u754c\uff0crust\u7f16\u8bd1\u5668\u6b64\u65f6\u65e0\u6cd5\u4fdd\u969c\u4ee3\u7801\u7684\u5b89\u5168\u6027\uff0c\u6240\u4ee5\u5728\u6d89\u53caffi\u64cd\u4f5c\u65f6\u8981\u683c\u5916\u6ce8\u610f\u3002"),(0,r.kt)("h3",{id:"\u6790\u6784\u95ee\u9898"},"\u6790\u6784\u95ee\u9898"),(0,r.kt)("p",null,"\u5728\u6d89\u53caffi\u8c03\u7528\u65f6\u6700\u5e38\u89c1\u7684\u5c31\u662f\u6790\u6784\u95ee\u9898\uff1a\u8fd9\u4e2a\u5bf9\u8c61\u7531\u8c01\u6765\u6790\u6784\uff1f\u662f\u5426\u4f1a\u6cc4\u9732\u6216use after free\uff1f\n\u6709\u4e9b\u60c5\u51b5\u4e0bc\u5e93\u4f1a\u628a\u4e00\u7c7b\u7c7b\u578b",(0,r.kt)("inlineCode",{parentName:"p"},"malloc"),"\u4e86\u4ee5\u540e\u4f20\u51fa\u6765\uff0c\u7136\u540e\u4e0d\u518d\u5173\u7cfb\u5b83\u7684\u6790\u6784\u3002\u56e0\u6b64\u5728\u505affi\u64cd\u4f5c\u65f6\u8bf7\u4e3a\u8fd9\u4e9b\u7c7b\u578b\u5b9e\u73b0\u6790\u6784(",(0,r.kt)("inlineCode",{parentName:"p"},"Drop Trait"),")."),(0,r.kt)("h3",{id:"\u53ef\u7a7a\u6307\u9488\u4f18\u5316"},"\u53ef\u7a7a\u6307\u9488\u4f18\u5316"),(0,r.kt)("p",null,"\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"rust"),"\u7684\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"enum"),"\u4e3a\u4e00\u79cd\u7279\u6b8a\u7ed3\u6784\uff1a\u5b83\u6709\u4e24\u79cd\u5b9e\u4f8b\uff0c\u4e00\u79cd\u4e3a\u7a7a\uff0c\u53e6\u4e00\u79cd\u53ea\u6709\u4e00\u4e2a\u6570\u636e\u57df\u7684\u65f6\u5019\uff0crustc\u4f1a\u5f00\u542f\u7a7a\u6307\u9488\u4f18\u5316\u5c06\u5176\u4f18\u5316\u6210\u4e00\u4e2a\u6307\u9488\u3002\n\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"p"},'Option<extern "C" fn(c_int) -> c_int>'),"\u4f1a\u88ab\u4f18\u5316\u6210\u4e00\u4e2a\u53ef\u7a7a\u7684\u51fd\u6570\u6307\u9488\u3002"),(0,r.kt)("h3",{id:"ownership\u5904\u7406"},"ownership\u5904\u7406"),(0,r.kt)("p",null,"\u5728rust\u4e2d\uff0c\u7531\u4e8e\u7f16\u8bd1\u5668\u4f1a\u81ea\u52a8\u63d2\u5165\u6790\u6784\u4ee3\u7801\u5230\u5757\u7684\u7ed3\u675f\u4f4d\u7f6e\uff0c\u5728\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"owned"),"\u7c7b\u578b\u65f6\u8981\u683c\u5916\u7684\u6ce8\u610f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'extern {\n    pub fn foo(arg: extern fn() -> *const c_char);\n}\n\nextern "C" fn danger() -> *const c_char {\n    let cstring = CString::new("I\'m a danger string").unwrap();\n    cstring.as_ptr()\n}  // \u7531\u4e8eCString\u662fowned\u7c7b\u578b\uff0c\u5728\u8fd9\u91cccstring\u88abrust free\u6389\u4e86\u3002USE AFTER FREE! too young!\n\nfn main() {\n  unsafe {\n        foo(danger); // boom !!\n    }\n}\n')),(0,r.kt)("p",null,"\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"as_ptr"),"\u63a5\u53d7\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"&self"),"\u4f5c\u4e3a\u53c2\u6570(",(0,r.kt)("inlineCode",{parentName:"p"},"fn as_ptr(&self) -> *const c_char"),")\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"as_ptr"),"\u4ee5\u540e",(0,r.kt)("inlineCode",{parentName:"p"},"ownership"),"\u4ecd\u7136\u5f52rust\u6240\u6709\u3002\u56e0\u6b64rust\u4f1a\u5728\u51fd\u6570\u9000\u51fa\u65f6\u8fdb\u884c\u6790\u6784\u3002\n\u6b63\u786e\u7684\u505a\u6cd5\u662f\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"into_raw()"),"\u6765\u4ee3\u66ff",(0,r.kt)("inlineCode",{parentName:"p"},"as_ptr()"),"\u3002\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"into_raw"),"\u7684\u7b7e\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"fn into_raw(self) -> *mut c_char"),"\uff0c\u63a5\u53d7\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"self"),",\u4ea7\u751f\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"ownership"),"\u8f6c\u79fb\uff0c\n\u56e0\u6b64",(0,r.kt)("inlineCode",{parentName:"p"},"danger"),"\u51fd\u6570\u5c31\u4e0d\u4f1a\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"cstring"),"\u6790\u6784\u4e86\u3002"),(0,r.kt)("h3",{id:"panic"},"panic"),(0,r.kt)("p",null,"\u7531\u4e8e\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"ffi"),"\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"panic"),"\u662f\u672a\u5b9a\u4e49\u884c\u4e3a\uff0c\u5207\u5fcc\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"cffi"),"\u65f6",(0,r.kt)("inlineCode",{parentName:"p"},"panic"),"\u5305\u62ec\u76f4\u63a5\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"panic!"),",",(0,r.kt)("inlineCode",{parentName:"p"},"unimplemented!"),",\u4ee5\u53ca\u5f3a\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"unwrap"),"\u7b49\u60c5\u51b5\u3002\n\u5f53\u4f60\u5199",(0,r.kt)("inlineCode",{parentName:"p"},"cffi"),"\u65f6\uff0c\u8bb0\u4f4f\uff1a\u4f60\u5199\u4e0b\u7684\u6bcf\u4e2a\u5355\u8bcd\u90fd\u53ef\u80fd\u662f\u53d1\u5c04",(0,r.kt)("strong",{parentName:"p"},"\u6838\u5f39"),"\u7684\u5bc6\u7801\uff01"),(0,r.kt)("h2",{id:"\u9759\u6001\u5e93\u52a8\u6001\u5e93"},"\u9759\u6001\u5e93/\u52a8\u6001\u5e93"),(0,r.kt)("p",null,"\u524d\u9762\u63d0\u5230\u4e86\u58f0\u660e\u4e00\u4e2a\u5916\u90e8\u5e93\u7684\u65b9\u5f0f--",(0,r.kt)("inlineCode",{parentName:"p"},"#[link]"),"\u6807\u8bb0\uff0c\u6b64\u6807\u8bb0\u9ed8\u8ba4\u4e3a\u52a8\u6001\u5e93\u3002\u4f46\u5982\u679c\u662f\u9759\u6001\u5e93\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},'#[link(name = "foo", kind = "static")]'),"\u6765\u6807\u8bb0\u3002\n\u6b64\u5916\uff0c\u5bf9\u4e8eosx\u7684\u4e00\u79cd\u7279\u6b8a\u5e93--",(0,r.kt)("inlineCode",{parentName:"p"},"framework"),", \u8fd8\u53ef\u4ee5\u8fd9\u6837\u6807\u8bb0",(0,r.kt)("inlineCode",{parentName:"p"},'#[link(name = "CoreFoundation", kind = "framework")]'),"."),(0,r.kt)("h2",{id:"\u8c03\u7528\u7ea6\u5b9a"},"\u8c03\u7528\u7ea6\u5b9a"),(0,r.kt)("p",null,"\u524d\u9762\u770b\u5230\uff0c\u58f0\u660e\u4e00\u4e2a\u88abc\u8c03\u7528\u7684\u51fd\u6570\u65f6\uff0c\u91c7\u7528",(0,r.kt)("inlineCode",{parentName:"p"},'extern "C" fn'),"\u7684\u8bed\u6cd5\u3002\u6b64\u5904\u7684",(0,r.kt)("inlineCode",{parentName:"p"},'"C"'),"\u5373\u4e3ac\u8c03\u7528\u7ea6\u5b9a\u7684\u610f\u601d\u3002\u6b64\u5916\uff0crust\u8fd8\u652f\u6301\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"stdcall"),(0,r.kt)("li",{parentName:"ul"},"aapcs"),(0,r.kt)("li",{parentName:"ul"},"cdecl"),(0,r.kt)("li",{parentName:"ul"},"fastcall"),(0,r.kt)("li",{parentName:"ul"},"vectorcall //\u8fd9\u79cdcall\u7ea6\u5b9a\u6682\u65f6\u9700\u8981\u5f00\u542fabi_vectorcall feature gate."),(0,r.kt)("li",{parentName:"ul"},"Rust"),(0,r.kt)("li",{parentName:"ul"},"rust-intrinsic"),(0,r.kt)("li",{parentName:"ul"},"system"),(0,r.kt)("li",{parentName:"ul"},"C"),(0,r.kt)("li",{parentName:"ul"},"win64")),(0,r.kt)("h2",{id:"bindgen"},"bindgen"),(0,r.kt)("p",null,"\u662f\u4e0d\u662f\u89c9\u5f97\u628a\u4e00\u4e2a\u4e2a\u51fd\u6570\u548c\u5168\u5c40\u53d8\u91cf\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"extern\u5757"),"\u4e2d\u53bb\u58f0\u660e\uff0c\u5bf9\u5e94\u7684\u6570\u636e\u7ed3\u6784\u53bb\u624b\u52a8\u521b\u5efa\u7279\u522b\u9ebb\u70e6\uff1f\u6ca1\u5173\u7cfb\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"rust-bindgen"),"\u6765\u5e2e\u4f60\u641e\u5b9a\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"rust-bindgen"),"\u662f\u4e00\u4e2a\u80fd\u4ece\u5bf9\u5e94c\u5934\u6587\u4ef6\u81ea\u52a8\u751f\u6210\u51fd\u6570\u58f0\u660e\u548c\u6570\u636e\u7ed3\u6784\u7684\u5de5\u5177\u3002\u521b\u5efa\u4e00\u4e2a\u7ed1\u5b9a\u53ea\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"p"},"./bindgen [options] input.h"),"\u5373\u53ef\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/crabtw/rust-bindgen"},"\u9879\u76ee\u5730\u5740")))}k.isMDXComponent=!0}}]);