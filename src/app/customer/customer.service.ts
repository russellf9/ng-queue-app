import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, Response, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

const API_CUSTOMER:string = '/api/customer';
const API_CUSTOMER_SERVE:string = '/api/customer/serve';

@Injectable()
export class CustomerService {

  headers:Headers;
  options:RequestOptions;

  constructor(private http:Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9'
    });
    this.options = new RequestOptions({headers: this.headers});
  }

  // ==== CUSTOMER ACTIONS ====

  addCustomer(customer):Observable<any> {
    return this.createService(API_CUSTOMER, customer);
  }

  updateCustomer(customer):Observable<any> {
    return this.updateService(API_CUSTOMER, customer);
  }

  serveCustomer(id):Observable<any> {
    let param = {'id': id};
    return this.updateService(API_CUSTOMER_SERVE, param);
  }

  deleteCustomer(id):Observable<any> {
    let key = 'id';
    return this.deleteServiceWithId(API_CUSTOMER, key, id);
  }

  // ==== CRUD (these could be moved to a shared service) ====

  createService(url:string, param:any):Observable<any> {
    let body = JSON.stringify(param);
    return this.http
      .post(url, body, this.options)
      .map(CustomerService.extractData)
      .catch(CustomerService.handleError);
  }

  updateService(url:string, param:any):Observable<any> {
    let body = JSON.stringify(param);
    return this.http
      .put(url, body, this.options)
      .map(CustomerService.extractData)
      .catch(CustomerService.handleError)
  }

  deleteServiceWithId(url:string, key:string, value:string):Observable<any> {
    return this.http
      .delete(url + '/?' + key + "=" + value, this.options)
      .map(CustomerService.extractData)
      .catch(CustomerService.handleError);
  }

  // ==== UTILITY FUNCTIONS ====

  static extractData(res:Response) {
    let body = res.json();
    return body || {};
  }

  static handleError(error:any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}
