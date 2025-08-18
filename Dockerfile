FROM node:22-alpine3.20 AS builder

WORKDIR /app

COPY src/ src
COPY static/ static
COPY package.json yarn.lock svelte.config.js tsconfig.json vite.config.ts ./

RUN yarn --frozen-lockfile
RUN yarn build

FROM node:22-alpine3.20

WORKDIR /opt/infra-map
COPY --from=builder /app/build build

EXPOSE 3000
ENV NODE_ENV=production

CMD [ "node", "build/index.js" ]
