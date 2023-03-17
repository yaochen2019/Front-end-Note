# 安装vuex（vue2中使用vux3版本，vue3中使用vuex4版本）
1 npm i vuex
2.

# 创建store文件夹，文件夹下创建index.js
import vuex  from "vuex"
import Vue from "vue"
const actions = {
    key(context,...args){

    }
} 用于响应组件的动作

const mutations = {
    KEY(state,value){
        state.sum += value
    }
} 用于操作数据

const state = {
    sum:0
} 用于存储数据
Vue.use(vuex)
const store = new vuex.store({actions,mutations,state})

export default store

最后在new vue({store,...})加入store

现在在每一个vc上都有一个$store

在vc中 this.$store.dispath("key",...args)触发一个action改变数据

通过this.$store.state拿到存在vuex中的数据


# vuex的新的配置项（非必须，提供逻辑复用）
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

const store = new vuex.store({actions,mutations,state,getters})添加配置项目

# 使用getters

$store.getters.bigSum()这


# 使用mapState(第一种写法)
在computed(){
    ...mapState({he:"sum",xuexiao:'school'})
}

将存在vux中的state通过计算属性挂载在vc上，可以直接拿到对应的值，而不用通过store

# 使用mapState(第二种写法)
在computed(){
    ...mapState(["sum",'school'])
}

# 使用mapGetters(第一种)（从getters读取数据）
在computed(){
    ...mapGetters({bigSum,'bigSum'})
}

# 使用mapGetters(第二种)
在computed(){
    ...mapGetters(['bigSum'])
}


# 使用mapAction
生成对应的方法，方法中会调用dispatch去联系Action
在method{
    ...mapAction(["jiaodd","jiawait"])
}


# 使用使用mapMutations
生成对应的方法，方法中会调用commit取联系mutation
在methods:{
    ...mapMutations({increment:"jia",decrement:"jian"})
}
