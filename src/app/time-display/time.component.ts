import {Component, OnInit, OnDestroy} from "@angular/core";
import {TimeService} from "./../time/time.service";
import {Observable} from "rxjs/Observable";
import {List} from "immutable";
import {Time} from "./../time/time.model";

@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
  providers: [TimeService]
})
export class TimeComponent implements OnInit, OnDestroy{

  time: Time;

  constructor(private timeService:TimeService) {}

  subscribe() {
    this.timeService.times.subscribe(
      list => this.handleData(list),
      error => this.handleError(error)
    )
  }

  unsubscribe() {
    this.timeService.times.unsubscribe();
  }

  handleData(list: List<Time>) {
    this.time = list.get(-1);
  }

  //noinspection JSMethodCanBeStatic
  handleError(error) {
    return Observable.throw(error);
  }

  //noinspection JSUnusedGlobalSymbols
  ngOnInit() {
    this.subscribe();
  }

  //noinspection JSUnusedGlobalSymbols
  ngOnDestroy() {
    this.unsubscribe();
  }
}
