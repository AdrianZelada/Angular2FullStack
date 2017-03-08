# Angular 2 Full Stack project [![Dependencies](https://david-dm.org/DavideViolante/Angular2-Full-Stack.svg)](https://david-dm.org/DavideViolante/Angular2-Full-Stack) [![Donate](https://img.shields.io/badge/paypal-donate-179BD7.svg)](https://www.paypal.me/dviolante) [![MIT license](http://img.shields.io/badge/license-MIT-lightgrey.svg)](http://opensource.org/licenses/MIT)


The front-end of this project was generated with [Angular CLI](https://github.com/angular/angular-cli).

This project uses the [REAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**R**ethinkdb](http://www.rethinkdb.com) ([RethinkDB](https://www.mongodb.com)): database
* [**E**xpress.js](http://expressjs.com): backend framework
* [**A**ngular 2](https://angular.io): frontend framework
* [**N**ode.js](https://nodejs.org): runtime environment
* [Angular CLI](https://cli.angular.io): project scaffolding
* [Bootstrap](http://www.getbootstrap.com): layout and styles
* [Font Awesome](http://fontawesome.io): icons

## Prerequisites
1. Install [Node.js](https://nodejs.org) and [RethinkDB](https://www.rethinkdb.com)
2. Install Angular CLI: `npm i -g @angular/cli`
3. From project root folder install all the dependencies: `npm i`

## Run
1. `npm start`: [concurrently](https://github.com/kimmobrunfeldt/concurrently) Angular build and Express server
2. Go to [localhost:3000](http://localhost:3000)

Angular and Express files are being watched. Any changes creates a new bundle and restart Express server.

Use `npm run prod` to run the project with a production bundle.