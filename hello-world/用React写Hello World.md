---
title: 用React写Hello World
tags: React学习笔记
date: 2017-12-15 15:07:14
categories: React学习笔记
---

##### 思路

使用一个新框架首先要建立相应开发环境，引入框架的源文件，然后用框架来写代码，最后把这些代码组织起来。

##### 代码

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <!--  引入 react 的CDN文件和 Babel 编译器 -->
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <!-- 构建容器 -->
    <div id="example"></div>
    <script type="text/babel">
    /* 构建组件 */
    class MyTitle extends React.Component {
      render() {
        return <h1>Hello World</h1>;
      }
    };
    /* 将组件的渲染结果放入容器 */
    ReactDOM.render(
      <MyTitle/>,
      document.getElementById('example')
    );
    </script>
  </body>
</html>
```

##### 其他方法

还有其它方法，比如构建管道创建新应用，或者增加react到原有应用，具体详见[React 官方文档](https://doc.react-china.org/docs/installation.html#%E6%B7%BB%E5%8A%A0-react-%E5%88%B0%E7%8E%B0%E6%9C%89%E5%BA%94%E7%94%A8)。
