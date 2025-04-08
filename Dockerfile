FROM node:22-alpine3.20 AS builder

WORKDIR /app

COPY src/ src
COPY static/ static
COPY package.json yarn.lock svelte.config.js tsconfig.json vite.config.ts ./

RUN yarn
RUN yarn build

FROM node:22-alpine3.20

WORKDIR /opt/infra-map
COPY --from=builder /app/build build

COPY package.json .
RUN yarn

EXPOSE 3000
ENV NODE_ENV=production

CMD [ "node", "build" ]
