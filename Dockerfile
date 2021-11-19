FROM node:16.13.0

RUN mkdir -p /usr/src/app

ENV PORT 3000

WORKDIR /usr/src/app

COPY src/prisma /usr/src/app/src/
COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN yarn install

COPY . /usr/src/app

RUN chmod 777 ./wait-for-it.sh

EXPOSE 3000

CMD "yarn" "dev"