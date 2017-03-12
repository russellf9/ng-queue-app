import {Component, OnInit} from "@angular/core";
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
export class TimeComponent implements OnInit {

  time: Time;

  constructor(private timeService:TimeService) {}

  handleData(list: List<Time>) {
    this.time = list.get(-1);
  }

  static handleComplete() {
    console.log('Complete');
  }

  static handleError(error) {
    console.log('error:', error);
    return Observable.throw(error);
  }

  //noinspection JSUnusedGlobalSymbols
  ngOnInit() {
    this.timeService.times.subscribe(this.handleData.bind(this), TimeComponent.handleError.bind(this), TimeComponent.handleComplete.bind(this));
  }

}
