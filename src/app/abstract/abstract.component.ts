import {Component, Injectable, OnInit, OnDestroy} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {QueueService} from "../queue/queue.service";
import {CustomerService} from "../customer/customer.service";

@Component({
  providers: [CustomerService, QueueService]
})

@Injectable()
export abstract class AbstractComponent implements OnInit, OnDestroy {

  protected queueService:QueueService;
  protected data:Object;


  constructor() {
    this.queueService = new QueueService;
  }


  // ==== DATA ====

  handleData(data):void {
    this.data = data;
  }

  //noinspection JSMethodCanBeStatic
  handleError(error) {
    return Observable.throw(error);
  }
  // ====


  // ==== SUBSCRIPTION ====

  subscribe():void {
    this.queueService.data.subscribe(
      data => this.handleData(data),
      error => this.handleError(error)
    );
  }

  unsubscribe():void  {
    this.queueService.data.unsubscribe();
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
