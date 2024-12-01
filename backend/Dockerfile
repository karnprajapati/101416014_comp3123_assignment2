# Use Node.js LTS as the base image
FROM node:lts

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the backend files
COPY . .

# Expose the backend port
EXPOSE 5001

# Run the backend server
CMD ["npm", "run", "dev"]
