# kiosk-update-files
- based on UzysHapiSkeleton(https://github.com/uzysjung/UzysHapiSkeleton#uzyshapiskeleton)
- based on Hapi.js 11.1.x Node 5.0

## Introduction
- Simple board of ota update file posts

## Hapi plugin
- TV (endpoint: /debug/console)
- Hapi Swagger (endpoint: /documentation)
- Hapi-auth-basic (ID: uzysjung / Password : uzysjung)
- Lab
- good , good-console
- Joi , Boom
 
## NPM Module
- pm2
- debug
- async
- request
- mysql
- underscore , underscore.string
- bcrypt
- handlebars
- knex
- nodemon
- node-inspector

## NPM Script
- npm start : start app
- npm stop : stop app
- npm test : run test
- npm run coverage : run test and make report file (coverage.html)
- npm run dep : dependency check
- npm run outdated : check outdated npm module
- npm run jshint : run jshint
- npm run debug : run debug mode
- npm run inspector : run node-inspector

## Configuration file & Environment Variable.
- NODE_ENV = development , production -> export NODE_ENV=development
- PORT = 8080 (only apply this to production environment)
- GOOD_CONSOLE = 'log,response,request,error'

## Authentication
- initial ID / Password : uzysjung/uzysjung
