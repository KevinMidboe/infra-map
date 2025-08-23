# --- Stage 1: Compile svelte-kit project ---
FROM node:22-alpine3.20 AS builder

WORKDIR /app

# Copy source files
COPY src/ src
COPY static/ static
COPY package.json yarn.lock svelte.config.js tsconfig.json vite.config.ts ./

# Install dependencies
RUN yarn --frozen-lockfile

# Build project
ENV NODE_ENV=production
RUN yarn build

# --- Stage 2: Run project with node ---
FROM node:22-alpine3.20

# Copy compiled project files
WORKDIR /opt/infra-map
COPY --from=builder /app/build build

ENV NODE_ENV=production

# Install dependencies
RUN yarn install --frozen-lockfile
RUN yarn add @sveltejs/kit

EXPOSE 3000
ENV PORT=3000

CMD [ "node", "build/index.js" ]
