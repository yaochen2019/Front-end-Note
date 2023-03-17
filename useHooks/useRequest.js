import React from 'react'
const URL = 'http://localhost:8000/api/users'

//自定义Hooks 根据URL返回数据
export default function useRequest(URL,initalPageInfo) {
    let {currentPage,pageSize} = initalPageInfo
    let [options,setOptions] = useState({
        currentPage:currentPage,
        pageSize:pageSize,
    })
    let [data,setData] = useState({
        totalPage:0,
        list:[]
    });
    function getData(){
        let {currentPage,pageSize} = options;
        fetch(`${URL}?currentPage=${currentPage}&pageSize=${pageSize}`)
        .then(res=>res.json())
        .then(res=>{
            setData({...res})
        });
    }
    useEffect(getData,[options,URL])

  return [data,options,setOptions]
}
