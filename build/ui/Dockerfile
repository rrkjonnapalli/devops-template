FROM node:12-alpine

WORKDIR /home/critique/ui

RUN npm i -g npm@6.9.0

RUN npm i -g @angular/cli@8.0.0

RUN npm install

EXPOSE 4200

CMD [ "./node_modules/.bin/http-server", "-p", "4200", "."]