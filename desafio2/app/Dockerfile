# Build Stage 1
# This build created a staging docker image
#
FROM node:alpine3.11 AS appbuild
WORKDIR /usr/src/app
COPY . ./
RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install
    
RUN npm run build
# Build Stage 2
# This build takes the production build from staging build
#
FROM node:alpine3.11
WORKDIR /usr/src/app
COPY package.json ./
COPY .env ./
RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install
COPY --from=appbuild /usr/src/app/dist ./dist
COPY database.sqlite .
EXPOSE 3000
CMD ["npm", "run", "start:prod"]