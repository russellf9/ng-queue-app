import {Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef} from "@angular/core";
import {QueueService} from "../queue/queue.service";
import {NamePipe} from "../name-filter/name.pipe";
import "rxjs/add/operator/map";
import {List} from "immutable";

@Component({
  selector: 'customers-served',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customers-served.component.html',
  styleUrls: ['./../app.component.scss',
    './customers-served.component.scss'],
  providers: [QueueService, NamePipe]
})
export class CustomersServed implements OnInit, OnDestroy {


  search:String = '';
  customers:Array<any>;
  filteredCustomers:Array<any>;

  loading:Boolean;

  constructor(private changeDetectorRef:ChangeDetectorRef,
              private queueService:QueueService,
              private namePipe:NamePipe) {}


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
    this.queueService.queueData.subscribe(this.handleData.bind(this), () => {});
  }

  unsubscribe() {
    this.queueService.queueData.unsubscribe();
  }


  handleData(list: List<any>) {
    let data = list.get(-1);
    let customersServedObj = data && data.queueData ? data.queueData.customersServed : [];
    this.customers = Array.from(customersServedObj, x => x);
    this.filterCustomers();
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
