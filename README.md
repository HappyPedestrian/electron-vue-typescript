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
