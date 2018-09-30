FROM node:8-alpine

# Set the working directory and copy over package manager specific files
WORKDIR /usr/src
COPY package.json ./

# Install dependencies
RUN npm i

# Copy the rest of the app files to the working directory
COPY . .

# Build the app and export the static files to the `public` directory
RUN npm run build
RUN npm run export -- -o /public
