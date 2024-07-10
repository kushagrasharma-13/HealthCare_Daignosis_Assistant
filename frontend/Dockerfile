# Use the official Node.js image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set the environment variable (this will be set at build time by Docker Compose)
ARG REACT_APP_PUBLIC_IP
ENV REACT_APP_PUBLIC_IP=$REACT_APP_PUBLIC_IP

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
