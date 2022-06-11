import{_ as e,c as t,o as a,d as s}from"./app.b315d791.js";const _='{"title":"ngnix\u5F00\u542FHSTS","description":null,"frontmatter":{"title":"ngnix\u5F00\u542FHSTS","date":"2020-08-17T07:43:56.000Z","categories":["IT"],"draft":true,"tags":["ngnix"],"description":null},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662FHSTS","slug":"\u4EC0\u4E48\u662Fhsts"}],"relativePath":"posts/8.md"}',r={},n=s(`<h1 id="ngnix\u5F00\u542Fhsts" tabindex="-1">ngnix\u5F00\u542FHSTS <a class="header-anchor" href="#ngnix\u5F00\u542Fhsts" aria-hidden="true">#</a></h1><h2 id="\u4EC0\u4E48\u662Fhsts" tabindex="-1">\u4EC0\u4E48\u662FHSTS <a class="header-anchor" href="#\u4EC0\u4E48\u662Fhsts" aria-hidden="true">#</a></h2><blockquote><p>HTTP\u4E25\u683C\u4F20\u8F93\u5B89\u5168\u534F\u8BAE\uFF08\u82F1\u8BED\uFF1AHTTP Strict Transport Security\uFF0C\u7B80\u79F0\uFF1AHSTS\uFF09\uFF0C\u662F\u4E00\u5957\u7531\u4E92\u8054\u7F51\u5DE5\u7A0B\u4EFB\u52A1\u7EC4\u53D1\u5E03\u7684\u4E92\u8054\u7F51\u5B89\u5168\u7B56\u7565\u673A\u5236\u3002\u7F51\u7AD9\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528HSTS\u7B56\u7565\uFF0C\u6765\u8BA9\u6D4F\u89C8\u5668\u5F3A\u5236\u4F7F\u7528HTTPS\u4E0E\u7F51\u7AD9\u8FDB\u884C\u901A\u4FE1\uFF0C\u4EE5\u51CF\u5C11\u4F1A\u8BDD\u52AB\u6301\u98CE\u9669\u3002 HSTS\u53EF\u4EE5\u5F88\u5927\u7A0B\u5EA6\u4E0A\u89E3\u51B3SSL\u5265\u79BB\u653B\u51FB\uFF0C\u56E0\u4E3A\u53EA\u8981\u6D4F\u89C8\u5668\u66FE\u7ECF\u4E0E\u670D\u52A1\u5668\u521B\u5EFA\u8FC7\u4E00\u6B21\u5B89\u5168\u8FDE\u63A5\uFF0C\u4E4B\u540E\u6D4F\u89C8\u5668\u4F1A\u5F3A\u5236\u4F7F\u7528HTTPS\uFF0C\u5373\u4F7F\u94FE\u63A5\u88AB\u6362\u6210\u4E86HTTP\u3002 ##\u5F00\u542FHSTS\u8BC1\u4E66\u7684\u524D\u63D0## \u6B63\u786E\u8BBE\u7F6E\u4E86SSL\u8BC1\u4E66\uFF0C\u7F51\u7AD9\u53EF\u4EE5\u901A\u8FC7https\u534F\u8BAE\u6B63\u5E38\u8BBF\u95EE ##ngnix\u5982\u4F55\u5F00\u542FHSTS## \u5728\u7F51\u7AD9\u914D\u7F6E\u6587\u4EF6server{}\u4E2D\u52A0\u5165</p></blockquote><div class="language-"><pre><code>add_header Strict-Transport-Security &quot;max-age=31536000;
</code></pre></div><p>\u5982\u679C\u8FFD\u6C42\u66F4\u597D\u7684\u5B89\u5168\u6548\u679C\u53EF\u4EE5\u6539\u6210\u52A0\u5165</p><div class="language-"><pre><code>add_header Strict-Transport-Security &quot;max-age=31536000; includeSubdomains; preload&quot;;

</code></pre></div><h4 id="includesubdomains\u53C2\u6570\u4F1A\u4F7F\u5F97\u6D4F\u89C8\u5668\u5728\u8BF7\u6C42\u6240\u6709\u5B50\u57DF\u540D\u65F6\u90FD\u5F3A\u5236\u8981\u6C42https\u534F\u8BAE\uFF0C\u5982\u679C\u6CA1\u6709\u7ED9\u6240\u6709\u5B50\u57DF\u540D\u90FD\u6DFB\u52A0ssl\u8BC1\u4E66\u7684\u6253\u7B97\uFF0C\u8BF7\u4E0D\u8981\u8F93\u5165\u8FD9\u4E2A\u53C2\u6570" tabindex="-1">includeSubdomains\u53C2\u6570\u4F1A\u4F7F\u5F97\u6D4F\u89C8\u5668\u5728\u8BF7\u6C42\u6240\u6709\u5B50\u57DF\u540D\u65F6\u90FD\u5F3A\u5236\u8981\u6C42HTTPS\u534F\u8BAE\uFF0C\u5982\u679C\u6CA1\u6709\u7ED9\u6240\u6709\u5B50\u57DF\u540D\u90FD\u6DFB\u52A0SSL\u8BC1\u4E66\u7684\u6253\u7B97\uFF0C\u8BF7\u4E0D\u8981\u8F93\u5165\u8FD9\u4E2A\u53C2\u6570 <a class="header-anchor" href="#includesubdomains\u53C2\u6570\u4F1A\u4F7F\u5F97\u6D4F\u89C8\u5668\u5728\u8BF7\u6C42\u6240\u6709\u5B50\u57DF\u540D\u65F6\u90FD\u5F3A\u5236\u8981\u6C42https\u534F\u8BAE\uFF0C\u5982\u679C\u6CA1\u6709\u7ED9\u6240\u6709\u5B50\u57DF\u540D\u90FD\u6DFB\u52A0ssl\u8BC1\u4E66\u7684\u6253\u7B97\uFF0C\u8BF7\u4E0D\u8981\u8F93\u5165\u8FD9\u4E2A\u53C2\u6570" aria-hidden="true">#</a></h4>`,7),i=[n];function d(o,c,S,h,l,T){return a(),t("div",null,i)}var p=e(r,[["render",d]]);export{_ as __pageData,p as default};