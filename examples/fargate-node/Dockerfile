FROM node:15.12.0
RUN npm i typescript ts-node -g

RUN mkdir /deps
WORKDIR /deps
ADD package.json .
RUN npm i --only-prod

RUN mkdir /code
WORKDIR /code
ADD package.json .
RUN npm i
ADD tsconfig.json .
ADD src /code/src
RUN npm run build

FROM mhart/alpine-node:slim-15.12.0
RUN mkdir /app
WORKDIR /app
ADD package.json .
COPY --from=0 /deps/node_modules /app/node_modules
COPY --from=0 /code/dist /app/dist
ADD scripts /app/scripts
CMD node scripts/downloadAll.js