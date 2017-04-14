import {Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {List} from "immutable";
import {QueueService} from "../queue/queue.service";
import {NamePipe} from "../name-filter/name.pipe";

@Component({
  selector: 'app-customers',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customers.component.html',
  styleUrls: ['./../app.component.scss',
    './customers.component.scss'],
  providers: [QueueService, NamePipe]
})
export class CustomersComponent implements OnInit, OnDestroy {

  customers:Array<any>;
  filteredCustomers:Array<any>;
  search:String = '';
  loading:Boolean;


  constructor(private changeDetectorRef:ChangeDetectorRef,
              private queueService:QueueService,
              private namePipe:NamePipe) {
  }

  // ==== EVENTS ====

  updateSearch(event) {
    this.search = event;
    this.filterCustomers();
  }


  // ==== UTILITY FUNCTIONS ====

  filterCustomers() {
    this.filteredCustomers = this.customers
      .filter(customer => this.namePipe.transform(customer, this.search));
    this.changeDetectorRef.markForCheck();
  }

  // ==== SUBSCRIPTION ====

  subscribe() {
    this.queueService.queueData
      .subscribe(
        list => this.handleData(list),
        error => this.handleError(error)
      )
  }

  unsubscribe() {
   // this.queueService.queueData.unsubscribe();
  }


  handleData(list:List<any>) {
    let data = list.get(-1);
    let customersObj = data && data.queueData ? data.queueData.customers : [];
    this.customers = Array.from(customersObj, x => x);
    this.filterCustomers();
  }

  //noinspection JSUnusedGlobalSymbols,JSMethodCanBeStatic
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
