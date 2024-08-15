# Nyansite-vue

使用Vite + Vue框架，全新页面设计的喵站前端

# 项目启动注意
1.使用pnpm，没有的可以全局安装
```shell
npm i pnpm@latest -g
```

2. 更新依赖可以使用已集成的taze
```shell
pnpm run dep
```
配置文件为：`taze.config.ts`

3. 详细命令请查看`package.json`


# 开发规范
1. 编写Vue组件时，如果一个库使用的频率很高，例如在多个组件都有使用，请勿手动引入库，即不要手写`import xxx from "xxx"`，如果需要引入，请在`vite.config.ts`中配置。

    具体方法请参考[https://unplugin.unjs.io/showcase/unplugin-auto-import.html](https://unplugin.unjs.io/showcase/unplugin-auto-import.html)

    如果只在一个组件中使用，可以单独使用`import`语句引入。

2. 该项目使用基于文件的路由(File-based routing),即类似`Next.js`, `Nuxt.js`的路由形式。对于路由，`pages/index.vue`为入口，如果想创建诸如`/ciallo`的路由，请在pages文件夹下创建一个`ciallo.vue`或者ciallo文件夹，里面创建另一个`index.vue`文件。此外: `[...all].vue`匹配所有不存在路由，即404页面。

    插件项目地址：[https://github.com/posva/unplugin-vue-router](https://github.com/posva/unplugin-vue-router)

3. 样式使用UnoCSS编写，可以和`<style>`标签结合使用，**不要写内联样式！！！**

    UnoCSS官方文档：[https://unocss.dev/](https://unocss.dev/)

    配置文件：`uno.config.ts`

4. 项目集成了Vue实用开发库: VueUse，尽量使用，里面封装了很多方便易用的工具。

    文档：[https://vueuse.org/](https://vueuse.org/)