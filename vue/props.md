# props的声明
一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute

# 如何声明

## 形式一
<script setup>
const props = defineProps(['foo'])

console.log(props.foo)
</script>

## 形式二
defineProps({
  title: String,
  likes: Number
})

## 在TS中的形式
defineProps<{
  title?: string
  likes?: number
}>()


# 声明完之后父组件进行传值

<MyComponent greeting-message="hello" />
greeting-message是kebabe-case命名形式，但是在子组件声明的形式是greetingMessage


# 上述的形式是一些静态的props传值，而动态props传值如下

## 我们可以使用v-bind或缩写：来进行动态的绑定值

<BlogPost :title="post.title" />

## 使用一个对象绑定多个props

const post = {
    id:1,
    title:"my"
}

<BlogPost v-bind="post" /> 等价于 <BlogPost :id="post.id" :title="post.title" />


### TIP
defineProps() 宏中的参数不可以访问 <script setup> 中定义的其他变量，因为在编译时整个表达式都会被移到外部的函数中

### TIP Boolean类型的转换
defineProps({
  disabled: Boolean
})


<!-- 等同于传入 :disabled="true" -->
<MyComponent disabled />

<!-- 等同于传入 :disabled="false" -->
<MyComponent />