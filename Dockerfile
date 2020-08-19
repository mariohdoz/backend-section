FROM node:12.18.0

WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json

RUN echo $(ls -l)

RUN npm install 

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
