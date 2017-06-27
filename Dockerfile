FROM node:latest

MAINTAINER 3Blades <contact@3blades.io>

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
RUN npm install

# Copy source files
COPY . /usr/src/app/

EXPOSE 8080
CMD npm run prod
