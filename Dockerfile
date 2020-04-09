FROM nginx:alpine

COPY nginx/default.conf /etc/nginx/conf.d/
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the dist
COPY  dist/dhilip-ml-v1 /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]