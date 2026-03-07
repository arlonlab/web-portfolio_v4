# Stage 1: Build React app
FROM node:20-bullseye AS build

WORKDIR /app

# Copy package files for caching
COPY package*.json ./
RUN npm ci

# Copy all frontend files
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]