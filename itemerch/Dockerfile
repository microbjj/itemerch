FROM node:20 AS builder

WORKDIR /app

COPY . .

RUN npm i
RUN npm run build
