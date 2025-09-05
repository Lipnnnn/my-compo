# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

> 发布包
> - `npm publish --access public`


在`packge.json`中配置了`"prepublishOnly": "npm run build"`，确保在发布之前先构建项目

前提：
1. 要确保已经登录 npm 账号
- `npm whoami` 命令 查看当前是否已经登录
- `npm login` 进行登录
2. 确保使用的npm镜像源是npm官方的
- `nrm ls` 命令 查看当前使用的镜像源 （如果没有nrm，就`npm install -g nrm` 安装 nrm）
- `nrm use npm` 使用官方镜像源
