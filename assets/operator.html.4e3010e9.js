import{r as p,a as e,b as n,d as t,F as o,e as s,c,o as l}from"./app.a489c551.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=n("h1",{id:"\u8FD0\u7B97\u7B26\u91CD\u8F7D",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8FD0\u7B97\u7B26\u91CD\u8F7D","aria-hidden":"true"},"#"),s(" \u8FD0\u7B97\u7B26\u91CD\u8F7D")],-1),k=n("p",null,[s("Rust\u53EF\u4EE5\u8BA9\u6211\u4EEC\u5BF9\u67D0\u4E9B\u8FD0\u7B97\u7B26\u8FDB\u884C\u91CD\u8F7D\uFF0C\u8FD9\u5176\u4E2D\u5927\u90E8\u5206\u7684\u91CD\u8F7D\u90FD\u662F\u5BF9"),n("code",null,"std::ops"),s("\u4E0B\u7684trait\u8FDB\u884C\u91CD\u8F7D\u800C\u5B9E\u73B0\u7684\u3002")],-1),d=n("h2",{id:"\u91CD\u8F7D\u52A0\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u91CD\u8F7D\u52A0\u6CD5","aria-hidden":"true"},"#"),s(" \u91CD\u8F7D\u52A0\u6CD5")],-1),b=s("\u6211\u4EEC\u73B0\u5728\u6765\u5B9E\u73B0\u4E00\u4E2A\u53EA\u652F\u6301\u52A0\u6CD5\u7684\u9609\u5272\u7248"),m={href:"https://zh.wikipedia.org/wiki/%E5%A4%8D%E6%95%B0_%28%E6%95%B0%E5%AD%A6%29",target:"_blank",rel:"noopener noreferrer"},f=s("\u590D\u6570"),y=s("\uFF1A"),w=c(`<div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>ops<span class="token punctuation">::</span></span><span class="token class-name">Add</span><span class="token punctuation">;</span>

<span class="token attribute attr-name">#[derive(Debug)]</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">Complex</span> <span class="token punctuation">{</span>
    a<span class="token punctuation">:</span> <span class="token keyword">f64</span><span class="token punctuation">,</span>
    b<span class="token punctuation">:</span> <span class="token keyword">f64</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">Add</span> <span class="token keyword">for</span> <span class="token class-name">Complex</span> <span class="token punctuation">{</span>
    <span class="token keyword">type</span> <span class="token type-definition class-name">Output</span> <span class="token operator">=</span> <span class="token class-name">Complex</span><span class="token punctuation">;</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">add</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> other<span class="token punctuation">:</span> <span class="token class-name">Complex</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Complex</span> <span class="token punctuation">{</span>
        <span class="token class-name">Complex</span> <span class="token punctuation">{</span>a<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">.</span>a<span class="token operator">+</span>other<span class="token punctuation">.</span>a<span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">.</span>b<span class="token operator">+</span>other<span class="token punctuation">.</span>b<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cp1 <span class="token operator">=</span> <span class="token class-name">Complex</span><span class="token punctuation">{</span>a<span class="token punctuation">:</span> <span class="token number">1f64</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token number">2.0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> cp2 <span class="token operator">=</span> <span class="token class-name">Complex</span><span class="token punctuation">{</span>a<span class="token punctuation">:</span> <span class="token number">5.0</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span><span class="token number">8.1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> cp3 <span class="token operator">=</span> cp1 <span class="token operator">+</span> cp2<span class="token punctuation">;</span>
    <span class="token macro property">print!</span><span class="token punctuation">(</span><span class="token string">&quot;{:?}&quot;</span><span class="token punctuation">,</span> cp3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u8F93\u51FA:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Complex { a: 6, b: 10.1}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u5B9E\u73B0\u4E86<code>std::ops::Add</code>\u8FD9\u4E2Atrait\u3002\u8FD9\u65F6\u5019\u6709\u540C\u5B66\u4E00\u62CD\u8111\u95E8\uFF0C\u539F\u6765\u5982\u6B64\uFF0C\u6CA1\u9519\u2026\u2026\u5176\u5B9ERust\u7684\u5927\u90E8\u5206\u8FD0\u7B97\u7B26\u90FD\u662F<code>std::ops</code>\u4E0B\u7684trait\u7684\u8BED\u6CD5\u7CD6\uFF01</p><p>\u6211\u4EEC\u6765\u770B\u770B<code>std::ops::Add</code>\u7684\u5177\u4F53\u7ED3\u6784</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">impl</span> <span class="token class-name">Add</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    <span class="token keyword">type</span> <span class="token type-definition class-name">Output</span> <span class="token operator">=</span> <span class="token keyword">f64</span><span class="token punctuation">;</span>

    <span class="token keyword">fn</span> <span class="token function-definition function">add</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> rhs<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">f64</span> <span class="token punctuation">{</span>
        <span class="token comment">// add an i32 to a Point and get an f64</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u795E\u5947\u7684output\u4EE5\u53CA\u52A8\u6001\u5206\u53D1" tabindex="-1"><a class="header-anchor" href="#\u795E\u5947\u7684output\u4EE5\u53CA\u52A8\u6001\u5206\u53D1" aria-hidden="true">#</a> \u795E\u5947\u7684Output\u4EE5\u53CA\u52A8\u6001\u5206\u53D1</h2><p>\u6709\u7684\u540C\u5B66\u4F1A\u95EE\u4E86\uFF0C\u8FD9\u4E2A<code>Output</code>\u662F\u80BF\u4E48\u56DE\u4E8B\uFF1F\u7B54\uFF0C\u7C7B\u578B\u8F6C\u6362\u54DF\u4EB2\uFF01 \u4E3E\u4E2A\u4E0D\u592A\u6070\u5F53\u7684\u6817\u5B50\uFF0C\u6211\u4EEC\u5728\u73B0\u5B9E\u4E2D\u4F1A\u51FA\u73B0<code>0.5+0.5=1</code>\u8FD9\u6837\u7684\u7B97\u5F0F\uFF0C\u7528Rust\u7684\u8BED\u8A00\u6765\u63CF\u8FF0\u5C31\u662F\uFF1A \u4E24\u4E2A<code>f32</code>\u76F8\u52A0\u5F97\u5230\u4E86\u4E00\u4E2A<code>i8</code>\u3002\u663E\u800C\u6613\u89C1\uFF0COutput\u5C31\u662F\u4E3A\u8FD9\u79CD\u60C5\u51B5\u8BBE\u8BA1\u7684\u3002</p><p>\u8FD8\u662F\u770B\u4EE3\u7801\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>ops<span class="token punctuation">::</span></span><span class="token class-name">Add</span><span class="token punctuation">;</span>

<span class="token attribute attr-name">#[derive(Debug)]</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">Complex</span> <span class="token punctuation">{</span>
    a<span class="token punctuation">:</span> <span class="token keyword">f64</span><span class="token punctuation">,</span>
    b<span class="token punctuation">:</span> <span class="token keyword">f64</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">Add</span> <span class="token keyword">for</span> <span class="token class-name">Complex</span> <span class="token punctuation">{</span>
    <span class="token keyword">type</span> <span class="token type-definition class-name">Output</span> <span class="token operator">=</span> <span class="token class-name">Complex</span><span class="token punctuation">;</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">add</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> other<span class="token punctuation">:</span> <span class="token class-name">Complex</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Complex</span> <span class="token punctuation">{</span>
        <span class="token class-name">Complex</span> <span class="token punctuation">{</span>a<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">.</span>a<span class="token operator">+</span>other<span class="token punctuation">.</span>a<span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">.</span>b<span class="token operator">+</span>other<span class="token punctuation">.</span>b<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">Add</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> <span class="token class-name">Complex</span> <span class="token punctuation">{</span>
    <span class="token keyword">type</span> <span class="token type-definition class-name">Output</span> <span class="token operator">=</span> <span class="token keyword">f64</span><span class="token punctuation">;</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">add</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> other<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">f64</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>a <span class="token operator">+</span> <span class="token keyword">self</span><span class="token punctuation">.</span>b <span class="token operator">+</span> <span class="token punctuation">(</span>other <span class="token keyword">as</span> <span class="token keyword">f64</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cp1 <span class="token operator">=</span> <span class="token class-name">Complex</span><span class="token punctuation">{</span>a<span class="token punctuation">:</span> <span class="token number">1f64</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token number">2.0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> cp2 <span class="token operator">=</span> <span class="token class-name">Complex</span><span class="token punctuation">{</span>a<span class="token punctuation">:</span> <span class="token number">5.0</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span><span class="token number">8.1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> cp3 <span class="token operator">=</span> <span class="token class-name">Complex</span><span class="token punctuation">{</span>a<span class="token punctuation">:</span> <span class="token number">9.0</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span><span class="token number">20.0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> complex_add_result <span class="token operator">=</span> cp1 <span class="token operator">+</span> cp2<span class="token punctuation">;</span>
    <span class="token macro property">print!</span><span class="token punctuation">(</span><span class="token string">&quot;{:?}\\n&quot;</span><span class="token punctuation">,</span> complex_add_result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token macro property">print!</span><span class="token punctuation">(</span><span class="token string">&quot;{:?}&quot;</span><span class="token punctuation">,</span> cp3 <span class="token operator">+</span> <span class="token number">10i32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Complex { a: 6, b: 10.1 }
39
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5BF9\u8303\u578B\u7684\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8303\u578B\u7684\u9650\u5236" aria-hidden="true">#</a> \u5BF9\u8303\u578B\u7684\u9650\u5236</h2><p>Rust\u7684\u8FD0\u7B97\u7B26\u662F\u57FA\u4E8Etrait\u7CFB\u7EDF\u7684\uFF0C\u540C\u6837\u7684\uFF0C\u8FD0\u7B97\u7B26\u53EF\u4EE5\u88AB\u5F53\u6210\u4E00\u79CD\u5BF9\u8303\u578B\u7684\u9650\u5236\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD9\u4E48\u8981\u6C42<code>\u8303\u578BT\u5FC5\u987B\u5B9E\u73B0\u4E86trait Mul&lt;Output=T&gt;</code>\u3002 \u4E8E\u662F\uFF0C\u6211\u4EEC\u5F97\u5230\u4E86\u5982\u4E0B\u7684\u4E00\u4EFD\u4EE3\u7801\uFF1A</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>ops<span class="token punctuation">::</span></span><span class="token class-name">Mul</span><span class="token punctuation">;</span>

<span class="token keyword">trait</span> <span class="token type-definition class-name">HasArea</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">area</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Square</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">,</span>
    y<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">,</span>
    side<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token class-name">HasArea</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> <span class="token class-name">Square</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span>
        <span class="token keyword">where</span> <span class="token class-name">T</span><span class="token punctuation">:</span> <span class="token class-name">Mul</span><span class="token operator">&lt;</span><span class="token class-name">Output</span><span class="token operator">=</span><span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token operator">+</span> <span class="token class-name">Copy</span> <span class="token punctuation">{</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">area</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">T</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>side <span class="token operator">*</span> <span class="token keyword">self</span><span class="token punctuation">.</span>side
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token class-name">Square</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">:</span> <span class="token number">0.0f64</span><span class="token punctuation">,</span>
        y<span class="token punctuation">:</span> <span class="token number">0.0f64</span><span class="token punctuation">,</span>
        side<span class="token punctuation">:</span> <span class="token number">12.0f64</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Area of s: {}&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u5BF9\u4E8Etrait <code>HasArea&lt;T&gt;</code>\u548C struct <code>Square&lt;T&gt;</code>\uFF0C\u6211\u4EEC\u901A\u8FC7<code>where T: Mul&lt;Output=T&gt; + Copy</code> \u9650\u5236\u4E86<code>T</code>\u5FC5\u987B\u5B9E\u73B0\u4E58\u6CD5\u3002\u540C\u65F6Copy\u5219\u9650\u5236\u4E86Rust\u4E0D\u518D\u5C06self.side\u7ED9move\u5230\u8FD4\u56DE\u503C\u91CC\u53BB\u3002</p><p>\u5199\u6CD5\u7B80\u5355\uFF0C\u8F7B\u677E\u6109\u5FEB\u3002</p>`,17);function h(g,x){const a=p("ExternalLinkIcon");return l(),e(o,null,[i,k,d,n("p",null,[b,n("a",m,[f,t(a)]),y]),w],64)}var C=u(r,[["render",h],["__file","operator.html.vue"]]);export{C as default};