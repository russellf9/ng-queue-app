import {Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef} from "@angular/core";
import {CustomersServedService} from "./customers-served.service";
import {QueueService} from "../queue/queue.service";
import "rxjs/add/operator/map";
import {List} from "immutable";

@Component({
  selector: 'customers-served',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customers-served.component.html',
  styleUrls: ['./../app.component.scss',
    './customers-served.component.scss'],
  providers: [CustomersServedService, QueueService]
})
export class CustomersServed implements OnInit, OnDestroy {

  loading:Boolean;
  customersServed:Object;

  constructor(private changeDetectorRef:ChangeDetectorRef, private queueService:QueueService) {}

  subscribe() {
    this.queueService.queueData.subscribe(this.handleData.bind(this), () => {});
  }

  unsubscribe() {
    this.queueService.queueData.unsubscribe();
  }


  handleData(list: List<any>) {
    let data  = list.get(-1);
    this.customersServed  = data && data.queueData ? data.queueData.customersServed : [];
    this.changeDetectorRef.markForCheck();
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
