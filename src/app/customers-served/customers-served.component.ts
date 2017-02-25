import {
  Component,
  OnInit, OnDestroy
} from '@angular/core';

import {CustomersServedService} from './customers-served.service';

@Component({
  selector: 'customers-served',
  templateUrl: './customers-served.component.html',
  styleUrls: ['./../app.component.scss',
    './customers-served.component.scss'],
  providers: [CustomersServedService]
})
export class CustomersServed implements OnInit, OnDestroy {

  loading:Boolean;
  customersServed:Object;

  constructor(private customerServedService:CustomersServedService) {
  }

  // Add Polling for now...
  intervalId = setInterval(() => {
    this.getCustomersServed();
  }, 500);


  getCustomersServed() {
    this.customerServedService.getCustomersServed().subscribe(
      // the first argument is a function which runs on success
      data => {
        this.customersServed = data;
        console.log('data ', data)
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading Customers Served!')
    );
  }


  //noinspection JSUnusedGlobalSymbols
  ngOnInit() {
    this.getCustomersServed();
  }

  //noinspection JSUnusedGlobalSymbols
  ngOnDestroy() {
    if (this.intervalId != null) {
      //noinspection TypeScriptUnresolvedFunction
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

}
