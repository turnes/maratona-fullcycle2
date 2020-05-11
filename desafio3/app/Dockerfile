# Build Stage 1
# This build created a staging docker image
#
FROM node:alpine3.11 AS appbuild
WORKDIR /usr/src/app
COPY . ./
RUN npm install && npm run build
# Build Stage 2
# This build takes the production build from staging build
#
FROM node:alpine3.11
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --production
COPY --from=appbuild /usr/src/app/dist ./dist
COPY views views
COPY public public
EXPOSE 3000
CMD ["npm", "run", "start:prod"]