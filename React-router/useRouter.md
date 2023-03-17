Create Table of Contents
# useRouter的使用
'''
function App() {
  let element = useRoutes([
    // These are the same as the props you provide to <Route>
    { path: "/", element: <Home /> },
    { path: "dashboard", element: <Dashboard /> },
    {
      path: "invoices",
      element: <Invoices />,
      // Nested routes use a children property, which is also
      // the same as <Route>
      children: [
        { path: ":id", element: <Invoice /> },
        { path: "sent", element: <SentInvoices /> }
      ]
    },
    // Not found routes work as you'd expect
    { path: "*", element: <NotFound /> }
  ]);

  // The returned element will render the entire element
  // hierarchy with all the appropriate context it needs
  return element;
}

'''
# NavLink的使用

<NavLink className={({isActive})=> isActive ? "默认类名 高亮类名" : "默认类名"} to="/路由路径" ></NavLink>


# 使用Param参数

## 在路由表中的path进行相应的占位例如
path:'detail/:id/:title:/:content'

## 在NavLink的地方携带参数
<NavLink to=`detail/${id}/${title}/${content}` ></NavLink>

## 使用useParam接受参数
const {id,title,content} = useParam()


# 使用Search参数

## 在路由表中的path进行相应的占位例如
Search参数无需在路由表中的path进行占位


## 在NavLink的地方携带参数
<NavLink to=`detail?id=${id}&titla=${title}&content=${content}` ></NavLink>


## 使用useSearchParam接受参数
const [search,setSearch] = useSearchParam()
const  id = search.get('id')
const title = search.get('title')
const content = search.get('content')


# 使用State参数

## 在路由表中的path进行相应的占位例如
state参数无需在路由表中的path进行占位

## 在NavLink的地方携带参数
<NavLink to=`detail` state{{id:id,title:title,content:content}} ></NavLink>


## 使用useLocation接受参数

const {state:{id.title,content}} = useLocation()


# 编程式路由导航useNavigate

## 编程式路由的跳转
const navigate = useNavigate()
navigate('detail',{
  state:{
    id:id,
    title:title,
    content:content
  }
})

