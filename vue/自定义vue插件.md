<template>

 <div v-if="isShow" >
    Loading
 </div>

</template>
<script setup lang='ts' >
import { reactive,ref} from 'vue'
const isShow = ref<boolean>(false)

const show = ()=> isShow.value = true
const hide = ()=> isShow.value = false

defineExpose({
    show,
    hide,
    isShow
}) 将他们暴露出去
</script>


# 现在app中注册上述组件
app.use(Loading)


# 在全局注册暴露的组件上的方法或属性

import type {App ,VNode} from 'vue'
import Loading from './index.vue'
import {createVNode,render} from 'vue'

export default {
    install(app:App){
        const Vnode:VNode = createVNode(loading)
        render(Vnode,document.body)
        app.config.globalProperties.$loading = {
            show:Vnode.component?.exposed?.show,
            hide:Vnode.component?.exposed?.hide
        } //在全局上挂载这两个方法
        console.log(Vnode.component.exposed)
    }
}

# 在其他组件调用这两个方法
 import {getCurrentInstance} from 'vue'
 const instance = getCurrentInstance()
 instance?.proxy.$loading.show()


 ## 上述代码可能类型会报错 需要在其他地方进行类型的声明
 type load = {
    show:()=>void,
    hide:()=>void
 }

declare module '@vue/runtime-core'{
    export interface ComponentCustomProperties {
        $loading:load
    }
}
