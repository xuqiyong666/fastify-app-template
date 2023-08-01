
FROM node:16.19.1

WORKDIR /app

# 修改npm源
RUN npm config set registry https://registry.npmmirror.com/

# 复制全部代码
COPY . /app

RUN cd plugins && npm install && npm run build

RUN npm install && npm run build

CMD ["node", "./dist/server.js"]
