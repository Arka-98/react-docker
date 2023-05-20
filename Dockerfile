FROM node:19.8-alpine

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install

COPY ./ ./

EXPOSE 3000

CMD ["npm", "run", "dev"]