#Dockerfile for nest container
FROM node:17-alpine3.12

RUN npm i -g @nestjs/cli

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["nest", "start"]