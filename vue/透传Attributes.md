## 什么是透传Attributes
/* 透传 attribute”指的是传递给一个组件，
却没有被该组件声明为 props 或 emits 的 
attribute 或者 v-on 事件监听器。
最常见的例子就是 class、style 和 id */


## 透传Attributes会导致什么

/* 当一个组件以单个元素为根作渲染时，
透传的 attribute 会自动被添加到根元素上 */


## 如何禁用Attributes继承
开启一个额外的<script>块来书写下述选项
<script>
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false
}
</script>

当attributes需要应用在根节点以外的元素上时候我们需要禁用attritube


## 而禁用之后我们可以通过 $attrs这个对象来拿到所有透传的属性和函数
<div class="btn-wrapper">
  <button class="btn" v-bind="$attrs">click me</button>
</div>


# 当透传的组件是一个有着多根节点的组件然后还没有禁用透传就会报错



## 在javascript中访问透传Attributes
如果需要，你可以在 
<script setup> 中使用 
useAttrs() API 来访问一个组件的所有透传 attribute