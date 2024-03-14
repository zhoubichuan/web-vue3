import{_ as s,o as n,c as l,a}from"./app.8390b8a1.js";const e={},p=a(`<h1 id="\u5341-\u670D\u52A1\u7AEF\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u5341-\u670D\u52A1\u7AEF\u6E32\u67D3" aria-hidden="true">#</a> \u5341.\u670D\u52A1\u7AEF\u6E32\u67D3</h1><div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>vue \u9879\u76EE\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u573A\u666F\uFF0C\u4EE5\u53CA\u5DE5\u5177\u7684\u9009\u578B\u4E0E\u7528\u6CD5</p></div><h2 id="_1-\u670D\u52A1\u7AEF\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#_1-\u670D\u52A1\u7AEF\u6E32\u67D3" aria-hidden="true">#</a> 1.\u670D\u52A1\u7AEF\u6E32\u67D3</h2><p>\u6982\u5FF5\uFF1A\u653E\u5728\u6D4F\u89C8\u5668\u8FDB\u884C\u5C31\u662F\u6D4F\u89C8\u5668\u6E32\u67D3,\u653E\u5728\u670D\u52A1\u5668\u8FDB\u884C\u5C31\u662F\u670D\u52A1\u5668\u6E32\u67D3\u3002</p><ul><li>\u5BA2\u6237\u7AEF\u6E32\u67D3\u4E0D\u5229\u4E8E SEO \u641C\u7D22\u5F15\u64CE\u4F18\u5316</li><li>\u670D\u52A1\u7AEF\u6E32\u67D3\u662F\u53EF\u4EE5\u88AB\u722C\u866B\u6293\u53D6\u5230\u7684\uFF0C\u5BA2\u6237\u7AEF\u5F02\u6B65\u6E32\u67D3\u662F\u5F88\u96BE\u88AB\u722C\u866B\u6293\u53D6\u5230\u7684</li><li>SSR \u76F4\u63A5\u5C06 HTML \u5B57\u7B26\u4E32\u4F20\u9012\u7ED9\u6D4F\u89C8\u5668\u3002\u5927\u5927\u52A0\u5FEB\u4E86\u9996\u5C4F\u52A0\u8F7D\u65F6\u95F4\u3002</li><li>SSR \u5360\u7528\u66F4\u591A\u7684 CPU \u548C\u5185\u5B58\u8D44\u6E90</li><li>\u4E00\u4E9B\u5E38\u7528\u7684\u6D4F\u89C8\u5668 API \u53EF\u80FD\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528</li><li>\u5728 vue \u4E2D\u53EA\u652F\u6301 beforeCreate \u548C created \u4E24\u4E2A\u751F\u547D\u5468\u671F</li><li>Nuxt.js \u662F\u4F7F\u7528 Webpack \u548C Node.js \u8FDB\u884C\u5C01\u88C5\u7684\u57FA\u4E8E Vue \u7684 SSR \u6846\u67B6</li></ul><h2 id="_2-\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-\u6848\u4F8B" aria-hidden="true">#</a> 2.\u6848\u4F8B</h2><ul><li>package.json</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">{</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;name&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;ssr&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;version&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;1.0.0&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;description&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;main&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;index.js&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;scripts&quot;</span><span style="color:#24292F;">: {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;test&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;echo </span><span style="color:#0550AE;">\\&quot;</span><span style="color:#0A3069;">Error: no test specified</span><span style="color:#0550AE;">\\&quot;</span><span style="color:#0A3069;"> &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span style="color:#24292F;">  },</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;author&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;license&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;ISC&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">&quot;dependencies&quot;</span><span style="color:#24292F;">: {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;express&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^4.16.3&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;vue&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^2.5.17&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">&quot;vue-server-renderer&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;^2.5.17&quot;</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>index.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#6E7781;">//\u7B2C\u4E00\u6B65\uFF1A\u521B\u5EFA\u4E00\u4E2Avue\u5B9E\u5217</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Vue</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">require</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;vue&quot;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">app</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">Vue</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">  template: </span><span style="color:#0A3069;">\`&lt;div&gt;Hello World&lt;/div&gt;\`</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">renderer</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">require</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;vue-server-renderer&quot;</span><span style="color:#24292F;">).</span><span style="color:#8250DF;">createRenderer</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">  template: </span><span style="color:#0550AE;">require</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;fs&quot;</span><span style="color:#24292F;">).</span><span style="color:#8250DF;">readFileSync</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">\`./index.html\`</span><span style="color:#24292F;">, </span><span style="color:#0A3069;">&quot;utf-8&quot;</span><span style="color:#24292F;">),</span></span>
<span class="line"><span style="color:#24292F;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">renderer.</span><span style="color:#8250DF;">renderToString</span><span style="color:#24292F;">(app, (</span><span style="color:#953800;">err</span><span style="color:#24292F;">, </span><span style="color:#953800;">html</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(html) </span><span style="color:#6E7781;">//html \u5C06\u662F\u6CE8\u5165\u5E94\u7528\u7A0B\u5E8F\u5185\u5BB9\u7684\u5B8C\u6574\u9875\u9762</span></span>
<span class="line"><span style="color:#24292F;">})</span></span>
<span class="line"><span style="color:#6E7781;">//\u7B2C\u4E8C\u6B65\uFF1A\u521B\u5EFA\u4E00\u4E2A renderer</span></span>
<span class="line"><span style="color:#6E7781;">// const renderer = require(&quot;vue-server-renderer&quot;).createRenderer();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;">//\u7B2C\u4E09\u6B65\uFF1A\u5C06vue \u5B9E\u5217\u6E32\u67D3\u4E3Ahtml</span></span>
<span class="line"><span style="color:#6E7781;">// renderer.renderToString(app, (err, html) =&gt; {</span></span>
<span class="line"><span style="color:#6E7781;">//   if (err) throw err;</span></span>
<span class="line"><span style="color:#6E7781;">//   console.log(html);</span></span>
<span class="line"><span style="color:#6E7781;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;">//\u57282.5.0+ \u5982\u679C\u6CA1\u6709\u4F20\u5165\u56DE\u8C03\u51FD\u6570\uFF0C\u5219\u8FD4\u56DEPromise</span></span>
<span class="line"><span style="color:#6E7781;">// renderer</span></span>
<span class="line"><span style="color:#6E7781;">//   .renderToString(app)</span></span>
<span class="line"><span style="color:#6E7781;">//   .then(html =&gt; {</span></span>
<span class="line"><span style="color:#6E7781;">//     console.log(html);</span></span>
<span class="line"><span style="color:#6E7781;">//   })</span></span>
<span class="line"><span style="color:#6E7781;">//   .catch(err =&gt; {</span></span>
<span class="line"><span style="color:#6E7781;">//     console.log(err);</span></span>
<span class="line"><span style="color:#6E7781;">//   });</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>index.html</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">&lt;!</span><span style="color:#0550AE;">DOCTYPE</span><span style="color:#24292F;"> html</span><span style="color:#CF222E;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">html</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">lang</span><span style="color:#CF222E;">=</span><span style="color:#0A3069;">&quot;en&quot;</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">head</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    &lt;</span><span style="color:#116329;">title</span><span style="color:#24292F;">&gt;hello&lt;/</span><span style="color:#116329;">title</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">head</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">body</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    &lt;!--vue-ssr-outlet--&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">body</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">html</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>express.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Vue</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">require</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;vue&quot;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">server</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">require</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;express&quot;</span><span style="color:#24292F;">)()</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">renderer</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">require</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;vue-server-renderer&quot;</span><span style="color:#24292F;">).</span><span style="color:#8250DF;">createRenderer</span><span style="color:#24292F;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">server.</span><span style="color:#8250DF;">get</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;*&quot;</span><span style="color:#24292F;">, (</span><span style="color:#953800;">req</span><span style="color:#24292F;">, </span><span style="color:#953800;">res</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">app</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">Vue</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">    data: {</span></span>
<span class="line"><span style="color:#24292F;">      url: req.url,</span></span>
<span class="line"><span style="color:#24292F;">    },</span></span>
<span class="line"><span style="color:#24292F;">    template: </span><span style="color:#0A3069;">\`&lt;div&gt;\u8BBF\u95EE\u7684 url \u662F\uFF1A{{ url }}&lt;/div&gt;\`</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">  })</span></span>
<span class="line"><span style="color:#24292F;">  renderer.</span><span style="color:#8250DF;">renderToString</span><span style="color:#24292F;">(app, (</span><span style="color:#953800;">err</span><span style="color:#24292F;">, </span><span style="color:#953800;">html</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">if</span><span style="color:#24292F;"> (err) {</span></span>
<span class="line"><span style="color:#24292F;">      res.</span><span style="color:#8250DF;">status</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">500</span><span style="color:#24292F;">).</span><span style="color:#8250DF;">end</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;Internal Server Error&quot;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#CF222E;">return</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">    res.</span><span style="color:#8250DF;">end</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">\`</span></span>
<span class="line"><span style="color:#0A3069;">        &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#0A3069;">        &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#0A3069;">            &lt;head&gt;&lt;meta charset=&quot;UTF-8&quot;&gt;&lt;title&gt;Hello&lt;/title&gt;&lt;/head&gt;</span></span>
<span class="line"><span style="color:#0A3069;">            &lt;body&gt;\${</span><span style="color:#24292F;">html</span><span style="color:#0A3069;">}&lt;/body&gt;</span></span>
<span class="line"><span style="color:#0A3069;">        &lt;/html&gt;</span></span>
<span class="line"><span style="color:#0A3069;">    \`</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">  })</span></span>
<span class="line"><span style="color:#24292F;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">server.</span><span style="color:#8250DF;">listen</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">8080</span><span style="color:#24292F;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[p];function r(c,t){return n(),l("div",null,o)}const y=s(e,[["render",r],["__file","10.server.html.vue"]]);export{y as default};