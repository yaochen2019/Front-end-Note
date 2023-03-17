# TypeScript和JavaScript比较
Javascript :动态类型 弱类型语言
Typescript :静态类型 弱类型语言

静态类型： 
1. 可读性增强:基于语法解析TSDoc，idel增强
2. 可维护性增强：在编译阶段暴露大部分错误
所以可以在多人合作的大型项目中，获得更好的稳定性和开发效率

JS超集
1. 包含兼容JS所有特性，支持共存
2. 支持渐进式引入与升级


# TS的基本语法
1. 基本类型
   1. const q:string = "string";

2. 对象类型
   1. 使用interface来声明一个对象类型
   2. [key:string]:any(当声明的interface有不确定的key时候可以这样声明)
   3. hobby?:string(hobby是一个可选属性)
   4. readonly jobId：number（代表jobId属性是一个只读属性）

3. 函数类型
   interface IMult{
    (x:numbr,y:number):number;  函数类型的声明
   }
   const mult：Imult = (x,y)=>x*y 函数类型的初始化

4. 函数重载

5. 数组类型
   Record 某一种对象类型
6. 为什么使用泛型

7. 类型别名和类型断言

8. 字符串数字 字面量


高级typescript
//联合或者交叉类型

1. 联合类型： IA | IB 联合类型表示一个值可以是几种类型
2. 交叉类型：IA & IB 多种类型叠加到一起成为一种类型，它包含了所需所有类型的特性

type IBookList = Array<{author:string}&({type:"history",range:string} | {type:"story",theme:string})>


1. 类型保护
访问联合类型时，处于程序安全，仅能访问联合类型中的交集部分

1. 类型守卫
   当两个类型没有任何重合属性的时候需要写一个类型守卫

Partial<T>代表将类型的属性变为可选
Required<T>将类型属性变为必选

keyof关键字 相当于取值对象中所有key组成的字符串字面量
如： type IKeys = keyof {a:string;b:number};=> type IKeys = "a" | "b"

关键字 in 其代表取值字符串中的一种可能，配合泛型P，即代表每个Key

关键字?:通过设定对象可选选项，即自动推导出子集类型

2. 函数的返回值类型

extend出现在泛型的声明中表示对泛型的限制
出现在其他地方代表的是一个泛型推断

关键字 infer 出现在类型推断中，代表定义类型变量，可以用于指代类型


## 工程应用
1. 配置webapack loader相关配置
2. 配置tsconfig.js文件
3. 运行webpack启动打包
4. loader处理TS文件时，会进行编译与类型检查
   


