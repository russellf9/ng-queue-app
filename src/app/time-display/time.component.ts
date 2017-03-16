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

  handleData(list: List<Time>) {
    this.time = list.get(-1);
  }

  handleError(error) {
    return Observable.throw(error);
  }

  subscribe() {
    this.timeService.times.subscribe(this.handleData, this.handleError, () => {})
  }

  unsubscribe() {
    this.timeService.times.unsubscribe();
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
