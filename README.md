# Ng2SimpleQueue

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.18.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Serving using Node.js

The project was intended to use an existing `node.js` setup to handle the backend work. Setting this up was a little trickier than what I would have liked.

I followed the instructions from [setup-angular-2-nodejs-structure-angular-cli-expres](http://www.javascripthtml.com/setup-angular-2-nodejs-structure-angular-cli-express/) to set up the Node server

As the standard NG-2 CLI process uses Webpack to (emulate)? the application with creating a directory structure for Development I had to make a structure which uses Production.

The following commands create the build files in a `dist` directory and serves the app to `http://localhost:3000/`


## Notes

I'm using [Semantic UI](http://semantic-ui.com/) as I having some issues using Bootstrap and it is the same CSS framewoek as used in the NG-2 book.

Based on the [Qudini Front End Test](https://github.com/qudini/front-end-test}
  
```
ng build

npm run serve

```

## Use the Angular CLI!

For a good guide see: [ultimate-angular-cli-reference](https://www.sitepoint.com/ultimate-angular-cli-reference/)

## Tasks

Initial Set up

1. Add SASS style

1. Add global styles and reset

1. The initial node backend and initial ng2 will be set up

1. Set up styling to read


* [X] Add Customer Component

* [X] Add services to call HTTP

* [X] Add collection of Customers

* [X] Add action to Delete Customer

* [X] Move $http requests to a Service


* [ ] Add action to Serve Customer

* [ ] Using Observables with RxJS to get update!

* [ ] Add action to Add Customer to the Queue

* [ ] Add a Watch to the build prod task

* [ ] Make specific Object types - is Customer type and cast response as thet type

* [ ] Add tests

##

Bases on the [Qudini Code Test](https://github.com/qudini/front-end-test}

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
