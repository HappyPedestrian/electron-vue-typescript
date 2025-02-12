## 介绍

此项目为基于Electron Forge的Vite + Typescript项目创建的模板项目，增加了vue的支持，且通过cross-env实现不同环境的区分。

## 环境

node版本： 18.19.0+

## 安装

### npm

```
npm install
```

### pnpm

使用pnpm安装需要调整 `node_modules` 结构，使其更接近 `npm` 的行为，否则启动时会导致一些包处理错误:

```
pnpm install --shamefully-hoist
```

## 命令

### 本地开发

开发环境：

```
npm run start:dev
```

测试环境：

```
npm run start:test
```

生产环境：

```
npm run start:prod
```

### 构建

开发环境：

```
npm run make:dev
```

测试环境：

```
npm run make:test
```

生产环境：

```
npm run make:prod
```
