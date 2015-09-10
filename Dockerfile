FROM ubuntu:trusty
MAINTAINER yuanaiqing yuan_aiqing@outlook.com
RUN apt-get update 
RUN apt-get install -y nodejs 
RUN apt-get install -y npm 
COPY app /app

#RUN npm install -g express-generator

WORKDIR '/app
RUN npm install

EXPOSE 3000
CMD ["nodejs", "/app/app.js"]
