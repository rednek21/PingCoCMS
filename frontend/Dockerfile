FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install --silent
RUN npm run build --silent

CMD ["npm", "run", "preview"]

