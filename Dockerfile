FROM node:14 AS frontend

COPY . .

RUN yarn install

RUN yarn build

FROM nginx:1.19-alpine AS backend

RUN mkdir /app

WORKDIR /app

RUN mkdir ./build

COPY --from=frontend ./build ./build

COPY ./deploy/default.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]