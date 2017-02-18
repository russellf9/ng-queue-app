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
  
```
ng build

npm run serve

```
 

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
