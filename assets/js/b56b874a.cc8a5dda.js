"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:0,id:"putting-it-all-together"},i=void 0,l={unversionedId:"putting-it-all-together/putting-it-all-together",id:"putting-it-all-together/putting-it-all-together",title:"putting-it-all-together",description:"\u5f53\u4f60\u8bfb\u5230\u8fd9\u91cc\u65f6\uff0c\u4f60\u5e94\u8be5\u5df2\u7ecf\u62e5\u6709\u4e86\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684\u81ea\u5b9a\u4e49\u63a7\u5236\u5668\u7684\u6240\u6709\u9884\u5907\u77e5\u8bc6\u3002",source:"@site/docs/putting-it-all-together/overview.md",sourceDirName:"putting-it-all-together",slug:"/putting-it-all-together/putting-it-all-together",permalink:"/crd-controller-from-scratch/docs/putting-it-all-together/putting-it-all-together",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,id:"putting-it-all-together"},sidebar:"tutorialSidebar",previous:{title:"\u672c\u7ae0\u5c0f\u7ed3",permalink:"/crd-controller-from-scratch/docs/client-go/summary"},next:{title:"package api",permalink:"/crd-controller-from-scratch/docs/putting-it-all-together/package-api"}},p={},s=[{value:"\u6c14\u7403\u63a7\u5236\u5668",id:"\u6c14\u7403\u63a7\u5236\u5668",level:2},{value:"<em>\u6c14\u7403</em>\u81ea\u5b9a\u4e49\u8d44\u6e90\uff08<em>Balloon</em> CRD\uff09",id:"\u6c14\u7403\u81ea\u5b9a\u4e49\u8d44\u6e90balloon-crd",level:3},{value:"\u6c14\u7403\u63a7\u5236\u5668",id:"\u6c14\u7403\u63a7\u5236\u5668-1",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f53\u4f60\u8bfb\u5230\u8fd9\u91cc\u65f6\uff0c\u4f60\u5e94\u8be5\u5df2\u7ecf\u62e5\u6709\u4e86\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684\u81ea\u5b9a\u4e49\u63a7\u5236\u5668\u7684\u6240\u6709\u9884\u5907\u77e5\u8bc6\u3002"),(0,a.kt)("p",null,'\u672c\u7ae0\u7684\u5185\u5bb9\u662f\u4e00\u4e2a"\u6c14\u7403\ud83c\udf88\u63a7\u5236\u5668\ud83e\udd16\ufe0f"\u7684\u5b9e\u73b0\uff0c\u5b8c\u6574\u4ee3\u7801\u4e5f\u53ef\u4ee5\u901a\u8fc7github\u4ed3\u5e93',(0,a.kt)("a",{parentName:"p",href:"https://github.com/caozhuozi/balloon-controller"},"caozhuozi/balloon-controller"),"\u83b7\u53d6\u3002\n\u53e6\u5916\uff0c\u6b63\u5982\u5728\u524d\u8a00\u4e2d",(0,a.kt)("a",{parentName:"p",href:"TODO%5Bcross-reference%5D:"},"\u672c\u4e66\u7ed3\u6784"),"\u4e2d\u6240\u8bf4\u7684\u90a3\u6837\uff0c\u672c\u7ae0\u4e0d\u4f1a\u5bf9\u4ee3\u7801\u518d\u505a\u8fc7\u591a\u7684\u89e3\u91ca\u548c\u8bf4\u660e\uff0c\u672c\u7ae0\u66f4\u50cf\u662f\u4e00\u4e2a\u4ee3\u7801\u5230\u77e5\u8bc6\u70b9\u7684\u7d22\u5f15\u3002\n\u6211\u4eec\u5c3d\u91cf\u4f1a\u4e3a\u4ee3\u7801\u4e2d\u7684\u6bcf\u4e2a\u4e3b\u8981\u90e8\u5206\u5206\u914d\u4e00\u4e2a\u8df3\u8f6c\u5230\u524d\u4e24\u7ae0\u5bf9\u5e94\u77e5\u8bc6\u70b9\u7684\u94fe\u63a5\u3002"),(0,a.kt)("h2",{id:"\u6c14\u7403\u63a7\u5236\u5668"},"\u6c14\u7403\u63a7\u5236\u5668"),(0,a.kt)("h3",{id:"\u6c14\u7403\u81ea\u5b9a\u4e49\u8d44\u6e90balloon-crd"},(0,a.kt)("em",{parentName:"h3"},"\u6c14\u7403"),"\u81ea\u5b9a\u4e49\u8d44\u6e90\uff08",(0,a.kt)("em",{parentName:"h3"},"Balloon")," CRD\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: "apiextensions.k8s.io/v1"\nkind: "CustomResourceDefinition"\nmetadata:\n  name: "balloons.book.dong.io"\nspec:\n  group: "book.dong.io"\n  versions:\n    - name: v1\n      # Each version can be enabled/disabled by Served flag.\n      served: true\n      # One and only one version must be marked as the storage version.\n      storage: true\n      schema:\n        openAPIV3Schema:\n          type: object\n          properties:\n            spec:\n              type: object\n              properties:\n                releaseTime:\n                  type: "string"\n                  format: "date-time"\n            status:\n              type: object\n              properties:\n                status:\n                  type: "string"\n      subresources:\n        # status enables the status subresource.\n        status: { }\n\n  scope: "Namespaced"\n  names:\n    plural: "balloons"\n    singular: "balloon"\n    kind: "Balloon"\n')),(0,a.kt)("p",null,"\u5c31\u50cf\u5728\u672c\u4e66",(0,a.kt)("a",{parentName:"p",href:"../intro#%E8%B0%81%E9%80%82%E5%90%88%E9%98%85%E8%AF%BB%E6%9C%AC%E4%B9%A6"},"\u524d\u8a00"),"\u4e2d\u6240\u8bf4\u7684\u4e00\u6837\uff0c \u5b89\u88c5",(0,a.kt)("em",{parentName:"p"},"CRD"),"\u6765\u6269\u5c55Kubernetes API\u5e94\u8be5\u662f\u8bfb\u8005\u9700\u8981\u9884\u5148\u638c\u63e1\u7684\u77e5\u8bc6\uff0c\u6211\u4eec\u5728\u8fd9\u91cc\u4e0d\u591a\u505a\u8d58\u8ff0\u3002\n\u4e3a\u4e86\u5c3d\u91cf\u8ba9\u6211\u4eec\u7684\u4f8b\u5b50\u7b80\u5355\u4e00\u4e9b\uff0c",(0,a.kt)("em",{parentName:"p"},"\u6c14\u7403"),"\u81ea\u5b9a\u4e49\u8d44\u6e90\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"spec"),"\u5b57\u6bb5\u4e0b\u4ec5\u6709\u4e00\u4e2a\u5b57\u6bb5",(0,a.kt)("inlineCode",{parentName:"p"},"releaseTime"),"\u63cf\u8ff0\u6c14\u7403\u671f\u671b\u7684\u91ca\u653e\u65f6\u95f4\uff0c\u8fd9\u4e5f\u5c31\u662f",(0,a.kt)("em",{parentName:"p"},"\u6c14\u7403"),"\u8d44\u6e90\u7684",(0,a.kt)("em",{parentName:"p"},"\u671f\u671b\u72b6\u6001"),"\u3002\n\u540c\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"status"),"\u5b57\u6bb5\u4e0b\u4e5f\u4ec5\u6709\u4e00\u4e2a\u5b57\u6bb5",(0,a.kt)("inlineCode",{parentName:"p"},"status"),"\u7528\u4e8e\u8bb0\u5f55\u6c14\u7403\u8d44\u6e90\u5b9e\u9645\u662f\u5426\u5df2\u7ecf\u88ab\u91ca\u653e\uff0c\u8fd9\u4e5f\u4ee3\u8868",(0,a.kt)("em",{parentName:"p"},"\u6c14\u7403"),"\u8d44\u6e90\u7684",(0,a.kt)("em",{parentName:"p"},"\u5b9e\u9645\u72b6\u6001"),"\u3002\n\u5728\u6b64CRD\u4e2d\uff0c\u552f\u4e00\u9700\u8981\u6ce8\u610f\u7684\u5730\u65b9\u662f\u4ee5\u4e0b\u5b57\u6bb5\u7684\u58f0\u660e\u7528\u4e8e\u5f00\u542f",(0,a.kt)("inlineCode",{parentName:"p"},"status"),"\u5b50\u8d44\u6e90\uff1a",(0,a.kt)("a",{parentName:"p",href:"../client-go/controller#kubernetes%E5%AF%B9%E8%B1%A1%E5%AD%90%E8%B5%84%E6%BA%90status"},"\ud83e\udd16\ufe0f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"subresources: \n  status: { } \n")),(0,a.kt)("h3",{id:"\u6c14\u7403\u63a7\u5236\u5668-1"},"\u6c14\u7403\u63a7\u5236\u5668"),(0,a.kt)("p",null,"\u672c\u7ae0\u5b9e\u73b0\u7684\u6c14\u7403\u63a7\u5236\u5668\u5927\u6982\u5206\u4e3a\u56db\u4e2a\u90e8\u5206\uff0c\u4ee3\u7801\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"|-- api\n|   |-- deepcopy.go\n|   |-- register.go\n|   `-- types.go\n|-- client\n|   `-- client.go\n|-- informer.go\n`-- main.go\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5305",(0,a.kt)("inlineCode",{parentName:"li"},"api"),"\u91cc\u5305\u62ec\u4e86\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"\u6c14\u7403"),"\u8d44\u6e90\u5bf9\u5e94\u7684",(0,a.kt)("em",{parentName:"li"},"kind"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Ballon"),"\u7c7b\u578b\uff08\u5355\u4f53\u7c7b\u578b\uff09\u4ee5\u53ca",(0,a.kt)("inlineCode",{parentName:"li"},"BalloonList"),"\u7684\u5b9a\u4e49\uff08\u96c6\u5408\u7c7b\u578b\uff09\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"Ballon"),"\u76f8\u5173\u7684\u7c7b\u578b\uff08\u5305\u62ec\u96c6\u5408\u7c7b\u578b\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u7279\u6b8a\u53ca\u901a\u7528\u7c7b\u578b"),"\uff09\u6ce8\u518c\u8fdb",(0,a.kt)("inlineCode",{parentName:"li"},"client-go"),"\u5e93\u4e2d\u7684\u5168\u5c40",(0,a.kt)("inlineCode",{parentName:"li"},"Schema"),"\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u5305",(0,a.kt)("inlineCode",{parentName:"li"},"client"),"\u91cc\u662f\u57fa\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"client-go"),"\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"RESTClient"),"\u5c01\u88c5\u7684\u4e00\u4e2a\u7b80\u5355\u7684\u6c14\u7403\u8d44\u6e90\u7c7b\u578b\u5ba2\u6237\u7aef\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"informer.go"),"\u6587\u4ef6\u4e2d\u5b9e\u73b0\u4e86\u4e00\u4e2a\u57fa\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"client-go"),"\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"Infomer"),"\u673a\u5236\u7684\u6c14\u7403\u8d44\u6e90\u672c\u5730\u7f13\u5b58\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"main.go"),'\u6587\u4ef6\u662f\u63a7\u5236\u5668\u7684\u4e3b\u4f53\u903b\u8f91\uff1a\u6bcf\u5206\u949f\u8bbf\u95ee\u4e00\u6b21\u6c14\u7403\u8d44\u6e90\u96c6\u5408\u7684\u672c\u5730\u7f13\u5b58\uff0c\u5f53\u6c14\u7403\u671f\u671b\u7684\u91ca\u653e\u65f6\u95f4\u548c\u5f53\u524d\u65f6\u95f4\u5339\u914d\u65f6\uff0c\n\u5219"\u91ca\u653e"\u8be5\u6c14\u7403\uff0c\u5e76\u66f4\u65b0\u6c14\u7403\u8d44\u6e90\u7684\u5b9e\u9645\u72b6\u6001\u3002')))}u.isMDXComponent=!0}}]);