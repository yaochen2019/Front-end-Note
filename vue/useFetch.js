// fetch.js
import { ref, isRef, unref, watchEffect } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  function doFetch() {
    // 在请求之前重设状态...
    data.value = null
    error.value = null
    // 若 url 确实是一个 ref，它的 .value 会被返回
    // 否则，url 会被原样返回
    fetch(unref(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
  }

  if (isRef(url)) {
    // 若输入的 URL 是一个 ref，那么启动一个响应式的请求
    watchEffect(doFetch)
  } else {
    // 否则只请求一次
    // 避免监听器的额外开销
    doFetch()
  }

  return { data, error }
}


function useFetch2(url){
  const [data,setData] = useState(null)
  useEffect(()=>{
    fetch(url).then(res=>{
      setData(res)
    }).catch((err) =>{
      console.log(`我们再${url}上触发了一个请求错误,错误信息为：${err.message}`)
    })
  },[url])

  return data
}