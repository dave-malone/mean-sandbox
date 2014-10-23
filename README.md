# A sample MEAN stack application

This repo was forked from the [MEAN starter app](https://github.com/scotch-io/starter-node-angular) repo, and has been modified to explore libraries like Grunt, Mocha, and for deployment to Pivotal Cloud Foundry. Really it's just a sandbox for me to learn how to develop MEAN stack applications. 

## Development Environment Prereqs
1. Install MongoDB: http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/
1. Install NodeJS

## Installation
1. Download the repo
1. Install the grunt-cli: `npm install -g grunt-cli`
1. Install bower: `npm install -g bower`
1. Install npm modules: `npm install`
1. Install bower dependencies `bower install`
1. Start up the server: `grunt`
1. View in browser at http://localhost:8080

Use this starter kit to build any MEAN stack application you like.

## Deploy
1. If deploying to Cloud Foundry, ensure that an instance of mongodb is bound to this application. This app assumes that a service is available via the VCAP_SERVICES environment variable, under an instance named "mongolab". This can be changed in server.js
1. When running locally, this app requires that mongodb is running and accessible using the url string in config/db.js

## TODO
1. minification is not working at this time; need to make js files "safe" for minification
1. add actual unit tests in Mocha
1. integrate cfenv library into codebase (https://github.com/cloudfoundry-community/node-cfenv)
