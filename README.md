# Ng2SimpleQueue

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.18.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Serving using Node.js

The project was intended to use an existing `node.js` setup to handle the backend work. Setting this up was a little trickier than what I would have liked.

I followed the instructions from [setup-angular-2-nodejs-structure-angular-cli-express](http://www.javascripthtml.com/setup-angular-2-nodejs-structure-angular-cli-express/) to set up the Node server

As the standard NG-2 CLI process uses Webpack to (emulate)? the application with creating a directory structure for Development I had to make a structure which uses Production.




## Notes

I'm using [Semantic UI](http://semantic-ui.com/) as I having some issues using Bootstrap and it is the same CSS framewoek as used in the NG-2 book.

Based on the [Qudini Front End Test](https://github.com/qudini/front-end-test}

## Build Process

The following commands create the build files in a `dist` directory, and serve the app
The node server isn't refreshed automatically so has to be refreshed manually.

## Libraries

I'm trying to use my typical libraries to make life easier ( but easier isn't always straightforward! )

### Moment.js

I've use [angular2-moment](https://github.com/urish/angular2-moment), I was able to use the `pipes` but I couldn't workout how to use Moment.js within the component to verify a valid date

### Immutable.js

See [immutable-js](http://ricostacruz.com/cheatsheets/immutable-js.html).

Using the `List` Object, will see how else to use this library.


```

ng build --watch


```

In another CLI tab

```

npm run serve

```

Navigate to `http://localhost:3000/`


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

* [X] Add action to Serve Customer

* [x] Add UI to select Products
* [x] Create a Product Type

  - 

* [x] Using Observables with RxJS to get update!

* [x] Use socket.io to give push updates

* [X] Add action to Add Customer to the Queue

* [X] Add a Watch to the build prod task

* [ ] Create a Service to provide an Observable to supplie the Queue data

* [ ] Get the prod to do a Live reload

* [ ] Make specific Object types - is Customer type and cast response as that type

* [ ] Add tests

* [ ] Add map files

* [ ] Add and document debugging system (see Evernote)

* [ ] And code verification to the build task

* [ ] Add code style verification to the build task (hint)

* [X] Add external library (moment.js) to display Joined Time

* [ ] Find the definitive NG2 style guide

* [ ] Add a `pipe' (filter)

* [ ] 

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
