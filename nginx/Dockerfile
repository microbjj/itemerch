FROM node:20 AS builder

WORKDIR /app
COPY itemerch ./frontend
WORKDIR /app/frontend

RUN npm install
RUN npm run build

FROM nginx:stable-alpine

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/frontend/dist /usr/share/nginx/html

EXPOSE 80 443

