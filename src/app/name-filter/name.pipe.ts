import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  transform(value: any, search: String): any {
    return this.containsString(value.name, search);
  }

  //noinspection JSMethodCanBeStatic
  containsString(text:String, search:String) : Boolean {
    return String(text).toLowerCase().includes(search.toLowerCase());
  }
}

