import{_ as s,o as a,c as n,a as e}from"./app.8390b8a1.js";const l={},o=e(`<h1 id="\u4E09-vue-router-4-x" tabindex="-1"><a class="header-anchor" href="#\u4E09-vue-router-4-x" aria-hidden="true">#</a> \u4E09.Vue-Router 4.x</h1><div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u8865\u5145\u4E00\u4E9B\u5B98\u65B9\u6587\u6863\u4E2D\u6CA1\u6709\u7684\uFF0C\u4F46\u662F\u5B9E\u9645\u5F00\u53D1\u4E2D\u6700\u597D\u9700\u8981\u4E86\u89E3\u7684\u5185\u5BB9</p></div><ul><li>vue-router 4 \u7684\u65B0\u529F\u80FD</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#6E7781;">// \u5B88\u536B\u4E0D\u518D\u9700\u8981next\uFF0C\u5E76\u4E14\u652F\u6301async</span></span>
<span class="line"><span style="color:#24292F;">router.</span><span style="color:#8250DF;">beforeEach</span><span style="color:#24292F;">(</span><span style="color:#CF222E;">async</span><span style="color:#24292F;"> (</span><span style="color:#953800;">to</span><span style="color:#24292F;">, </span><span style="color:#953800;">from</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#6E7781;">// canUserAccess() returns \`true\` or \`false\`</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">await</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">canUserAccess</span><span style="color:#24292F;">(to)</span></span>
<span class="line"><span style="color:#24292F;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u77E5\u8BC6\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u77E5\u8BC6\u7ED3\u6784" aria-hidden="true">#</a> \u77E5\u8BC6\u7ED3\u6784</h2><ul><li>\u8DEF\u7531\u5BF9\u8C61</li></ul>`,6),r=[o];function c(t,p){return a(),n("div",null,r)}const d=s(l,[["render",c],["__file","3.vue-router.html.vue"]]);export{d as default};