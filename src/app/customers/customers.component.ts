import {Component, OnInit, OnDestroy} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {List} from "immutable";
import {QueueService} from "../queue/queue.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./../app.component.scss',
    './customers.component.scss'],
  providers: [QueueService]
})
export class CustomersComponent implements OnInit, OnDestroy {

  customers:Object;
  loading:Boolean;

  constructor(private queueService:QueueService) {}

  subscribe() {
    this.queueService.queueData.subscribe(this.handleData, this.handleError, () => {});
  }

  unsubscribe() {
    this.queueService.queueData.unsubscribe();
  }


  handleData(list: List<any>) {
    let data  = list.get(-1);
       this.customers = data && data.queueData ? data.queueData.customers : [];
  }


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
