import{c as n}from"./app.a489c551.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u51FD\u6570\u4E0E\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u4E0E\u65B9\u6CD5" aria-hidden="true">#</a> \u51FD\u6570\u4E0E\u65B9\u6CD5</h1><h2 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h2><p>\u8981\u58F0\u660E\u4E00\u4E2A\u51FD\u6570\uFF0C\u9700\u8981\u4F7F\u7528\u5173\u952E\u5B57<code>fn</code>\uFF0C\u540E\u9762\u8DDF\u4E0A\u51FD\u6570\u540D\uFF0C\u6BD4\u5982</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">add_one</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span>
    x <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5176\u4E2D\u51FD\u6570\u53C2\u6570\u7684\u7C7B\u578B\u4E0D\u80FD\u7701\u7565\uFF0C\u53EF\u4EE5\u6709\u591A\u4E2A\u53C2\u6570\uFF0C\u4F46\u662F\u6700\u591A\u53EA\u80FD\u8FD4\u56DE\u4E00\u4E2A\u503C\uFF0C \u63D0\u524D\u8FD4\u56DE\u4F7F\u7528<code>return</code>\u5173\u952E\u5B57\u3002Rust\u7F16\u8BD1\u5668\u4F1A\u5BF9\u672A\u4F7F\u7528\u7684\u51FD\u6570\u63D0\u51FA\u8B66\u544A\uFF0C \u53EF\u4EE5\u4F7F\u7528\u5C5E\u6027<code>#[allow(dead_code)]</code>\u7981\u7528\u65E0\u6548\u4EE3\u7801\u68C0\u67E5\u3002</p><p>Rust\u6709\u4E00\u4E2A\u7279\u6B8A\u7279\u6027\u9002\u7528\u4E8E\u53D1\u6563\u51FD\u6570 (diverging function)\uFF0C\u5B83\u4E0D\u8FD4\u56DE\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">diverges</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token operator">!</span> <span class="token punctuation">{</span>
    <span class="token macro property">panic!</span><span class="token punctuation">(</span><span class="token string">&quot;This function never returns!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5176\u4E2D<code>panic!</code>\u662F\u4E00\u4E2A\u5B8F\uFF0C\u4F7F\u5F53\u524D\u6267\u884C\u7EBF\u7A0B\u5D29\u6E83\u5E76\u6253\u5370\u7ED9\u5B9A\u4FE1\u606F\u3002\u8FD4\u56DE\u7C7B\u578B<code>!</code>\u53EF\u7528\u4F5C\u4EFB\u4F55\u7C7B\u578B\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">let</span> x<span class="token punctuation">:</span> <span class="token keyword">i32</span> <span class="token operator">=</span> <span class="token function">diverges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> y<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token operator">=</span> <span class="token function">diverges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u533F\u540D\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u51FD\u6570" aria-hidden="true">#</a> \u533F\u540D\u51FD\u6570</h2><p>Rust\u4F7F\u7528\u95ED\u5305 (closure) \u6765\u521B\u5EFA\u533F\u540D\u51FD\u6570\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> plus_num <span class="token operator">=</span> <span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token closure-punctuation punctuation">|</span></span> x <span class="token operator">+</span> num<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5176\u4E2D\u95ED\u5305<code>plus_num</code>\u501F\u7528\u4E86\u5B83\u4F5C\u7528\u57DF\u4E2D\u7684<code>let</code>\u7ED1\u5B9A<code>num</code>\u3002\u5982\u679C\u8981\u8BA9\u95ED\u5305\u83B7\u5F97\u6240\u6709\u6743\uFF0C \u53EF\u4EE5\u4F7F\u7528<code>move</code>\u5173\u952E\u5B57\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">let</span> <span class="token keyword">mut</span> num <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token keyword">mut</span> add_num <span class="token operator">=</span> <span class="token keyword">move</span> <span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token closure-punctuation punctuation">|</span></span> num <span class="token operator">+=</span> x<span class="token punctuation">;</span>   <span class="token comment">// \u95ED\u5305\u901A\u8FC7move\u83B7\u53D6\u4E86num\u7684\u6240\u6709\u6743</span>

    <span class="token function">add_num</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E0B\u9762\u7684num\u5728\u88ABmove\u4E4B\u540E\u8FD8\u80FD\u7EE7\u7EED\u4F7F\u7528\u662F\u56E0\u4E3A\u5176\u5B9E\u73B0\u4E86Copy\u7279\u6027</span>
<span class="token comment">// \u5177\u4F53\u53EF\u89C1\u6240\u6709\u6743(Owership)\u7AE0\u8282</span>
<span class="token macro property">assert_eq!</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u9AD8\u9636\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u9636\u51FD\u6570" aria-hidden="true">#</a> \u9AD8\u9636\u51FD\u6570</h2><p>Rust \u8FD8\u652F\u6301\u9AD8\u9636\u51FD\u6570 (high order function)\uFF0C\u5141\u8BB8\u628A\u95ED\u5305\u4F5C\u4E3A\u53C2\u6570\u6765\u751F\u6210\u65B0\u7684\u51FD\u6570\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">add_one</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token punctuation">{</span> x <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span>

<span class="token keyword">fn</span> <span class="token function-definition function">apply</span><span class="token operator">&lt;</span><span class="token class-name">F</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>f<span class="token punctuation">:</span> <span class="token class-name">F</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span>
    <span class="token keyword">where</span> <span class="token class-name">F</span><span class="token punctuation">:</span> <span class="token class-name">Fn</span><span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span>
<span class="token punctuation">{</span>
    <span class="token function">f</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token operator">*</span> y
<span class="token punctuation">}</span>

<span class="token keyword">fn</span> <span class="token function-definition function">factory</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token class-name">Fn</span><span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token class-name">Box</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token keyword">move</span> <span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>y<span class="token closure-punctuation punctuation">|</span></span> x <span class="token operator">+</span> y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> transform<span class="token punctuation">:</span> <span class="token keyword">fn</span><span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token operator">=</span> add_one<span class="token punctuation">;</span>
    <span class="token keyword">let</span> f0 <span class="token operator">=</span> <span class="token function">add_one</span><span class="token punctuation">(</span><span class="token number">2i32</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> f1 <span class="token operator">=</span> <span class="token function">apply</span><span class="token punctuation">(</span>add_one<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> f2 <span class="token operator">=</span> <span class="token function">apply</span><span class="token punctuation">(</span>transform<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}, {}, {}&quot;</span><span class="token punctuation">,</span> f0<span class="token punctuation">,</span> f1<span class="token punctuation">,</span> f2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> closure <span class="token operator">=</span> <span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>x<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token closure-punctuation punctuation">|</span></span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> c0 <span class="token operator">=</span> <span class="token function">closure</span><span class="token punctuation">(</span><span class="token number">2i32</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> c1 <span class="token operator">=</span> <span class="token function">apply</span><span class="token punctuation">(</span>closure<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> c2 <span class="token operator">=</span> <span class="token function">apply</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>x<span class="token closure-punctuation punctuation">|</span></span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}, {}, {}&quot;</span><span class="token punctuation">,</span> c0<span class="token punctuation">,</span> c1<span class="token punctuation">,</span> c2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> box_fn <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token number">1i32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> b0 <span class="token operator">=</span> <span class="token function">box_fn</span><span class="token punctuation">(</span><span class="token number">2i32</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> b1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">*</span>box_fn<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2i32</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> b2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">&amp;</span>box_fn<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2i32</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}, {}, {}&quot;</span><span class="token punctuation">,</span> b0<span class="token punctuation">,</span> b1<span class="token punctuation">,</span> b2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> add_num <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token punctuation">(</span><span class="token operator">*</span>box_fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> translate<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Fn</span><span class="token punctuation">(</span><span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">i32</span> <span class="token operator">=</span> add_num<span class="token punctuation">;</span>
    <span class="token keyword">let</span> z0 <span class="token operator">=</span> <span class="token function">add_num</span><span class="token punctuation">(</span><span class="token number">2i32</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> z1 <span class="token operator">=</span> <span class="token function">apply</span><span class="token punctuation">(</span>add_num<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> z2 <span class="token operator">=</span> <span class="token function">apply</span><span class="token punctuation">(</span>translate<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}, {}, {}&quot;</span><span class="token punctuation">,</span> z0<span class="token punctuation">,</span> z1<span class="token punctuation">,</span> z2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5</h2><p>Rust\u901A\u8FC7<code>impl</code>\u5173\u952E\u5B57\u5728<code>struct</code>\u3001<code>enum</code>\u6216\u8005<code>trait</code>\u5BF9\u8C61\u4E0A\u5B9E\u73B0\u65B9\u6CD5\u8C03\u7528\u8BED\u6CD5 (method call syntax)\u3002 \u5173\u8054\u51FD\u6570 (associated function) \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u901A\u5E38\u4E3A<code>self</code>\u53C2\u6570\uFF0C\u67093\u79CD\u53D8\u4F53\uFF1A</p><ul><li><code>self</code>\uFF0C\u5141\u8BB8\u5B9E\u73B0\u8005\u79FB\u52A8\u548C\u4FEE\u6539\u5BF9\u8C61\uFF0C\u5BF9\u5E94\u7684\u95ED\u5305\u7279\u6027\u4E3A<code>FnOnce</code>\u3002</li><li><code>&amp;self</code>\uFF0C\u65E2\u4E0D\u5141\u8BB8\u5B9E\u73B0\u8005\u79FB\u52A8\u5BF9\u8C61\u4E5F\u4E0D\u5141\u8BB8\u4FEE\u6539\uFF0C\u5BF9\u5E94\u7684\u95ED\u5305\u7279\u6027\u4E3A<code>Fn</code>\u3002</li><li><code>&amp;mut self</code>\uFF0C\u5141\u8BB8\u5B9E\u73B0\u8005\u4FEE\u6539\u5BF9\u8C61\u4F46\u4E0D\u5141\u8BB8\u79FB\u52A8\uFF0C\u5BF9\u5E94\u7684\u95ED\u5305\u7279\u6027\u4E3A<code>FnMut</code>\u3002</li></ul><p>\u4E0D\u542B<code>self</code>\u53C2\u6570\u7684\u5173\u8054\u51FD\u6570\u79F0\u4E3A\u9759\u6001\u65B9\u6CD5 (static method)\u3002</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">struct</span> <span class="token type-definition class-name">Circle</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">:</span> <span class="token keyword">f64</span><span class="token punctuation">,</span>
    y<span class="token punctuation">:</span> <span class="token keyword">f64</span><span class="token punctuation">,</span>
    radius<span class="token punctuation">:</span> <span class="token keyword">f64</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">new</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token keyword">f64</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token keyword">f64</span><span class="token punctuation">,</span> radius<span class="token punctuation">:</span> <span class="token keyword">f64</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
        <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
            x<span class="token punctuation">:</span> x<span class="token punctuation">,</span>
            y<span class="token punctuation">:</span> y<span class="token punctuation">,</span>
            radius<span class="token punctuation">:</span> radius<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">fn</span> <span class="token function-definition function">area</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">f64</span> <span class="token punctuation">{</span>
        <span class="token namespace">std<span class="token punctuation">::</span></span><span class="token keyword">f64</span><span class="token punctuation">::</span><span class="token namespace">consts<span class="token punctuation">::</span></span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">.</span>radius <span class="token operator">*</span> <span class="token keyword">self</span><span class="token punctuation">.</span>radius<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span> x<span class="token punctuation">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span> radius<span class="token punctuation">:</span> <span class="token number">2.0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// use associated function and method chaining</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Circle</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,22);function t(e,o){return p}var u=s(a,[["render",t],["__file","function-method.html.vue"]]);export{u as default};