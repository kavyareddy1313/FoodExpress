FROM node:20-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Set env variable for build (you can pass this via docker-compose args if needed)
ENV VITE_API_URL=http://localhost:5000

RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Copy custom nginx config if we had one for client-side routing, but we will add a simple one inline or via echo in docker
RUN echo $'server {\n\
    listen 80;\n\
    location / {\n\
        root /usr/share/nginx/html;\n\
        index index.html index.htm;\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
