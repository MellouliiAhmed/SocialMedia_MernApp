FROM node:latest
# Set the working directory within the container
WORKDIR /app
# Copy the package.json and package-lock.json files for the backend (assuming they are in the root directory)
COPY package*.json ./
# Install backend dependencies
RUN npm install --force
# Copy the rest of the application files (both backend and frontend)
COPY . .
# Expose necessary ports (if needed)
EXPOSE 5000
# Define the command to start your application (modify it based on your actual setup)
CMD ["npm", "start"]
