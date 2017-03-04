import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class ProductService {

  constructor( private http: Http ) { }

  getProducts() {
    return this.http.get('/api/products').map((res:Response) => res.json());
  }
}

