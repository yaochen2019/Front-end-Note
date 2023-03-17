 # 在路由表中
 {
    name:"xiangqing",
    path:"detail/:id/:title",
    component:Detail,
    props:{a:1,b:"hello"}
    //props的第一种写法，值为对象的时候该对象中所有的key-value都以props的形式传给detail组件(死数据)
 }

 {
    name:"xiangqing",
    path:"detail/:id/:title",
    component:Detail,
    props:true
    //第二种props 若props为真则会吧路由收到的params参数以props的形式传给detail组件
 }

  {
    name:"xiangqing",
    path:"detail/:id/:title",
    component:Detail,
    props($route){
        return {id:$route.query.id,title:$route.query.id}
    }
    //第二种props 若props为函数，则会吧返回的值送给组件Detail 的props
 }