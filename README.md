# Ng2SimpleQueue

A basic Queueing app using Angular.

Based on the [Qudini Front End Test](https://github.com/qudini/front-end-test)

## Serving using Node.js


The project was intended to use an existing `node.js` setup to handle the backend work. Setting this up was a little trickier than what I would have liked.

I followed the instructions from [setup-angular-2-nodejs-structure-angular-cli-express](http://www.javascripthtml.com/setup-angular-2-nodejs-structure-angular-cli-express/) to set up the Node server


## Libraries

I'm trying to use my typical libraries to make life easier ( but easier isn't always straightforward! )

### Semantic UI

I'm using [Semantic UI](http://semantic-ui.com/) as I having some issues using Bootstrap and it is the same CSS framewoek as used in the NG-2 book.

### Moment.js

I've use [angular2-moment](https://github.com/urish/angular2-moment), I was able to use the `pipes` but I couldn't workout how to use Moment.js within the component to verify a valid date
.


## Build Process

The following commands create the build files in a `dist` directory, and serve the app
The node server isn't refreshed automatically so has to be refreshed manually.

`ng build --watch`

In another CLI tab

`npm run serve`


Navigate to `http://localhost:3000/`


## Use the Angular CLI!

For a good guide see: [ultimate-angular-cli-reference](https://www.sitepoint.com/ultimate-angular-cli-reference/)


## Features

* Using Webstorm with the Angular plugin which allows very effective use of the IDE
* The Angular CLI is used to add new elements to the app
* Backend using `socket.io`
For bi-directional communication between the web client and the server this allows the front-end to be updated in real time.
* I have used Inheritance, this is fine as long as the chain doesn't is kept to a single parent.
* The use of Interfaces is common now in Angular where parts of libraries are used:
`implements OnInit, OnDestroy`
Example <pre>StatsComponent extends AbstractComponent</pre>
* Change Detection
For the view to be notified that it needs to be redrawn there are a variety of strategies for Angular. I've used [ChangeDetectorRef](https://angular.io/api/core/ChangeDetectorRef)
* I have a single Angular Service which is responsible for HTTP calls = `CustomerService`
 This looks very neat.
* Typing
 Generally the objects are all typed. (We could go further and type for instance the Product
 
* Using Observables - `ReplaySubject`, which means that once the front-end Component Subscibes it is updated as soon as the data changes.
* ES6
Using some of the new features of ES6. Like [set](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set)
 
```
  union(a:Array<any>, b:Array<any>) {
        var setA = new Set(a);
        var setB = new Set(b);
        let union = new Set([a, b]);
        return Array.from(union);
      }
```
* Angular stability, originally the project was very frustrating as there seemned to be a breaking change each time I worked on the project. Now it is very stable.
* I did have an Issue with `import {Observable} from "rxjs/Observable";` I believe it was picking up the wrong import and failing everything.


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
* [X] Add a `pipe' (filter)
* [X] Make the Search UI into a Shared Component
* [X] UI - Add served time
* [X] Use `ReplaySubject` in the Time.component
* [X] Use `ReplaySubject` in the Customers.component
* [X] Use a Pipe for the Customer  name search
* [X] Use a Pipe to replace the parsing function to show the Push back button
* [X] Use `ReplaySubject` in the CustomersServed.component
* [X] Use the `ReplaySubject` for the Products in the New Customer component
* [X] UI - Add more random images or something more generic
* [X] SASS - Rationalise more
* [X] Improve UI that shows the time
* [ ] Move all the Observables to a single Data Service
* [X] Add UI that show the Queue Totals
* [ ] Update the Search UI to include searching for other property types
* [ ] Get the prod to do a Live reload
* [ ] Make specific Object types - is Customer type and cast response as that type
* [ ] Use Interface for Model? (Research best approach)
* [ ] Resolve moment.js imports completely - Is the 'MomentModule' really required, and are the typings being imported correctly
* [ ] Resolve issue with Moment.js - [vendor.bundle.js:600 Deprecation warning: value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date()](http://momentjs.com/guides/#/warnings/js-date/)
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
* [ ] Add better default Customers in the Node Database




## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

Run `ng github-pages:deploy` to deploy to Github Pages.

