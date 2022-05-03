"use strict";(self.webpackChunkrust_docs=self.webpackChunkrust_docs||[]).push([[1460],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=i(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(m,u(u({ref:t},p),{},{components:r})):n.createElement(m,u({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var i=2;i<a;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4349:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),u=["components"],c={},l="\u6a21\u5757\u548c\u5305\u7cfb\u7edf\u3001Prelude",i={unversionedId:"module/preface",id:"module/preface",title:"\u6a21\u5757\u548c\u5305\u7cfb\u7edf\u3001Prelude",description:"\u524d\u8a00",source:"@site/docs/module/preface.md",sourceDirName:"module",slug:"/module/preface",permalink:"/rust-docs/docs/module/preface",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/module/preface.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5305\u548c\u6a21\u5757",permalink:"/rust-docs/docs/module/"},next:{title:"Prelude",permalink:"/rust-docs/docs/module/prelude"}},p={},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}],f={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6a21\u5757\u548c\u5305\u7cfb\u7edfprelude"},"\u6a21\u5757\u548c\u5305\u7cfb\u7edf\u3001Prelude"),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u968f\u7740\u5de5\u7a0b\u7684\u589e\u5927\uff0c\u628a\u6240\u6709\u4ee3\u7801\u5199\u5728\u4e00\u4e2a\u6587\u4ef6\u91cc\u9762\uff0c\u662f\u4e00\u4ef6\u6781\u5176\u521d\u7b49\u53ca\u611a\u8822\u7684\u4f5c\u6cd5\u3002\u5927\u4f53\u6765\u8bb2\uff0c\u5b83\u6709\u5982\u4e0b\u51e0\u4e2a\u7f3a\u70b9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6587\u4ef6\u5927\u4e86\uff0c\u7f16\u8f91\u5668\u6253\u5f00\u6162\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u6240\u6709\u4ee3\u7801\u653e\u5728\u540c\u4e00\u4e2a\u6587\u4ef6\u4e2d\uff0c\u65e0\u6cd5\u5f88\u597d\u5730\u5229\u7528\u73b0\u4ee3\u591a\u7a97\u53e3\u7f16\u8f91\u5668\uff0c\u540c\u65f6\u67e5\u770b\u7f16\u8f91\u76f8\u5173\u8054\u7684\u4e24\u4e2a\u4ee3\u7801\u7247\u65ad\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u6570\u91cf\u8fc7\u591a\uff0c\u67e5\u627e\u67d0\u4e00\u4e2a\u5173\u952e\u8bcd\u8fc7\u6162\uff0c\u5b9a\u4f4d\u5230\u67d0\u4e00\u884c\u4ee3\u7801\u7684\u6548\u7387\u4f1a\u5927\u5927\u964d\u4f4e\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u4f1a\u5927\u5927\u589e\u52a0\u4e0a\u7ffb\u4e0b\u7ffb\u7684\u9891\u7387\uff0c\u5bfc\u81f4\u4f60\u7684\u9f20\u6807\u4e2d\u95f4\u6eda\u8f6e\u6613\u574f\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u65ad\u5730\u4e0a\u7ffb\u4e0b\u7ffb\uff0c\u4f1a\u5bfc\u81f4\u4f60\u5934\u6655\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u5934\u6655\u4e86\uff0c\u5c31\u5bb9\u6613\u5199\u51fa\u9519\u8bef\u7684\u4ee3\u7801\uff0c\u751a\u81f3\u6539\u9519\u6587\u4ef6\u4e2d\u7684\u67d0\u4e00\u884c\uff08\u76f8\u4f3c\u7684\u5730\u65b9\uff0c\u6539\u9519\u5730\u65b9\u4e86\uff09\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u51fa\u73b0bug\uff0c\u6839\u636e\u9519\u8bef\u53cd\u9988\uff0c\u77e5\u9053\u662f\u54ea\u4e00\u7247\u903b\u8f91\u7684\u95ee\u9898\uff0c\u4f46\u4e0d\u5bb9\u6613\u5feb\u901f\u5b9a\u4f4d\uff1b")),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u6a21\u5757\u662f\u51e0\u4e4e\u6240\u6709\u8bed\u8a00\u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u5c3d\u7ba1\u53eb\u6cd5\u5404\u6709\u4e0d\u540c\u3002"))}d.isMDXComponent=!0}}]);