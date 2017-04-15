# Ng2SimpleQueue

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.18.


## Serving using Node.js

The project was intended to use an existing `node.js` setup to handle the backend work. Setting this up was a little trickier than what I would have liked.

I followed the instructions from [setup-angular-2-nodejs-structure-angular-cli-express](http://www.javascripthtml.com/setup-angular-2-nodejs-structure-angular-cli-express/) to set up the Node server


## Notes

I'm using [Semantic UI](http://semantic-ui.com/) as I having some issues using Bootstrap and it is the same CSS framewoek as used in the NG-2 book.

Based on the [Qudini Front End Test](https://github.com/qudini/front-end-test)

## Libraries

I'm trying to use my typical libraries to make life easier ( but easier isn't always straightforward! )

### Moment.js

I've use [angular2-moment](https://github.com/urish/angular2-moment), I was able to use the `pipes` but I couldn't workout how to use Moment.js within the component to verify a valid date

### Immutable.js

See [immutable-js](http://ricostacruz.com/cheatsheets/immutable-js.html).

Using the `List` Object, will see how else to use this library.


## Build Process

The following commands create the build files in a `dist` directory, and serve the app
The node server isn't refreshed automatically so has to be refreshed manually.



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


* [X] Add Customer Component
* [X] Add services to call HTTP
* [X] Add collection of Customers
* [X] Add action to Delete Customer
* [X] Move $http requests to a Service
* [X] Add action to Serve Customer
* [x] Add UI to select Products
* [x] Create a Product Type
* [x] Using Observables with RxJS to get update!
* [x] Use socket.io to give push updates
* [X] Add action to Add Customer to the Queue
* [X] Add a Watch to the build prod task
* [X] [Create a Service to provide an Observable to supply the Queue data]()
* [X] Replace HTTP call in Product Service
* [X] Add external library (moment.js) to display Joined Time
* [X] Make the ' [app.js]() ' file ES6 style
* [X] Backend - use DELETE function
* [X] Customer - Add Push Back functionality (Change order in queue)
* [X] Improve the API ( DELETE /customer, UPDATE /customer etc)
* [X] UI - Make columns scrollable
* [X] Update to Angular 4
* [X] Fix bug with the Product list in `Add Customer`
* [ ] Resolve issue with Moment.js - [vendor.bundle.js:600 Deprecation warning: value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date()](http://momentjs.com/guides/#/warnings/js-date/)
* [X] Add a `pipe' (filter)
* [X] Make the Search UI into a Shared Component
* [X] UI - Add served time
* [X] Use `ReplaySubject` in the Time.component
* [X] Use `ReplaySubject` in the Customers.component
* [X] Use a Pipe for the Customer  name search
* [X] Use a Pipe to replace the parsing function to show the Push back button
* [X] Use `ReplaySubject` in the CustomersServed.component
* [X] Use the `ReplaySubject` for the Products in the New Customer component
* [ ] Move all the Observables to a single Data Service
* [ ] Improve UI that shows the time
* [ ] Get the prod to do a Live reload
* [ ] Make specific Object types - is Customer type and cast response as that type
* [ ] Use Interface for Model? (Research best approach)
* [ ] Resolve moment.js imports completely - Is the 'MomentModule' really required, and are the typings being imported correctly
* [ ] Add tests
* [ ] Use more functionality from Immutable.js
* [ ] Add map files - This might be being done already
* [ ] Add and document debugging system (see Evernote)
* [ ] And code verification to the build task
* [ ] Add code style verification to the build task (hint)
* [ ] Find the definitive NG2 style guide
* [ ] Sort Customer Add form out (Make fields required etc)
* [ ] Add validators to the form
* [ ] Customer - Add Call Back functionality
* [ ] UI - Add more random images or something more generic

##

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.



Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
