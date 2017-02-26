import {Component, OnInit} from '@angular/core';

import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
  providers: [ CustomerService ]
  })
export class CustomerAdd implements OnInit {

  loading:Boolean;

  constructor( private customerService : CustomerService ) {
  }

  onSubmit(form:any):void {
    let customer = {
      name: form.name,
      mobile: form.mobile,
      notes: form.notes,
      product: { name: form.product }
    };

    this.customerService.addCustomer(customer)
      .subscribe(() => {
        this.loading = false;
        form.reset();
      })
  }


  ngOnInit() {
  }

}
