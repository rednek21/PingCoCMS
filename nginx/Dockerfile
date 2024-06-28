# nginx/Dockerfile
FROM nginx:1.25.3-alpine

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]