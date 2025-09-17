#Stage di sviluppo
#hot reload e accesso immediato al codice sorgente
FROM node:20-alpine3.18 AS dev
WORKDIR /web-app
COPY package*.json ./
RUN npm install -g @nestjs/cli && npm install 
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start:dev"]

#Stage di produzione
#container ottimizzato, leggero, solo con il codice compilato, pronto per l’ambiente di produzione
FROM node:20-alpine3.18 AS prod
WORKDIR /web-app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/main.js"]