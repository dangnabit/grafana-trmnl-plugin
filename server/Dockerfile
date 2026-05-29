FROM node:lts-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --production

COPY . ./
RUN npm run build



# Make port 8080 available to the world outside this container
EXPOSE 8080
CMD ["npm", "start"]