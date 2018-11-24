FROM node:10 as base

WORKDIR /app

COPY ./package*.json ./

RUN npm install --production

FROM base as production

COPY ./src ./src

CMD [ "npm", "start", "-s" ]

FROM base as development

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]
