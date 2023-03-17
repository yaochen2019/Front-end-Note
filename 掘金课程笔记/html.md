# 前端技术栈
1. html（内容）
2. css（样式）
3. javascript（行为）

# 前端应该关注哪些功能
1. 美观
2. 功能
3. 性能
4. 安全
5. 无障碍
6. 兼容性

# 标题
<h-numbr></h-number>
<p></p>

# 列表
1. 顺序列表 <ol><li></li></ol>
2. 无序列表 <ul><li></li></ul>
3. key-value形式 <dl><dt></dt><dd></dd>></dl>（其中dt为key dd为value 一个dt可以对应多个dd）


# 链接 a
src属性表示链接地址
target属性表示链接的打开方式

# 多媒体标签 img audio video
src属性表示链接地址
## img
alt 表示src失效的时候所显示的东西
## audio video
controls 属性表示默认显示浏览器支持的播放控件

# 输入控件
与用户交互的重要控件


# 选择控件
<input type="radio" />
<input type="checkbox" />
<select><option></option></select>
<input list="countries" /> 
<datalist id="countries">
<option></option>
<option></option>
<option></option>   
</datalist>
list属性表示input框带提示功能且提示是与list属性值一样id



# 文本类标签
<blockquote cite> 块级引用cite属性表示引用的文本来自于哪里
<p></p>
</blockquote>


<cite></cite>  短引用 一般用于书名，章节等等

<q></q>  会给引用内容加双引号

<code></code> 页面中的代码可以用

<strong></strong> 强调标签 一般给文本加粗

<em></em> 强调标签一般给文本加斜体


# 内容划分
<header></header>


# 语义化是什么
1. HTML中的元素、属性以及属性值都拥有某些含义
2. 开发者应该遵循语义来编写html
   2.1 有序表用ol 无序列表用ul
   2.2 lang属性表示内容所使用的语言

# 语义化的意义
1. 开发者-修改维护页面    代码可读性
2. 浏览器-展示页面    可维护性
3. 搜索引擎-提取关键词、排序  seo
4. 屏幕阅读器-给盲人读页面内容 提升无障碍

# 语言化的理解
<p>前端工程师的自我修养</p>这里是一个标题你可以用P标签展示但是按照语义化的规定这里更推荐使用<h1>标签来传达标题
