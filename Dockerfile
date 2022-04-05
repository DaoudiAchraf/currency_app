FROM node:16

WORKDIR /app

COPY package.json /app

RUN  npm cache clean --force && npm config set timeout 600000000 &&  npm install --force

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]