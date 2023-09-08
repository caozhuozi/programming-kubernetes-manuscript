"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\u524d\u8a00","href":"/crd-controller-from-scratch/docs/intro","docId":"intro"},{"type":"category","label":"apimachinery","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u4eceKubernetes API\u8c08\u8d77","href":"/crd-controller-from-scratch/docs/apimachinery/kubernetes-api","docId":"apimachinery/kubernetes-api"},{"type":"link","label":"GVK","href":"/crd-controller-from-scratch/docs/apimachinery/gvk","docId":"apimachinery/gvk"},{"type":"link","label":"runtime.Object","href":"/crd-controller-from-scratch/docs/apimachinery/runtime.Object","docId":"apimachinery/runtime.Object"},{"type":"link","label":"kind\u6848\u4f8b\u63a2\u7a76","href":"/crd-controller-from-scratch/docs/apimachinery/kind-case-study","docId":"apimachinery/kind-case-study"},{"type":"link","label":"\u5e8f\u5217\u5316\u5668\u4e0e\u5e8f\u5217\u5316\u5668\u5de5\u5382","href":"/crd-controller-from-scratch/docs/apimachinery/serializer","docId":"apimachinery/serializer"},{"type":"link","label":"client-go\u4e0eapimachinery","href":"/crd-controller-from-scratch/docs/apimachinery/client-go-and-apimachinery","docId":"apimachinery/client-go-and-apimachinery"},{"type":"link","label":"\u672c\u7ae0\u5c0f\u7ed3","href":"/crd-controller-from-scratch/docs/apimachinery/summary","docId":"apimachinery/summary"}],"href":"/crd-controller-from-scratch/docs/apimachinery/apimachinery"},{"type":"category","label":"client-go","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"RESTClient","href":"/crd-controller-from-scratch/docs/client-go/restclient","docId":"client-go/restclient"},{"type":"link","label":"Controller","href":"/crd-controller-from-scratch/docs/client-go/controller","docId":"client-go/controller"},{"type":"link","label":"informer is all you need","href":"/crd-controller-from-scratch/docs/client-go/informer-is-all-you-need","docId":"client-go/informer-is-all-you-need"},{"type":"link","label":"\u672c\u7ae0\u5c0f\u7ed3","href":"/crd-controller-from-scratch/docs/client-go/summary","docId":"client-go/summary"}],"href":"/crd-controller-from-scratch/docs/client-go/client-go"},{"type":"category","label":"putting it all together","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"package api","href":"/crd-controller-from-scratch/docs/putting-it-all-together/package-api","docId":"putting-it-all-together/package-api"},{"type":"link","label":"package client","href":"/crd-controller-from-scratch/docs/putting-it-all-together/package-client","docId":"putting-it-all-together/package-client"},{"type":"link","label":"informer.go","href":"/crd-controller-from-scratch/docs/putting-it-all-together/informer-go","docId":"putting-it-all-together/informer-go"},{"type":"link","label":"main.go","href":"/crd-controller-from-scratch/docs/putting-it-all-together/main-go","docId":"putting-it-all-together/main-go"}],"href":"/crd-controller-from-scratch/docs/putting-it-all-together/putting-it-all-together"}]},"docs":{"apimachinery/apimachinery":{"id":"apimachinery/apimachinery","title":"apimachinery","description":"\u4e86\u89e3apimachinery \u5e93\u5bf9\u4e8e\u7f16\u5199\u81ea\u5b9a\u4e49\u63a7\u5236\u5668\u81f3\u5173\u91cd\u8981\u3002","sidebar":"tutorialSidebar"},"apimachinery/client-go-and-apimachinery":{"id":"apimachinery/client-go-and-apimachinery","title":"client-go\u4e0eapimachinery","description":"\u6211\u4eec\u77e5\u9053Kubernetes\u5ba2\u6237\u7aef\u5411Kubernetes API Server\u53d1\u9001HTTP\u8bf7\u6c42\u540c\u6837\u6d89\u53ca\u5230\u5bf9\u8d44\u6e90\u7684\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u3002","sidebar":"tutorialSidebar"},"apimachinery/gvk":{"id":"apimachinery/gvk","title":"GVK","description":"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecdGVK\u7684\u6982\u5ff5\uff0c\u540c\u65f6\u4f1a\u8fdb\u4e00\u6b65\u6269\u5145\u524d\u9762\u521d\u8bc6kind\u5c0f\u8282\u5f15\u5165\u7684kind\u6982\u5ff5\u3002","sidebar":"tutorialSidebar"},"apimachinery/kind-case-study":{"id":"apimachinery/kind-case-study","title":"kind\u6848\u4f8b\u63a2\u7a76","description":"\u5728\u672c\u8282\u6211\u4eec\u5c06\u901a\u8fc7k8s.io/api\u5e93\u7684\u4e00\u4e2a\u5177\u4f53\u7684kind\u6848\u4f8b\u2014\u2014Pod\u53caPodList\u6765\u8fdb\u4e00\u6b65\u8be0\u91cakind\u5728\u5b9e\u73b0\u4e0a\u662f\u5982\u4f55\u5177\u4f53\u9700\u8981\u9075\u5faa\u7684\u7ea6\u5b9a\u7684\u3002","sidebar":"tutorialSidebar"},"apimachinery/kubernetes-api":{"id":"apimachinery/kubernetes-api","title":"\u4eceKubernetes API\u8c08\u8d77","description":"\u5728\u6b63\u5f0f\u6df1\u5165apimachinery\u6e90\u7801\u4e4b\u524d\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u4ecb\u7ecd\u4e0eKubernetes API\u76f8\u5173\u7684\u4e00\u4e9b\u91cd\u8981\u672f\u8bed\uff0c\u8fd9\u662f\u6211\u4eec\u7406\u89e3apimachinery\u5e93\u7684\u524d\u63d0\u3002","sidebar":"tutorialSidebar"},"apimachinery/runtime.Object":{"id":"apimachinery/runtime.Object","title":"runtime.Object","description":"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u4f1a\u57fa\u4e8eKubernetes\u6e90\u7801\uff08k8s.io/api\u5e93\u548ck8s.io/apimachinery\u5e93\uff09\u8fdb\u4e00\u6b65\u53bb\u8be0\u91ca\u5148\u524d\u5728\u518d\u8bc6kind\u5f15\u5165\u7684\u8bba\u8ff0\u2014\u2014\\"\u5728Kubernetes\u4e2d\uff0c\u6240\u6709\u9700\u8981\u88ab\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u7684Go\u7c7b\u578b\u90fd\u88ab\u79f0\u4e3akind\\"\u3002","sidebar":"tutorialSidebar"},"apimachinery/serializer":{"id":"apimachinery/serializer","title":"\u5e8f\u5217\u5316\u5668\u4e0e\u5e8f\u5217\u5316\u5668\u5de5\u5382","description":"\u6211\u4eec\u5728\u4eceKubernetes API\u8c08\u8d77\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u77e5\u9053kube-apiserver\u662f\u7cfb\u7edf\u7ba1\u7406\u8d44\u6e90\u7684\u552f\u4e00\u5bf9\u5916\u4ea4\u4e92\u63a5\u53e3\u3002","sidebar":"tutorialSidebar"},"apimachinery/summary":{"id":"apimachinery/summary","title":"\u672c\u7ae0\u5c0f\u7ed3","description":"\u672c\u7ae0\u6211\u4eec\u4ecb\u7ecd\u4e86\u8bb8\u591aKubernetes API\u7684\u672f\u8bed\u548c\u6982\u5ff5\uff0c\u4f46\u662f\u672c\u7ae0\u7684\u6838\u5fc3\u53ef\u4ee5\u5217\u4e3a\u4ee5\u4e0b\u51e0\u70b9\uff1a","sidebar":"tutorialSidebar"},"client-go/client-go":{"id":"client-go/client-go","title":"Overview","description":"\u5728\u524d\u4e00\u7ae0\uff0c\u6211\u4eec\u4e3b\u8981\u4ecb\u7ecd\u4e86kind\u7684\u6982\u5ff5\u4ee5\u53caapimachinery\u7684\u5e8f\u5217\u5316\u539f\u7406\u3002","sidebar":"tutorialSidebar"},"client-go/controller":{"id":"client-go/controller","title":"Controller","description":"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u6b63\u5f0f\u4ecb\u7ecd\u5728Kubernetes\u8bed\u5883\u4e0b\uff0c\u63a7\u5236\u5668\uff08Controller\uff09\u7a76\u7adf\u6307\u7684\u662f\u4ec0\u4e48\u3002","sidebar":"tutorialSidebar"},"client-go/informer-is-all-you-need":{"id":"client-go/informer-is-all-you-need","title":"informer is all you need","description":"\u5728\u524d\u9762Controller\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u4ee5\u4f18\u5316\u63a7\u5236\u5668\u4e3a\u7ebf\u7d22\u6b63\u5f0f\u5f15\u5165\u4e86client-go\u4e2d\u7684Informer\u7ec4\u4ef6\u3002","sidebar":"tutorialSidebar"},"client-go/restclient":{"id":"client-go/restclient","title":"RESTClient","description":"\u672c\u8282\u7684\u52a8\u673a\u4e0e\u6211\u4eec\u5728client-go\u4e0eapimachinery\u4e00\u6837\uff0c","sidebar":"tutorialSidebar"},"client-go/summary":{"id":"client-go/summary","title":"\u672c\u7ae0\u5c0f\u7ed3","description":"\u672c\u7ae0\u6211\u4eec\u4ececlient-go\u4e2d\u6784\u6210Clientset\u7684\u57fa\u7840\u7ec4\u4ef6RESTClient\u7684\u7528\u6cd5\u8bf4\u8d77\uff0c\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528\u5b83\u4e0eKubernetes API\u4ea4\u4e92\u8fdb\u800c\u7ba1\u7406\u8d44\u6e90\u3002","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"\u524d\u8a00","description":"\u5199\u5728\u524d\u9762","sidebar":"tutorialSidebar"},"putting-it-all-together/informer-go":{"id":"putting-it-all-together/informer-go","title":"informer.go","description":"1. Informer","sidebar":"tutorialSidebar"},"putting-it-all-together/main-go":{"id":"putting-it-all-together/main-go","title":"main.go","description":"","sidebar":"tutorialSidebar"},"putting-it-all-together/package-api":{"id":"putting-it-all-together/package-api","title":"package api","description":"types.go","sidebar":"tutorialSidebar"},"putting-it-all-together/package-client":{"id":"putting-it-all-together/package-client","title":"package client","description":"client.go","sidebar":"tutorialSidebar"},"putting-it-all-together/putting-it-all-together":{"id":"putting-it-all-together/putting-it-all-together","title":"putting-it-all-together","description":"\u5f53\u4f60\u8bfb\u5230\u8fd9\u91cc\u65f6\uff0c\u4f60\u5e94\u8be5\u5df2\u7ecf\u62e5\u6709\u4e86\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684\u81ea\u5b9a\u4e49\u63a7\u5236\u5668\u7684\u6240\u6709\u9884\u5907\u77e5\u8bc6\u3002","sidebar":"tutorialSidebar"}}}')}}]);