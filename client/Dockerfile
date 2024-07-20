# Use the official Node image with Node.js 16.
FROM node:16

# Set the working directory in the container to /app.
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory.
COPY package*.json ./

# Install the dependencies specified in package.json.
RUN npm install

# Copy the rest of the application code to the working directory.
COPY . .

# Build the application.
RUN npm run build

# Expose the port that the Vite preview server will run on.
EXPOSE 4173

# Command to run the application.
CMD ["npm", "run", "preview"]
