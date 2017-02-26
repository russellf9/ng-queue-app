import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { CustomerService } from './customer.service';

import { Product } from '../product/product.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [ CustomerService ]
})

export class CustomerComponent  {

  @Input() id:string;
  @Input() name:string;
  // @Input() product:Object;
  @Input() notes:string;
  @Input() status:string;

  @Output() onUpdate = new EventEmitter();

  loading:Boolean;

  product:Product;

  constructor( private customerService : CustomerService ) {

    // id
    // name
    // price
    this.product = new Product(1, 'phone topup', 10);
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


