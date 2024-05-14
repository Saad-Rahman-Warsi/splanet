### STAGE 1: Build ###
FROM node:lts-alpine AS build

#### make the 'app' folder the current working directory
WORKDIR /app

#### copy both 'package.json' and 'package-lock.json' (if available)
COPY . . 



#### install project dependencies
RUN npm install 

#### copy things
RUN npm run build --prod

#### generate build --prod



### STAGE 2: Run ###

FROM bitnami/nginx as ngi

#### copy nginx conf
COPY ./nginx.conf /opt/bitnami/nginx/conf/nginx.conf

#### copy artifact build from the 'build environment'
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 8080

#### don't know what this is, but seems cool and techy
CMD ["nginx", "-g", "daemon off;"]
