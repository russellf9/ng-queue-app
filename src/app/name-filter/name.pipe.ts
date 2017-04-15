import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  transform(items: any, search: String): any {

    if (!items || !search) {
      return items;
    }

    // convert Object to Array
    return Array.from(items, x => x)
      .filter(customer => this.containsString(customer, search));
  }

  //noinspection JSMethodCanBeStatic
  containsString(customer:any, search:String) : Boolean {
    return String(customer.name).toLowerCase().includes(search.toLowerCase());
  }
}

