import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class CustomerService {

  constructor( private http: Http ) { }

  deleteCustomer(id) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify({'id': id});

    return this.http.post('/api/customer/remove', body, options);
  }
}
