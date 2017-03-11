import {Component, OnInit} from "@angular/core";
import {TimeService} from "./../time/time.service";
import {Observable} from "rxjs/Observable";
import {List} from "immutable";

@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
  providers: [TimeService]
})
export class TimeComponent implements OnInit {

  time:string;

  constructor(private timeService:TimeService) {}

  handleData(list: List<any>) {
    let date = list.get(-1);
    this.time = date  &&  new Date(date.time) ? date.time : '';
  }

  handleComplete() {
    console.log('Complete');
  }

  handleError(error) {
    console.log('error:', error);
    return Observable.throw(error);
  }

  //noinspection JSUnusedGlobalSymbols
  ngOnInit() {
    this.timeService.times.subscribe(this.handleData.bind(this), this.handleError.bind(this), this.handleComplete.bind(this));
  }

}
