# Step 1: Build the Angular app.
FROM node:20-alpine AS build
WORKDIR /app
# Copy `package.json` and `package-lock.json` to install dependencies.
COPY package.json package-lock.json ./
RUN npm install

# Copy the Angular app's source code.
COPY . ./
# Build the Angular app for production.
RUN npm run build --prod

# Step 2: Use NGINX to serve the built Angular app.
FROM nginx:alpine
# Copy the built Angular app from the previous step.
COPY --from=build /app/dist/jasmine-karma-documentation/browser /usr/share/nginx/html
# Replace the default NGINX configuration with your own, if necessary.
COPY nginx.conf /etc/nginx/conf.d/default.conf
