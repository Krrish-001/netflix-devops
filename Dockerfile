# Build stage
FROM node:20 AS build

WORKDIR /app

COPY netflix-ui/ .

RUN npm install
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]