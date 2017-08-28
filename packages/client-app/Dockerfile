FROM node:8.4-alpine

# create app directory
WORKDIR /usr/src/app

# install node_modules utilising Docker layer caching
# http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/
COPY package.json package-lock.json ./
RUN npm install

# copy the rest of the files to the app directory
COPY . .

ENV NODE_ENV=docker

# compile the app code
RUN npm run build

# expose server's port
EXPOSE 5000

# start the app
CMD ["npm", "run", "serve"]
