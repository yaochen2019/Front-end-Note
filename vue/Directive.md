## Directive
自定义指令

//在以下所有生命周期中都可以拿到绑定的真实DOM和指令所传递的参数
const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) {
    // 下面会介绍各个参数的细节
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {}
}


el：指令绑定到的元素。这可以用于直接操作 DOM。

binding：一个对象，包含以下属性。
    value：传递给指令的值。例如在 v-my-directive="1 + 1" 中，值是 2。
    oldValue：之前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否更改，它都可用。
    arg：传递给指令的参数 (如果有的话)。例如在 v-my-directive:foo 中，参数是 "foo"。
    modifiers：一个包含修饰符的对象 (如果有的话)。例如在 v-my-directive.foo.bar 中，修饰符对象是 { foo: true, bar: true }。
    instance：使用该指令的组件实例。
    dir：指令的定义对象。
vnode：代表绑定元素的底层 VNode。

prevNode：之前的渲染中代表指令所绑定元素的 VNode。仅在 beforeUpdate 和 updated 钩子中可用

### 函数简写
如果你只关心在mounted和update时触发相同的行为
const vMove:Directive = (el,binding:DirectiveBinding) => {
    //逻辑代码
}


# 使用自定义指令
<A v-move="{background:blue}"></A>


# 在组件上应用的时候

当在组件上使用自定义指令时，它会始终应用于组件的根节点，和透传 attributes 类似