FROM node:12-alpine

WORKDIR /home/critique/web

RUN npm i -g npm@6.9.0

RUN npm install

RUN node --version

EXPOSE $PORT
EXPOSE 9226
EXPOSE 9227
CMD [ "node", "index.js" ]