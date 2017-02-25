import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [ CustomerService ]
})

export class CustomerComponent  {

  @Input() id:string;
  @Input() name:string;
  @Input() product:Object;

  @Output() onUpdate = new EventEmitter();

  loading:Boolean;

  constructor( private customerService : CustomerService ) {
  }

  callUpdate():void {
    this.onUpdate.emit();
  }

  serve() {
    this.loading = true;

    this.customerService.serveCustomer(this.id)
      .subscribe(() => {
        this.loading = false;
        this.callUpdate()
      })
  }

  remove() {
    this.loading = true;

    this.customerService.deleteCustomer(this.id)
      .subscribe(() => {
        this.loading = false;
        this.callUpdate();
      });
  }
}


