# 定义全局函数和属性

在main.ts中在app上挂载全局函数和属性如下
app.config.globalProperties.$filters={
    format<T>(str:T):string{
        return `真.${str}`
    }
}

现在可以在vue全局使用$filters.fomat("数据")

## 但是现在会报错需要添加一个filter的声明文件

type Filter = {
    format:<T>(str:T)=> string
}//对filters函数做修饰
declare module "@vue/runtime-core" {
    export interface ComponentsCustomProperties {
        $filters：Filter
    }
}