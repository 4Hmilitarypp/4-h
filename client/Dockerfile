# Use Node.js version 9.11.1
FROM mhart/alpine-node:9.11.1

# Set the working directory
WORKDIR /usr/src

# Copy package manager files to the working directory and run install
COPY package.json ./
RUN npm install

# Copy all files to the working directory
COPY . .

# Run tests
RUN CI=true npm run coverage

# Build the app and move the resulting build to the `/public` directory
RUN npm run build
RUN mv ./build /public