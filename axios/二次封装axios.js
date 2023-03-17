import axios from 'axios';
const service = axios.create({
    baseURL:"http"
});

//请求拦截器 ===> 前端给后端发送数据[还没有到后端]
//做的事情,可能需要往服务器端携带token
service.interceptors.request.use(config => {
    return config;
},error => {
    Promise.reject(error)
})


//响应拦截器 ===> 后端给前端发送数据[还有到前端]
//判断下请求码的状态
service.interceptors.response.use(response => {
    return response.data
    
},
    error =>{
        return Promise.reject(new Error(error.response.data))
    }
)