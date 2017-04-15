import {Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
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

  search:String = '';
  loading:Boolean;
  data:Object;

  constructor(private changeDetectorRef:ChangeDetectorRef,
              private queueService:QueueService) {}

  // ==== EVENTS ====

  updateSearch(event) {
    this.search = event;
  }


  // ==== SUBSCRIPTION ====

  subscribe() {
    this.queueService.data.subscribe(
      data => this.handleUpdate(data),
      error => this.handleError(error)
    );
  }

  unsubscribe() {
    this.queueService.data.unsubscribe();
  }

  handleUpdate(data) {
    this.data = data;
    this.changeDetectorRef.markForCheck();
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
