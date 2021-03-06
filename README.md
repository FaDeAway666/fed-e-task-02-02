## 1、Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。

Webpack的构建流程主要包括：

1. 初始化参数：从配置文件和命令行语句中读取并合并参数，得出最终的参数
2. 开始编译：用上一步得到的参数初始化Compiler对象，加载所有配置的插件，执行对象的run方法开始执行编译
3. 确定入口：根据配置文件中的entry属性找出入口文件
4. 编译模块：根据配置的loader，对从入口文件开始，递归地去寻找所有互相依赖的模块，并对它们进行处理（转换，文件复制），最后得出一个模块间的依赖关系，以及每个模块处理后的内容
5. 输出资源：根据模块之间的依赖关系，组装成包含多个模块的chunk，再把每个chunk转换成文件，根据配置好的输出路径和文件名，写入到输出目录当中

## 2、Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路。

Loader是加载器，是Webpack用来处理不同种类的资源的机制，以js文件作为入口，递归遍历所有引用的资源，然后将其转化为Webpack可以处理的模块。Loader负责实现工程资源的模块化

Plugin是Webpack拓展前端自动化构建能力的机制，包括代码压缩、打包优化、HMR等多种功能，极大丰富了Webpack的生态

Loader最终会导出一个函数，这个函数是对资源的处理过程，最终函数的返回结果是一段JS代码字符串。开发一个Loader，首先应该明确需要对资源进行何种操作（转换、操作文件、代码修改），然后编写相应的逻辑处理该类资源，并返回JS代码字符串形式的结果。

Plugin依托于Webpack的钩子机制，根据这些几乎覆盖整个工作流程的钩子函数，可以在相应阶段执行插件功能。开发Plugin首先需要明确Plugin的功能需要挂载在Webpack的哪一个钩子上，在相应的钩子上，使用compiler获取打包的上下文，根据设计的功能来处理打包结果。

