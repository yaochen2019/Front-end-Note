# scoped原理
1. 给HTML的DOM节点加一个不重复data属性(形如：data-v-123)来表示他的唯一性
2. 在每句css选择器的末尾（编译后的生成的css语句）加一个当前组件的data属性选择器（如[data-v-123]）来私有化样式
3. 如果组件内部包含有其他组件，只会给其他组件的最外层标签加上当前组件的data属性

# 什么是样式穿透
在使用element UI等组件库的时候，当你想修改他们的样式的时候发现无法修改
原因就是Scoped 搞的鬼 他在进行PostCss转化的时候把元素选择器默认放在了最后

Vue 提供了样式穿透:deep() 他的作用就是用来改变 属性选择器的位置

例如 .ipt{
    :deep(input) {
        backgound:red;
    }
}

# 插槽选择器

在A组件中定义插槽
<template>
    <div>
        我是插槽
        <slot></slot>
    </div>
</template>
 
<script>
export default {}
</script>
<style scoped>
当其他组件实现了这个插槽加入了a这个css类
然后再A组件中直接.a{

}
是无法修改插槽的css的
这时候就需要
:slotted(.a) {
    color:red
}


# 全局css 
<style scoped>
:global(div){
    color:red
}
</style>

# 动态css
<template>
    <div class="div">
       小满是个弟弟
    </div>
</template>
 
<script lang="ts" setup>
import { ref } from 'vue'
const red = ref<string>('red')
</script>
 
<style lang="less" scoped>
.div{
   color:v-bind(red) //如果red是对象要加“ ”包裹
}
 
</style>
 
# css module
<style module> 标签会被编译为 CSS Modules 并且将生成的 CSS 类作为 $style 对象的键暴露给组件

<template>
    <div :class="[zs.red,zs.border]">
        小满是个弟弟
    </div>
</template>
 
<style module="zs">
.red {
    color: red;
    font-size: 20px;
}
.border{
    border: 1px solid #ccc;
}
</style>

也可以用