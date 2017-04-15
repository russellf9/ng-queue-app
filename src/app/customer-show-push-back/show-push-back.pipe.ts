import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'showPushBack'
})
export class ShowPushBackPipe implements PipeTransform {
  transform(customers:any):any {

    if (!customers) {
      return customers;
    }

    let len = customers.length;

    for (let customer of customers) {
      customer.showPushBack = customers.indexOf(customer) !== len - 1 ? true : false;
    }

    return customers;
  }
}
