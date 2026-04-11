# build react
FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# serve
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html