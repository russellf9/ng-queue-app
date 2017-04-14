import {Component, OnInit, OnDestroy} from "@angular/core";
import {TimeService} from "./../time/time.service";
import {Time} from "./../time/time.model";

@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
  providers: [TimeService]
})
export class TimeComponent implements OnInit, OnDestroy {

  time:Time;

  times:Object;

  constructor(private timeService:TimeService) {
  }

  subscribe() {
    this.timeService.time.subscribe(time => this.times = time);
  }

  unsubscribe() {
    this.timeService.time.unsubscribe();
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
