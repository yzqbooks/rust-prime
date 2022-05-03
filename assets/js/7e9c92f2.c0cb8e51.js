"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[9644],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,m=s["".concat(i,".").concat(k)]||s[k]||d[k]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7270:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],c={},i="Mutex \u4e0e RwLock",u={unversionedId:"rcarc/mutex",id:"rcarc/mutex",title:"Mutex \u4e0e RwLock",description:"Mutex",source:"@site/docs/rcarc/mutex.md",sourceDirName:"rcarc",slug:"/rcarc/mutex",permalink:"/rust-docs/docs/rcarc/mutex",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rcarc/mutex.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cell, RefCell",permalink:"/rust-docs/docs/rcarc/cell"},next:{title:"\u51e0\u79cd\u667a\u80fd\u6307\u9488",permalink:"/rust-docs/docs/rcarc/preface"}},p={},d=[{value:"Mutex",id:"mutex",level:2},{value:"<code>lock</code> \u4e0e <code>try_lock</code> \u7684\u533a\u522b",id:"lock-\u4e0e-try_lock-\u7684\u533a\u522b",level:3},{value:"RwLock",id:"rwlock",level:2},{value:"\u8bfb\u5199\u9501\u7684\u65b9\u6cd5",id:"\u8bfb\u5199\u9501\u7684\u65b9\u6cd5",level:3}],s={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mutex-\u4e0e-rwlock"},"Mutex \u4e0e RwLock"),(0,o.kt)("h2",{id:"mutex"},"Mutex"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Mutex")," \u610f\u4e3a\u4e92\u65a5\u5bf9\u8c61\uff0c\u7528\u6765\u4fdd\u62a4\u5171\u4eab\u6570\u636e\u3002Mutex \u6709\u4e0b\u9762\u51e0\u4e2a\u7279\u5f81\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Mutex")," \u4f1a\u7b49\u5f85\u83b7\u53d6\u9501\u4ee4\u724c(token)\uff0c\u5728\u7b49\u5f85\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u963b\u585e\u7ebf\u7a0b\u3002\u76f4\u5230\u9501\u4ee4\u724c\u5f97\u5230\u3002\u540c\u65f6\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"Mutex")," \u5bf9\u8c61\u83b7\u53d6\u5230\u9501\uff1b"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Mutex")," \u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},".lock()")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"li"},".try_lock()")," \u6765\u5c1d\u8bd5\u5f97\u5230\u9501\u4ee4\u724c\uff0c\u88ab\u4fdd\u62a4\u7684\u5bf9\u8c61\uff0c\u5fc5\u987b\u901a\u8fc7\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u8fd4\u56de\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"RAII")," \u5b88\u536b\u6765\u8c03\u7528\uff0c\u4e0d\u80fd\u76f4\u63a5\u64cd\u4f5c\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"li"},"RAII")," \u5b88\u536b\u4f5c\u7528\u57df\u7ed3\u675f\u540e\uff0c\u9501\u4f1a\u81ea\u52a8\u89e3\u5f00\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u591a\u7ebf\u7a0b\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"Mutex")," \u4e00\u822c\u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"Arc")," \u914d\u5408\u4f7f\u7528\u3002")),(0,o.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use std::sync::{Arc, Mutex};\nuse std::thread;\nuse std::sync::mpsc::channel;\n\nconst N: usize = 10;\n\n// Spawn a few threads to increment a shared variable (non-atomically), and\n// let the main thread know once all increments are done.\n//\n// Here we're using an Arc to share memory among threads, and the data inside\n// the Arc is protected with a mutex.\nlet data = Arc::new(Mutex::new(0));\n\nlet (tx, rx) = channel();\nfor _ in 0..10 {\n    let (data, tx) = (data.clone(), tx.clone());\n    thread::spawn(move || {\n        // The shared state can only be accessed once the lock is held.\n        // Our non-atomic increment is safe because we're the only thread\n        // which can access the shared state when the lock is held.\n        //\n        // We unwrap() the return value to assert that we are not expecting\n        // threads to ever fail while holding the lock.\n        let mut data = data.lock().unwrap();\n        *data += 1;\n        if *data == N {\n            tx.send(()).unwrap();\n        }\n        // the lock is unlocked here when `data` goes out of scope.\n    });\n}\n\nrx.recv().unwrap();\n")),(0,o.kt)("h3",{id:"lock-\u4e0e-try_lock-\u7684\u533a\u522b"},(0,o.kt)("inlineCode",{parentName:"h3"},"lock")," \u4e0e ",(0,o.kt)("inlineCode",{parentName:"h3"},"try_lock")," \u7684\u533a\u522b"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},".lock()")," \u65b9\u6cd5\uff0c\u4f1a\u7b49\u5f85\u9501\u4ee4\u724c\uff0c\u7b49\u5f85\u7684\u65f6\u5019\uff0c\u4f1a\u963b\u585e\u5f53\u524d\u7ebf\u7a0b\u3002\u800c ",(0,o.kt)("inlineCode",{parentName:"p"},".try_lock()")," \u65b9\u6cd5\uff0c\u53ea\u662f\u505a\u4e00\u6b21\u5c1d\u8bd5\u64cd\u4f5c\uff0c\u4e0d\u4f1a\u963b\u585e\u5f53\u524d\u7ebf\u7a0b\u3002"),(0,o.kt)("p",null,"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},".try_lock()")," \u6ca1\u6709\u83b7\u53d6\u5230\u9501\u4ee4\u724c\u65f6\uff0c\u4f1a\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"Err"),"\u3002\u56e0\u6b64\uff0c\u5982\u679c\u8981\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},".try_lock()"),"\uff0c\u9700\u8981\u5bf9\u8fd4\u56de\u503c\u505a\u4ed4\u7ec6\u5904\u7406\uff08\u6bd4\u5982\uff0c\u5728\u4e00\u4e2a\u5faa\u73af\u68c0\u67e5\u4e2d\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u70b9\u8bc4"),"\uff1aRust \u7684 Mutex \u8bbe\u8ba1\u6210\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4e0d\u540c\u4e8e C \u8bed\u8a00\u4e2d\u7684\u81ea\u65cb\u9501\u7528\u4e24\u6761\u5206\u5f00\u7684\u8bed\u53e5\u7684\u5b9e\u73b0\uff0c\u66f4\u5b89\u5168\uff0c\u66f4\u7f8e\u89c2\uff0c\u4e5f\u66f4\u597d\u7ba1\u7406\u3002"),(0,o.kt)("h2",{id:"rwlock"},"RwLock"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RwLock")," \u7ffb\u8bd1\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u8bfb\u5199\u9501"),"\u3002\u5b83\u7684\u7279\u70b9\u662f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u540c\u65f6\u5141\u8bb8\u591a\u4e2a\u8bfb\uff0c\u6700\u591a\u53ea\u80fd\u6709\u4e00\u4e2a\u5199\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u8bfb\u548c\u5199\u4e0d\u80fd\u540c\u65f6\u5b58\u5728\uff1b")),(0,o.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use std::sync::RwLock;\n\nlet lock = RwLock::new(5);\n\n// many reader locks can be held at once\n{\n    let r1 = lock.read().unwrap();\n    let r2 = lock.read().unwrap();\n    assert_eq!(*r1, 5);\n    assert_eq!(*r2, 5);\n} // read locks are dropped at this point\n\n// only one write lock may be held, however\n{\n    let mut w = lock.write().unwrap();\n    *w += 1;\n    assert_eq!(*w, 6);\n} // write lock is dropped here\n")),(0,o.kt)("h3",{id:"\u8bfb\u5199\u9501\u7684\u65b9\u6cd5"},"\u8bfb\u5199\u9501\u7684\u65b9\u6cd5"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},".read()")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},".try_read()")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},".write()")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},".try_write()"))),(0,o.kt)("p",null,"\u6ce8\u610f\u9700\u8981\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},".try_read()")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},".try_write()")," \u7684\u8fd4\u56de\u503c\u8fdb\u884c\u5224\u65ad\u3002"))}k.isMDXComponent=!0}}]);