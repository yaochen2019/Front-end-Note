# File Blob FileReader ArrayBuffer Base64


## Blob 二进制大对象
Blob对象不可修改，只可以使用FileReader读取

### 创建new Blob(array,options)
 array: ArrayBuffer ArrayBufferView Blob DOMString

 option:{
    type:默认值为“”，表示将会被放入到blob中的数组内容的MIME类型
    endings：默认为transparent用于指定，用于指定包含行结束符\n的字符串如何写入，不常用
 }


### 分片 slice()
blob对象内置了slice()方法用来将 blob对象分片有三个参数

start：切片起点
end：设置切片结束点
contentType：设置新的blob的MIME类型，如果省略type，则默认为blob原始值


## File对象是特殊的Blob
在javascript中主要有两种方法来获取File
1： input元素上选择文件后返回的FileList对象
2： 文件拖拽操作生成的DataTransfer对象


## FileReader
FileReader有4个方法

(读取文件后想要打印文件要在onload方法里面)
readAsArrayBuffer：读取指定的Bolb完成之后会在result属性中展示结果
readAsBinaryString
readAsDataURL
readAsText

## ArrayBuffer 特殊的数组
ArrayBuffer本身就是一个黑盒，不能直接读写所存储的数据，需要借助以下视图对象来读写

通过TypeArray和DataView来操作ArrayBuffer
他们两的区别就是
TypeArray是只能存同一个数据类型(有9种数据类型)
DataView可以是不同数据类型

TypeArray 的9种数据类型
int8 字节1 8位有符号数


### 创建ArrayBuffer
new ArrayBuffer(bytelength)


## ObjectURL
他是一个用来表示File Object或Blob的URL地址


## base64
在javascript种有两个函数被分别用来处理解码和编码的base64字符串

1. atob():解码
2. btoa():编码

将canvas画布内容生成base64图片
将获取的图片文件生成base64图片


# ArrayBuffer
