FROM node:8.0-apline

MAINTAINER 3Blades <contact@3blades.io>

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app/
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]
