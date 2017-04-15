import {Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef} from "@angular/core";
import {QueueService} from "../queue/queue.service";
import {NamePipe} from "../name-filter/name.pipe";
import "rxjs/add/operator/map";

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
  data:Object;
  loading:Boolean;

  constructor(private changeDetectorRef:ChangeDetectorRef,
              private queueService:QueueService) {}


  // ==== EVENTS ====

  updateSearch(event) {
    this.search = event;
  }

  handleUpdate(data) {
    this.data = data;
    this.changeDetectorRef.markForCheck();
  }

  // ==== SUBSCRIPTION ====

  subscribe() {
    this.queueService.data.subscribe(
      data => this.handleUpdate(data)
    );
  }

  unsubscribe() {
    this.queueService.data.unsubscribe();
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
