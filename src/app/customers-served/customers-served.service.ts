import {
  Injectable,
  Output,
  EventEmitter
} from '@angular/core';

import {
  Http,
  Response,
} from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class CustomersServedService {

  @Output() onUpdate = new EventEmitter();

  constructor(private http:Http) {
  }


  getCustomersServed() {
    return this.http.get('/api/customers/served').map((res:Response) => res.json());
  }
}

