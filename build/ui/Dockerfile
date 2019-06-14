FROM node:12-alpine

WORKDIR /home/critique/ui

RUN npm i -g npm@6.9.0

RUN npm i -g @angular/cli@8.0.0

RUN npm install

ENTRYPOINT [ "npm" "start" $START_FROM ]

EXPOSE 4200