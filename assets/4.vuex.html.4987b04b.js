import{_ as s,o as n,c as a,a as l}from"./app.8390b8a1.js";const p={},e=l(`<h1 id="\u56DB-vuex-4-x" tabindex="-1"><a class="header-anchor" href="#\u56DB-vuex-4-x" aria-hidden="true">#</a> \u56DB.Vuex 4.x</h1><div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u8865\u5145\u4E00\u4E9B\u5B98\u65B9\u6587\u6863\u4E2D\u6CA1\u6709\u7684\uFF0C\u4F46\u662F\u5B9E\u9645\u5F00\u53D1\u4E2D\u6700\u597D\u9700\u8981\u4E86\u89E3\u7684\u5185\u5BB9</p></div><p>\u5B89\u88C5\u63D2\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">npm install vuex-composition-helpers@next -S</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u76EE\u5F55\u7ED3\u6784</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">\u2514\u2500\u2500 store</span></span>
<span class="line"><span style="color:#24292F;">    \u2514\u2500\u2500 index.ts</span></span>
<span class="line"><span style="color:#24292F;">\u2514\u2500\u2500 main.ts</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { InjectionKey } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;vue&quot;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  ActionTree,</span></span>
<span class="line"><span style="color:#24292F;">  createStore,</span></span>
<span class="line"><span style="color:#24292F;">  GetterTree,</span></span>
<span class="line"><span style="color:#24292F;">  MutationTree,</span></span>
<span class="line"><span style="color:#24292F;">  Store,</span></span>
<span class="line"><span style="color:#24292F;">  StoreOptions,</span></span>
<span class="line"><span style="color:#24292F;">} </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;vuex&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">declare</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">interface</span><span style="color:#24292F;"> </span><span style="color:#953800;">globalStore</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">fakeName</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">globalStoreState</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">globalStore</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  fakeName: </span><span style="color:#0A3069;">&quot;Fake Name&quot;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">globalStoreGetters</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">GetterTree</span><span style="color:#24292F;">&lt;</span><span style="color:#953800;">globalStore</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">any</span><span style="color:#24292F;">&gt; </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">fakeName</span><span style="color:#24292F;">: (</span><span style="color:#953800;">state</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> state.fakeName,</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">globalStoreMutations</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">MutationTree</span><span style="color:#24292F;">&lt;</span><span style="color:#953800;">globalStore</span><span style="color:#24292F;">&gt; </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">UPDATE_FAKE_NAME</span><span style="color:#24292F;">(</span><span style="color:#953800;">state</span><span style="color:#24292F;">, </span><span style="color:#953800;">payload</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">    state.fakeName </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> payload</span></span>
<span class="line"><span style="color:#24292F;">  },</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">globalStoreActions</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">ActionTree</span><span style="color:#24292F;">&lt;</span><span style="color:#953800;">globalStore</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">any</span><span style="color:#24292F;">&gt; </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">updateFakeName</span><span style="color:#24292F;">({ </span><span style="color:#953800;">commit</span><span style="color:#24292F;"> }, </span><span style="color:#953800;">payload</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">commit</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;UPDATE_FAKE_NAME&quot;</span><span style="color:#24292F;">, payload)</span></span>
<span class="line"><span style="color:#24292F;">  },</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">globalStoreOption</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">StoreOptions</span><span style="color:#24292F;">&lt;</span><span style="color:#953800;">globalStore</span><span style="color:#24292F;">&gt; </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  state: globalStoreState,</span></span>
<span class="line"><span style="color:#24292F;">  getters: globalStoreGetters,</span></span>
<span class="line"><span style="color:#24292F;">  mutations: globalStoreMutations,</span></span>
<span class="line"><span style="color:#24292F;">  actions: globalStoreActions,</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">export</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">globalStoreKey</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">InjectionKey</span><span style="color:#24292F;">&lt;</span><span style="color:#953800;">Store</span><span style="color:#24292F;">&lt;</span><span style="color:#953800;">globalStore</span><span style="color:#24292F;">&gt;&gt; </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Symbol</span><span style="color:#24292F;">()</span></span>
<span class="line"><span style="color:#CF222E;">export</span><span style="color:#953800;"> </span><span style="color:#CF222E;">default</span><span style="color:#953800;"> </span><span style="color:#24292F;">createStore</span><span style="color:#953800;"> </span><span style="color:#CF222E;">&lt;</span><span style="color:#953800;"> </span><span style="color:#24292F;">globalStore</span><span style="color:#953800;"> </span><span style="color:#CF222E;">&gt;</span><span style="color:#953800;"> </span><span style="color:#24292F;">globalStoreOption</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { createApp } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;vue&quot;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> App </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;./App.vue&quot;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> store, { globalStoreKey } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;./store&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">app</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">createApp</span><span style="color:#24292F;">(App)</span></span>
<span class="line"><span style="color:#24292F;">app.</span><span style="color:#8250DF;">use</span><span style="color:#24292F;">(store, globalStoreKey)</span></span>
<span class="line"><span style="color:#24292F;">app.</span><span style="color:#8250DF;">mount</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;#app&quot;</span><span style="color:#24292F;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>component.vue</p><div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;</span><span style="color:#116329;">p</span><span style="color:#24292F;">&gt;{{ fakeName }}&lt;/</span><span style="color:#116329;">p</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">script</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">lang</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;ts&quot;</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { defineComponent, inject, reactive, ref } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;vue&quot;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { useStore } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;vuex&quot;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { globalStoreKey } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;../store&quot;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { useState, useActions } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;vuex-composition-helpers&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">export</span><span style="color:#953800;"> </span><span style="color:#CF222E;">default</span><span style="color:#953800;"> </span><span style="color:#8250DF;">defineComponent</span><span style="color:#953800;">({</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#8250DF;">setup</span><span style="color:#953800;">() </span><span style="color:#24292F;">{</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">// \u901A\u8FC7key\u62FF\u5230\u7279\u5B9A\u7684store</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">store</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">useStore</span><span style="color:#24292F;">(globalStoreKey)</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">// \u8FD9\u91CC\u7684 useActions \u7C7B\u4F3C\u4E4B\u524Dvuex\u7684mapActions</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> { </span><span style="color:#0550AE;">updateFakeName</span><span style="color:#24292F;"> } </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">useActions</span><span style="color:#24292F;">(store, [</span><span style="color:#0A3069;">&quot;updateFakeName&quot;</span><span style="color:#24292F;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#6E7781;">// \u8FD9\u91CC\u7684 useState \u7C7B\u4F3C\u4E4B\u524Dvuex\u7684 mapGetters</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#CF222E;">...</span><span style="color:#8250DF;">useState</span><span style="color:#24292F;">(store, [</span><span style="color:#0A3069;">&quot;fakeName&quot;</span><span style="color:#24292F;">]),</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">  }</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">})</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[e];function t(c,r){return n(),a("div",null,o)}const y=s(p,[["render",t],["__file","4.vuex.html.vue"]]);export{y as default};