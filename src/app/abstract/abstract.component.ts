import {Component, Injectable, OnInit, OnDestroy} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {QueueService} from "../queue/queue.service";
import {CustomerService} from "../customer/customer.service";
import {List} from "immutable";

@Component({
  providers: [CustomerService, QueueService]
})

@Injectable()
export abstract class AbstractComponent implements OnInit, OnDestroy {

  protected queueService:QueueService;
  protected queueData:any;


  constructor() {
    this.queueService = new QueueService;
  }


  // ==== DATA ====

  handleData(list:List<any>):void {
    let data = list.get(-1);
    this.queueData = data && data.queueData ? data.queueData : [];
  }

  //noinspection JSMethodCanBeStatic
  handleError(error) {
    return Observable.throw(error);
  }
  // ====


  // ==== SUBSCRIPTION ====

  subscribe():void  {
    this.queueService.queueData
      .subscribe(
        list => this.handleData(list),
        error => this.handleError(error)
      )
  }

  unsubscribe():void  {
    this.queueService.queueData.unsubscribe();
  }

  // ==== INTERFACE CONTRACT ====

  //noinspection JSUnusedGlobalSymbols
  ngOnInit():void  {
    this.subscribe();
  }

  //noinspection JSUnusedGlobalSymbols
  ngOnDestroy() {
    this.unsubscribe();
  }
}
