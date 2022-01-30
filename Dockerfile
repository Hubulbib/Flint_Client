FROM node:16

WORKDIR /app

COPY ./package.json ./

RUN npm install

RUN npm run build

COPY . .

ENV PORT 80

EXPOSE $PORT

CMD ["npm", "server"]