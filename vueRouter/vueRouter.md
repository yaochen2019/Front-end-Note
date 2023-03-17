# vueRouter是插件
Vue.use(VueRouter)

# 新开一个router文件，然后创建index.js
const router = new VueRouter({
    routes:[
        {
            path:'/about',
            component:About,
            children:[
                {
                     path:"news",
                     component:News;
                },
                {
                    path:"messages",
                    component:Messages
                }
            ]
        },
        {
            path:'/home'
            component:Home
        }
    ]
})


# 将router在Vue上注册


# 组件里注册路由
    <router-link class="active" to="/about"></router>

    

# 展示对应的路由
    在路由展示的地方添加<router-view></router-view>


# 路由注册里的简写形式
<router-link :to={name:"guanyu"}></router-link>
需要在路由表中
{
            name:'guanyu'
            path:'/about',
            component:About,
}
