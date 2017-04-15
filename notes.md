

## Component events

See: [Component events with EventEmitter and @Output in Angular 2+](https://toddmotto.com/component-events-event-emitter-output-angular-2)

Example:

Customers.component

## Observable Service

See: [So - Angular 2 Observable with multiple subscribers](http://stackoverflow.com/questions/39627396/angular-2-observable-with-multiple-subscribers)

Based on [Angular Observable Data Services](https://coryrylan.com/blog/angular-2-observable-data-services)


I was originally using a List (from immutable.js) in the `TimeService`, but found I could achieve the same with less code using a [ReplaySubject](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/replaysubject.md);

(See: [SO - Creating and returning Observable from Angular 2 Service](http://stackoverflow.com/questions/33675155/creating-and-returning-observable-from-angular-2-service) )


Refactoring 

Was use a list

```
private _queueData:BehaviorSubject<List<any>> = new BehaviorSubject(List([]));
```



