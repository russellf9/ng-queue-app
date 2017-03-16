import {Injectable, Output, EventEmitter} from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class CustomersServedService {

  @Output() onUpdate = new EventEmitter();

  constructor() {}

}

