# vue3-ts-template

基于element plus的vue3.0+ts+vite的系统模板

## features

-   **夜间模式**：自定义主题色，支持夜间模式
-   **国际化**：支持中英文切换
-   **动画效果**：页面切换和元素进入时有动画效果

## todo

-   [ ] 加载效果
-   [ ] 权限路由
-   [ ] 优化动画效果
-   [ ] Eslint代码规范化
-   [x] mock模拟数据

## 代码结构

src目录树如下：

``` plain

├── api                      接口请求
├── assets                   静态资源
├── components               公共组件
├── hook                     公共hook
├── layout                   页面布局
├── locale                   国际化
├── router                   路由
├── store                    pinia状态管理
├── styles                   公共样式
├── utlis                    公共方法
├── views                    页面
├── App.vue                  入口页面
├── env.d.ts                 环境变量
├── lang.d.ts                语言声明文件
├── main.ts                  入口文件
└── vite-env.d.ts            vite环境变量
```

## 安装

### 前置条件

- Node.js >= 16.0 （ node安装教程：https://www.runoob.com/nodejs/nodejs-install-setup.html ）

- 操作系统: Linux, Windows, Mac OSX

- 参考运行环境：node-16.17.0，windows-10

### 安装前端依赖

进入目录后，终端输入如下命令即可安装所有依赖。

```bash
npm install
```
## 运行

### 启动Web前端

进入目录，运行`npm run dev`，即可启动Web前端。启动后，可在浏览器中输入`http://127.0.0.1:8080`访问系统。

### 系统logo来源 
https://js.design/community?category=detail&type=resource&id=62ec394df46c9f794d2be2db

## 预览

主页

![image](https://user-images.githubusercontent.com/90198481/212660162-11c2ddac-6a1c-44f9-968e-7405ebdedd98.png)

夜间模式

![image](https://user-images.githubusercontent.com/90198481/212660256-48d991cb-e450-4442-915a-0a9bf7e4fc13.png)

英文版主页

![image](https://user-images.githubusercontent.com/90198481/212660398-a528ba94-4d30-4ce5-a8fa-7a41e60fdf3c.png)