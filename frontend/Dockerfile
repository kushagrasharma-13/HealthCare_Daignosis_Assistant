# Use the Node.js LTS version (alpine) as the base image for smaller size
FROM node:16-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the application for production
RUN npm run build

# Use a smaller base image for the production environment
FROM node:16-alpine

# Install a simple server for serving static files
RUN npm install -g serve

# Set the working directory
WORKDIR /app

# Copy the built files from the builder stage
COPY --from=builder /app/build ./build

# Expose the port the app runs on
EXPOSE 3000

# Set the entrypoint to an empty command
ENTRYPOINT []
