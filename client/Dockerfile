FROM node:latest

RUN mkdir -p /app
WORKDIR /app

RUN npm config set registry https://registry.npmjs.org
COPY package.json /app/package.json
RUN npm install \
  && mv /app/node_modules /node_modules
COPY . /app

ENV PORT 3000
EXPOSE 3000
