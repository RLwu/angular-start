# Angular2


<img src="images/ng2.jpg"/>


## Quick start
* [官方文档链接](https://angular.io/docs/ts/latest/quickstart.html)

现在用TypeScript构建一个应用

### Installing TypeScript

有两种安装TypeScript工具的方式：

* 通过 npm
* 安装TypeScript’s Visual Studio插件([Visual Studio 2015](https://www.typescriptlang.org/#download-links))

**For NPM users:**

> * 环境准备 : 安装 Node.js and npm
> * 步骤 1 ：创建并配置此项目
> * 步骤 2 ：创建应用
> * 步骤 3 ：创建组件并添加到应用程序中
> * 步骤 4 ：启动应用程序
> * 步骤 5 ：定义作为该应用的宿主的页面
> * 步骤 6 ：构建并运行此应用
> * 步骤 7 ：做一些修改，并立即查看效果
> * 收工，下一步

* 安装nodejs/npm
```
node 》 v5.x.x  (v6.6.0)
npm  》 v3.x.x  (v3.10.8)
```
* 创建工作目录
```

mkdir angular2-app
cd angular2-app
```

* 安装依赖包
```

npm install 

```
* 如果没有typings目录，需手动安装

```
npm run typings install

```

### 创建应用

* 在根目录下创建APPModule

```
mkdir app

app/app.module.ts -->这里是应用的入口点

```

### 创建组件并添加到应用中

> 每个组件都会通过它相关的模块老控制屏幕上的一小块

编辑 app.module.ts ,导入组件

### 启动加载根组件

```
app/main.ts
```

### 定义应用的宿主页面

```
index.html
style.css
```

### 编辑并运行应用程序，启动动态应用服务器localhost:3000

```
npm start
```
