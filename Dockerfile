FROM node:20.0.0
RUN mkdir -p /
WORKDIR /
COPY package.json /
#设置npm下载依赖来源为淘宝源
RUN npm config set registry https://registry.npm.taobao.org
RUN rm -rf node_modules && npm i pnpm -g && cd /project && pnpm install
COPY . /
#在启动镜像时执行启动项目的命令
CMD pnpm run dev
#暴露端口用于外部访问
EXPOSE 4000