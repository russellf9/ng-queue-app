import {Component, ChangeDetectorRef} from "@angular/core";
import {AbstractComponent} from "../abstract/abstract.component";

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent extends AbstractComponent  {

  totalCustomers: number;
  totalCustomersServed: number;

  constructor(private changeDetectorRef:ChangeDetectorRef) {
    super();
  }

  // ==== DATA ====

  handleData(data) {
    super.handleData(data);

    if (!data || !data.queueData) {
      return;
    }

    //noinspection TypeScriptUnresolvedVariable
    this.totalCustomers = data.queueData.customers ? data.queueData.customers.length: 0;
    //noinspection TypeScriptUnresolvedVariable
    this.totalCustomersServed = data.queueData.customersServed ? data.queueData.customersServed.length: 0;

    this.changeDetectorRef.markForCheck();
  }
}
