# query参数
<router-link :to="{
    path:"home/message/detail",
    query:{
        id:id,
        title:title
    }
    }" ></router-link>


# quert参数接受 
$router.query.id
$router.query.title

# query无需在路由表中配置



# params参数

<router-link :to="`home/message/detail/${id}/${title}`" ></router-link>


<router-link :to="{name:"guanyu",params:{
    id:id,
    title:title
}}" ></router-link>
param在路由链接里面不能用path，只能用name

# params在路由表中占位
path:"detail/:id/:title"