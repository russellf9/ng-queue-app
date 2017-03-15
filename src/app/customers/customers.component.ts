import {Component, OnInit} from "@angular/core";
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
export class CustomersComponent implements OnInit {

  customers:Object;
  loading:Boolean;

  constructor(private queueService:QueueService) {}


  onUpdate() {
    console.log('The update call has been removed!');
    //this.makeRequest();
  }

  handleData(list: List<any>) {
    let data  = list.get(-1);
    console.log('CustomersComponent = data ', data);

    this.customers = data && data.queueData ? data.queueData.customers : [];
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
    this.queueService.queueData.subscribe(this.handleData.bind(this));
  }
}
