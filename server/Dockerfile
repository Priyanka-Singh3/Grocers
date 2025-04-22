# server/Dockerfile

# Use official Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server code
COPY . .

# Expose the port the server runs on
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
