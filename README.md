# Fastify 后端项目脚手架

nodejs 后端服务脚手架，用于快速开始后端服务的开发。

* 基于 Fastify 框架
* 使用 Prisma ORM库连接数据库
* 使用 Typescript, 保证类型安全

## Prisma 数据库迁移工具

迁移数据库结构

```shell
npx prisma migrate dev
```

## 常用指令

开发模式启动（包含自动重载, 使用nodemon）
```shell
npm run dev
```

构建

```shell
npm run build
```

部署模式启动

```shell
npm run serve
```
