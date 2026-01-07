# Step 1: Build React app
# Node is needed only to build, not to run ... Node is required only for building React, not for serving it.
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build  # Creates optimized static files... Output goes to /app/build
#React build converts the app into static assets suitable for production.

# Step 2: Serve with nginx
FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# Runs nginx in foreground
# Required for Docker containers
