FROM node:12-alpine

WORKDIR /home/critique/web

RUN npm i -g npm@6.9.0

RUN npm install

ENTRYPOINT [ "npm" "start" $START_FROM ]

EXPOSE 3000
EXPOSE 9226
EXPOSE 9227