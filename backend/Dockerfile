ARG NODE_IMAGE=node:20.12.1-bullseye-slim
FROM ${NODE_IMAGE} AS base

WORKDIR /home/node/app

USER root
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
# RUN mkdir -p tmp \
#     && chown -R node:node /home/node/app
# RUN mkdir -p /home/node/app && chown node:node /home/node/app
USER node
ENV HOME=/home/node
# RUN mkdir tmp

FROM base AS dependencies

COPY --chown=node:node package*.json ./
RUN npm ci

FROM dependencies AS build

COPY --chown=node:node . .
RUN node ace build

FROM base AS production

ENV NODE_ENV=production \
    PORT=3333 \
    HOST=0.0.0.0\
    HOME=/home/node

# COPY --chown=node:node ./package*.json ./
# RUN npm ci --only=production
# COPY --chown=node:node --from=build /home/node/app/build .
# COPY --chown=node:node --from=dependencies /home/node/app/node_modules ./node_modules
# COPY --chown=node:node package*.json ./
# COPY --chown=node:node --from=dependencies /home/node/app/node_modules ./node_modules
# COPY --chown=node:node ./package*.json ./
# RUN npm ci --only=production
# COPY --chown=node:node --from=build /home/node/app/dist ./dist

# RUN npm cache clean --force

USER root
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

RUN npm install npm@latest
# COPY package*.json ./
COPY --chown=node:node package*.json ./
RUN npm install --only=production

# COPY package*.json ./
# RUN npm install --only=production
# RUN npm ci --only=production

COPY --chown=node:node --from=build /home/node/app/build ./build

EXPOSE 3333

CMD ["node", "build/bin/server.js"]
# CMD ["node", "build/start.js"]
# CMD ["node", "build/server.js"]
# CMD ["node", "ace", "serve", "--watch"]