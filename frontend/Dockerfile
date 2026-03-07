# Stage 1: Build React app
FROM node:20-bullseye AS build

# Arbeitsverzeichnis
WORKDIR /app

# Package-Dateien für Caching kopieren
COPY package*.json ./

# Dependencies installieren
RUN npm ci

# Restliche Dateien kopieren
COPY . .

# React App bauen
RUN npm run build

# Stage 2: Lightweight Container für Deployment
FROM node:20-bullseye

WORKDIR /app

# Nur die gebaute App kopieren
COPY --from=build /app/dist ./build

# React App kann jetzt z. B. über Host-Nginx served werden
# Interner Port für Proxy
EXPOSE 3000

# Einfach den Container laufen lassen (z. B. für Serven via Express, falls nötig)
CMD ["npx", "serve", "-s", "build", "-l", "3000"]