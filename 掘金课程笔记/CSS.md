# 如何在页面中使用css
1. 外链 <link rel="stylesheet" href="">
2. 嵌入 <style></style>
3. 内联 <p style="">

# 选择器
1. 元素选择器
2. id选择器（id属性要唯一）
3. 类选择器
4. 属性选择器 (
   1. [disabled] 选中所有带有disabled属性的元素 
   2. input[type="password"]选中input元素中type属性为password的属性
   3. a[href^="#"] 选中a标签中href属性值以#开头的元素
   4. a[href$=".jpg"] 选中a标签中href属性值以$结尾的元素
5. 伪类选择器
   1. 状态类伪类
      1. a:link 默认状态下的样式
      2. a:visited 访问过的样式
      3. a:hover 鼠标放上去的样式
      4. a:active 鼠标按下去的样式
      5. :focus 聚焦于元素下的状态
   2. 结构伪类
      1. li:first-child 选中第一个li标签
6. 组合选择器
   1. input.error 选中input元素且带有class为error的元素

# 字体 font-family
body{
    font-family:Helvetica,san-serif  可以设置多个字体格式以方便在不同设备上显示(如果只设置一种万一有的设备不支持)（建议英文字体写在中文字体前面）
}
line-height 表示两行文字之间的距离

wihte-space 控制文本的空格和换行方式
  1. normal 多个空格合并
  2. nowarp 强制不换行
  3. pre 保留所有的
  4. pre-warp 一行内显示不下自动换行 保留空格
  5. pre-line 删除空格 保留换行


# 选择器的特异度（specificity）


# css的继承
颜色会继承
文字相关的一些属性会继承
一般盒模型相关元素不继承
如果想让盒模型继承可以通过全局设置box-sizing
*{
    box-sizing：inherit
}

# css初始值
css中在某些属性没有继承也没有显示声明的时候是有一些默认的初始值
1. background的初始值为transparent
2. margin-left为0
可以通过inital显示重置为初始值
background-color:inital


# 布局相关技术
1. 常规流
   1. 行级
   2. 块级
   3. 表格布局
   4. flexbox
   5. grid
2. 浮动
3. 绝对定位

# height
1. 指定content box高度
2. 取值有长度、百分数、auto
3. auto经由计算得来
4. 百分数相对于容器的content box高度
5. 容器有指定高度的时候百分比才生效

# padding
1. 指定四个方向上的内边距
2. 百分数相对于容器的宽度
   
# border
三种属性
  1. border-width
  2. border-style
  3. border-color
四个方向

# margin
1. 指定元素四个方向的外边距
2. 取值可以是长度、百分比、auto
3. 百分比取决于容器的宽度
使用margin：auto 进行水平居中
## margin collapse
垂直方向的一个重叠

# 块级 vs 行级
块级：不和其他盒子并列排放，适用所有的盒模型属性
块级元素包括：body article div main section h1-6 p ul li等（可以通过display：block）
行级：和其他盒子一起放在一行，盒模型中的height和width不适用
行级盒子包括：span em strong cite code（可以通过display：inline）
inline-block:本身是行级的，可以放在行盒中 可以设置宽高 作为一个整体不会被拆散成多行


# 行级的排版上下文(IFC)
只包含行级盒子的容器会创建一个IFC
IFC内的排版规则
1. 盒子在一行内水平摆放
2. 一行放不下换行显示
3. text-align决定一行内的水平对齐
4. vertical-aligin 决定一个盒子在行内的垂直对齐
5. 避开浮动元素

overflow-wrap：break-word （单词太长超出显示区域可以适用这个属性）

# 块级格式上下文(BFC)
某些容器会创建BFC
1. 根元素
2. 浮动、绝对定位、inline-block
3. Flex子项和Grid子项
4. overfolw的值不会visible的块盒
5. display:flow-root

BFC内的排版规则
1. 盒子从上到下摆放
2. 垂直margin合并
3. BFC内的margin不会和外部合并
4. BFC不会和浮动元素重叠

# 一个盒子内部既有行级又有块级
<span>
    this is a text  and
    <div>block</div>
</span>
在上述代码中span标签内既有块级元素div又有文本行级元素
这个时候浏览器在渲染的时候会给文本包裹一个匿名的块级元素以来排版


# Flex Box
一种新的排版上下文
它可以控制子级盒子的
1. 摆放流向
   1. justify-content 指定主轴的摆放顺序
   2. align-item 指定侧轴的摆放顺序
   3. align-self 子元素自己设定摆放的顺序   
2. 摆放顺序
3. 盒子的高宽
   1. flex-grow 有剩余空间的时候的伸展能力
   2. flex-shrink 空间不足的时候收缩能力
   3. flex-basis 没有收缩或伸展能力的基础长度
4. 水平和垂直的高度
5. 是否允许折行


# Grid 布局
1. display:grid使元素生成一个块级的grid容器
2. 使用grid-template相关属性讲容器划分为网格
3. 设置每一个子项占哪些行/列

grid line网格线指定放置位置


# float
为了实现文字环绕的效果


# position
1. absolute	生成绝对定位的元素，相对于static定位以外的一个父元素进行定位。元素的位置通过left、top、right、bottom属性进行规定。
2. relative	生成相对定位的元素，相对于其原来的位置进行定位。元素的位置通过left、top、right、bottom属性进行规定。
3. fixed	生成绝对定位的元素，指定元素相对于屏幕视⼝（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变，⽐如回到顶部的按钮⼀般都是⽤此定位⽅式。
4. static	默认值，没有定位，元素出现在正常的文档流中，会忽略 top, bottom, left, right 或者 z-index 声明，块级元素从上往下纵向排布，⾏级元素从左向右排列。
5. inherit	规定从父元素继承position属性的值
6. sticky   粘性定位的元素是依赖于用户的滚动，在 position:relative 与 position:fixed 定位之间切换。它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 **position:fixed;**，它会固定在目标位置。元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同