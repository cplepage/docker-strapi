FROM node:18-alpine

COPY strapi /strapi
RUN mkdir -p /strapi/data/public/uploads && \
    mkdir /strapi/data/api
VOLUME /strapi/data

WORKDIR /strapi
RUN npm install && \
    npm run build && \
    rm -rf /strapi/src/api && \
    ln -s /strapi/data/api /strapi/src/api && \
    ln -s /strapi/data/.env /strapi/.env

EXPOSE 1337
RUN apk add tini
CMD ["tini", "--", "npm", "run", "develop"]
