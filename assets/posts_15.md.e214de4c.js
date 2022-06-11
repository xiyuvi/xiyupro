import{_ as t,c as n,o as e,d as r}from"./app.b315d791.js";const g='{"title":"\u5229\u7528crypto-js\u5B9E\u73B0\u9759\u6001\u7F51\u9875\u6570\u636E\u52A0\u5BC6","description":null,"frontmatter":{"title":"\u5229\u7528crypto-js\u5B9E\u73B0\u9759\u6001\u7F51\u9875\u6570\u636E\u52A0\u5BC6","date":"2022-02-27T17:28:50.000Z","published":true,"tags":["\u52A0\u5BC6"],"description":null},"headers":[{"level":2,"title":"crypto-js\u662F\u4EC0\u4E48","slug":"crypto-js\u662F\u4EC0\u4E48"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u5176\u4ED6\u5E94\u7528","slug":"\u5176\u4ED6\u5E94\u7528"}],"relativePath":"posts/15.md"}',o={},p=r(`<h1 id="\u5229\u7528crypto-js\u5B9E\u73B0\u9759\u6001\u7F51\u9875\u6570\u636E\u52A0\u5BC6" tabindex="-1">\u5229\u7528crypto-js\u5B9E\u73B0\u9759\u6001\u7F51\u9875\u6570\u636E\u52A0\u5BC6 <a class="header-anchor" href="#\u5229\u7528crypto-js\u5B9E\u73B0\u9759\u6001\u7F51\u9875\u6570\u636E\u52A0\u5BC6" aria-hidden="true">#</a></h1><h2 id="crypto-js\u662F\u4EC0\u4E48" tabindex="-1">crypto-js\u662F\u4EC0\u4E48 <a class="header-anchor" href="#crypto-js\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p><img src="https://cdn.jsdelivr.net/gh/xiyuvi/img@master/bnnpe1.2fukxs5spn40.webp" alt=""></p><p>\u4F7F\u7528crypto-js\u4E5F\u662F\u5F88\u4E45\u4E4B\u524D\u7684\u4E8B\u4E86\uFF0C\u4E00\u76F4\u90FD\u6CA1\u6709\u597D\u597D\u6574\u7406\uFF0C\u4ECA\u5929\u501F\u52A9\u535A\u5BA2\u91CD\u6784\u7684\u673A\u4F1A\uFF0C\u597D\u597D\u634B\u4E00\u4E0B\u3002crypto-js\u662F\u4E00\u4E2A\u52A0\u5BC6\u7B97\u6CD5\u5E93\uFF0C\u652F\u6301\u54C8\u5E0C\u7B97\u6CD5\uFF0C\u5982\uFF1AMD5\u3001SHA-1\u3001SHA-2\u3001SHA-3\u3001RIPEMD-160\u4E5F\u652F\u6301\u591A\u79CD\u52A0\u5BC6\u65B9\u5F0F\uFF0C\u5982\uFF1AAES\u3001DES, Triple DES\u3001Rabbit\u3001RC4, RC4Drop\u3002\u53EF\u5B9E\u73B0\u591A\u79CD\u591A\u6837\u7684\u52A0\u5BC6\u7B97\u6CD5\u3002</p><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u5728<a href="https://github.com/brix/crypto-js" target="_blank" rel="noopener noreferrer">github.com/brix/crypto-js</a> \u4E0A\u5F15\u5165\u76F8\u5173\u6587\u4EF6\uFF0C\u56E0\u4E3A\u6211\u53EA\u9700\u8981\u4F7F\u7528aes\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u6240\u4EE5\u6CA1\u6709\u5F15\u5165\u6574\u4E2A\u5E93\u800C\u662F\u53EA\u4E0B\u8F7D\u4E86aes.js\u5355\u4E2A\u6587\u4EF6\u3002 \u501F\u52A9\u5F3A\u5927\u7684crypto-js\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u51E0\u884C\u4EE3\u7801\u5C31\u53EF\u4EE5\u5B9E\u73B0\u52A0\u5BC6\u6548\u679C\uFF0C\u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528aes\u52A0\u5BC6\u7684demo\uFF0C\u6548\u679C\u4E3A\u5728\u9875\u9762\u52A0\u5BC6\u5B57\u7B26\u4E32\u201C123456\u201D\uFF0C\u5E76\u89E3\u5BC6\u52A0\u5BC6\u7684\u5BC6\u6587\u3002</p><div class="language-"><pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
    &lt;script src=&quot;./aes.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;script&gt;
        //aes\u52A0\u5BC6
        function encrypt(word) {
            var key = CryptoJS.enc.Utf8.parse(&quot;1234560000000000&quot;); //16\u4F4D
            var iv = CryptoJS.enc.Utf8.parse(&quot;1234567890000000&quot;);
            var encrypted = &#39;&#39;;
            if (typeof (word) == &#39;string&#39;) {
                var srcs = CryptoJS.enc.Utf8.parse(word);
                encrypted = CryptoJS.AES.encrypt(srcs, key, {
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                });
            } else if (typeof (word) == &#39;object&#39;) { //\u5BF9\u8C61\u683C\u5F0F\u7684\u8F6C\u6210json\u5B57\u7B26\u4E32
                data = JSON.stringify(word);
                var srcs = CryptoJS.enc.Utf8.parse(data);
                encrypted = CryptoJS.AES.encrypt(srcs, key, {
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                })
            }
            return encrypted.ciphertext.toString();
        }
        // aes\u89E3\u5BC6
        function decrypt(word) {
            var key = CryptoJS.enc.Utf8.parse(&quot;1234560000000000&quot;);
            var iv = CryptoJS.enc.Utf8.parse(&quot;1234567890000000&quot;);
            var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
            var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
            var decrypt = CryptoJS.AES.decrypt(srcs, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
            return decryptedStr.toString();
        }
    &lt;/script&gt;
    &lt;script&gt;
        var str = &quot;123456&quot;;
        var encrypted = encrypt(str);
        var decrypt1 = decrypt(encrypted.toString());
        document.writeln(&quot;aes cbc \u52A0\u5BC6 \u89E3\u5BC6&quot;);
        document.writeln(&quot;&lt;br/&gt;&quot;);
        document.writeln(&quot;\u5F85\u52A0\u5BC6\uFF1A&quot; + str);
        document.writeln(&quot;&lt;br/&gt;&quot;);
        document.writeln(&quot;\u52A0\u5BC6\u7684\u5BC6\u6587:&quot;.concat(encrypted));
        document.writeln(&quot;&lt;br/&gt;&quot;);
        document.writeln(&quot;\u89E3\u5BC6\u5BC6\u6587\u7684\u7ED3\u679C:&quot; + decrypt1);
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre></div><p>\u4EE3\u7801\u6548\u679C\u5982\u4E0B\u56FE</p><p><img src="https://cdn.jsdelivr.net/gh/xiyuvi/img@master/bneggJ.1t39gdvn8urk.webp" alt=""></p><h2 id="\u5176\u4ED6\u5E94\u7528" tabindex="-1">\u5176\u4ED6\u5E94\u7528 <a class="header-anchor" href="#\u5176\u4ED6\u5E94\u7528" aria-hidden="true">#</a></h2><p>\u501F\u52A9crypto-js\u8FD8\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E9B\u5F88\u597D\u73A9\u7684\u52A0\u5BC6\uFF0C\u4F8B\u5982\u9759\u6001\u9875\u9762\u6587\u7AE0\u7684\u52A0\u5BC6\u3002\u51FA\u4E8E\u67D0\u79CD\u539F\u56E0\u6211\u7684\u6587\u7AE0\u201C\u9020\u8C23\u4EBA\u58EB\u751F\u5E73\u4E8B\u201D\u4E4B\u524D\u5C31\u4F7F\u7528\u4E86\u8FD9\u79CD\u52A0\u5BC6\u65B9\u5F0F\u3002 \u5224\u65AD\u6587\u7AE0\u6807\u9898\u662F\u201C\u52A0\u5BC6\u201D\u5F00\u5934\u540E\uFF0C\u5C31\u5F15\u5165aes.js\u6587\u4EF6</p><div class="language-"><pre><code>&lt;script&gt;
        
        var postTitleValue = document.querySelector(&quot;.post-title&quot;).innerHTML.trim();
        if (postTitleValue.slice(0, 2) === &quot;\u52A0\u5BC6&quot;) {

            var oScript = document.createElement(&quot;script&quot;);
            oScript.src = &quot;./aes.js&quot;;
            document.body.appendChild(oScript);
        }
    &lt;/script&gt;
</code></pre></div><p>\u5F15\u5165aes.js\u540E\u6DFB\u52A0\u5BC6\u94A5\u548C\u5BC6\u94A5\u504F\u79FB\u91CF\u8F93\u5165\u6846\uFF0C\u6DFB\u52A0\u52A0\u5BC6\u89E3\u5BC6\u51FD\u6570\uFF0C\u6DFB\u52A0\u70B9\u51FB\u4E8B\u4EF6\u3002\u9ED8\u8BA4\u7684\u5BC6\u94A5\u548C\u5BC6\u7801\u504F\u79FB\u91CF\u90FD\u4E3A&quot;1234560000000000&quot;\uFF0C\u4F46\u662F\u5343\u4E07\u4E0D\u8981\u4F7F\u7528\u9ED8\u8BA4\u5BC6\u7801\u548C\u5BC6\u94A5\uFF0C\u6700\u65B9\u4FBF\u7684\u505A\u6CD5\u662F\u4F7F\u7528\u5728\u7EBF\u968F\u673A\u6570\u751F\u6210\u5DE5\u5177\u751F\u6210\u968F\u673A\u5BC6\u94A5\u548C\u968F\u673A\u5BC6\u94A5\u504F\u79FB\u91CF\u3002</p><div class="language-"><pre><code>//aes\u52A0\u5BC6
function encrypt(word, keyy, ivv) {
    var key = keyy ? CryptoJS.enc.Utf8.parse(keyy) : CryptoJS.enc.Utf8.parse(&quot;1234560000000000&quot;); //16\u4F4D
    var iv = ivv ? CryptoJS.enc.Utf8.parse(ivv) : CryptoJS.enc.Utf8.parse(&quot;1234567890000000&quot;);
    var encrypted = &#39;&#39;;
    if (typeof (word) == &#39;string&#39;) {
        var srcs = CryptoJS.enc.Utf8.parse(word);
        encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    } else if (typeof (word) == &#39;object&#39;) { //\u5BF9\u8C61\u683C\u5F0F\u7684\u8F6C\u6210json\u5B57\u7B26\u4E32
        data = JSON.stringify(word);
        var srcs = CryptoJS.enc.Utf8.parse(data);
        encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        })
    }
    return encrypted.ciphertext.toString();
}
// aes\u89E3\u5BC6
function decrypt(word, keyy, ivv) {
    var key = keyy ? CryptoJS.enc.Utf8.parse(keyy) : CryptoJS.enc.Utf8.parse(&quot;1234560000000000&quot;);
    var iv = ivv ? CryptoJS.enc.Utf8.parse(ivv) : CryptoJS.enc.Utf8.parse(&quot;1234567890000000&quot;);
    var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    var decrypt = CryptoJS.AES.decrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}
var lock = document.createElement(&quot;div&quot;),
    input = document.createElement(&quot;input&quot;),
    inputIvv = document.createElement(&quot;input&quot;),
    btn1 = document.createElement(&quot;button&quot;),
    btn2 = document.createElement(&quot;button&quot;),
    markdown = document.querySelector(&quot;.markdown-body&quot;);
    markdown.style.display=&quot;none&quot;
lock.id = &quot;lock&quot;;
input.id = &quot;lock-input&quot;;
inputIvv.id = &quot;lock-inputIvv&quot;;
input.type=&quot;password&quot;;
inputIvv.type=&quot;password&quot;;
btn1.id = &quot;lock-btn1&quot;;
btn2.id = &quot;lock-btn2&quot;;
btn1.innerHTML = &quot;\u89E3\u5BC6&quot;;
btn2.innerHTML = &quot;\u52A0\u5BC6&quot;;
document.body.appendChild(lock);
lock.appendChild(input);
lock.appendChild(inputIvv);
lock.appendChild(btn1);
lock.appendChild(btn2);

btn1.onclick = function () {
    var keyy = input.value;
    var ivv = inputIvv.value;
    var markdownValue = markdown.innerHTML.trim();
    //\u53BB\u9664\u751F\u6210\u5E72\u6270\uFF0C\u6211\u7684\u6587\u7AE0\u6BCF\u6B21\u751F\u6210\u4F1A\u81EA\u52A8\u5305\u4E00\u5C42div\uFF0C\u8FD9\u4E00\u6B65\u662F\u4E3A\u4E86\u4FDD\u8BC1\u5BC6\u6587\u6C38\u4E0D\u6539\u53D8\u5185\u5BB9\uFF0C\u4F60\u4EEC\u4E0D\u9700\u8981\u8FD9\u4E00\u6B65
    var str = markdownValue.slice(3,-4);
    console.log(str);
    var decr = decrypt(str.toString(), keyy, ivv);
    markdown.innerHTML = decr.trim();
    markdown.style.display=&quot;block&quot;
}
btn2.onclick = function () {
    var keyy = input.value;
    var ivv = inputIvv.value;
    var markdownValue = markdown.innerHTML.trim();
    var str = markdownValue;
    var decr = encrypt(str.toString(), keyy, ivv);
    markdown.innerHTML = decr.trim();
    markdown.style.display=&quot;block&quot;
}

</code></pre></div><p>\u52A0\u5BC6\u8F93\u5165\u6846\u7684css\uFF0C\u4F7F\u7528\u4E86\u9875\u9762\u538B\u7F29\uFF0C\u770B\u8D77\u6765\u6BD4\u8F83\u4E71\u3002</p><div class="language-"><pre><code>#lock{overflow:hidden;width:248px;position:absolute;left:50%;top:230px;margin-left:-100px}#lock-btn1,#lock-btn2{margin-left:31.5px;float:left;display:block;width:60px;height:20px;border-radius:20px;background-color:transparent;color:#000;-webkit-transition:all 150ms linear;-moz-transition:all 150ms linear;-o-transition:all 150ms linear;-ms-transition:all 150ms linear;transition:all 150ms linear;font-size:14px;font-weight:normal;text-align:center;border:1px solid #66615b}#lock-btn2{margin-left:61.5px}#lock-btn1:hover,#lock-btn2:hover{background-color:#66615b;color:rgba(255,255,255,0.7);border-color:#66615b}#lock-input,#lock-inputIvv{border-radius:20px;outline:0;padding:0 10px;width:100px;height:20px;background:transparent;color:#000;font-size:1.25em;float:left}#lock-input:hover,#lock-inputIvv:hover{background-color:#66615b;color:rgba(255,255,255,0.7);border-color:rgba(255,255,255,0.7)}
</code></pre></div><p>\u6BCF\u6B21\u9700\u8981\u53D1\u5E03\u52A0\u5BC6\u7684\u6587\u7AE0\u65F6\uFF0C\u5C06\u6587\u7AE0\u6807\u9898\u547D\u540D\u4E3A\u201D<a href="http://xn--yfru6s.XXX" target="_blank" rel="noopener noreferrer">\u52A0\u5BC6.XXX</a>\u201C\uFF0C\u9875\u9762\u5C31\u4F1A\u51FA\u73B0\u52A0\u5BC6\u89E3\u5BC6\u6846\uFF0C\u9996\u6B21\u53D1\u5E03\u8BF7\u8F93\u5165\u5BC6\u94A5\u548C\u5BC6\u94A5\u504F\u79FB\u91CF \u70B9\u51FB\u52A0\u5BC6\uFF0C\u62FF\u5230\u5BC6\u6587\u3002\u7136\u540E\u5C06\u6587\u7AE0\u5185\u5BB9\u6539\u4E3A\u5BC6\u6587\u3002\u4FDD\u5B58\u597D\u4F60\u7684\u5BC6\u94A5\u548C\u5BC6\u94A5\u504F\u79FB\u91CF\uFF0C\u4EE5\u540E\u67E5\u770B\u52A0\u5BC6\u6587\u7AE0\u65F6\uFF0C\u8F93\u5165\u5BC6\u94A5\u548C\u5BC6\u94A5\u504F\u79FB\u91CF \u70B9\u51FB\u89E3\u5BC6\uFF0C\u5373\u53EF\u770B\u5230\u539F\u59CB\u7684\u6587\u7AE0\u3002 \u4EE3\u7801\u6548\u679C\u5982\u4E0B\u4E24\u56FE</p><p><img src="https://cdn.jsdelivr.net/gh/xiyuvi/img@master/bne2v9.5t0xieeew6tc.webp" alt=""></p><p><img src="https://cdn.jsdelivr.net/gh/xiyuvi/img@master/bneWuR.6gma4nc7ozk0.webp" alt=""></p>`,19),a=[p];function c(i,d,s,l,u,y){return e(),n("div",null,a)}var m=t(o,[["render",c]]);export{g as __pageData,m as default};
