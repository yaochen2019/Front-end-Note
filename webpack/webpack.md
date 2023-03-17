# Entry
entry 用来指定webpack打包入口


# output
output 用来告诉 webpack 如何将编译后的文件输出到磁盘

# loader
 webpack 开箱即用只支持 JS 和 JSON 两种文件类型，通过 Loaders 去支持其它文件类型并且把它们转化成有效的模块，并且可以添加到依赖图中。 本身是一个函数，接受源文件作为参数，返回转换的结果。


 # plugins
 插件用于 bundle 文件的优化，资源管理和环境变量注入



loader 运行在打包文件之前
plugins 在整个编译周期都起作用

