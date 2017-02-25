import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers:Object;
  loading:Boolean;

  constructor(private http:Http) {
  }

  makeRequest():void {
    this.loading = true;
    this.http.request('/api/customers')
      .subscribe((result:Response) => {
        this.customers = result.json();
        this.loading = false
      });
  }

  onUpdate() {
    this.makeRequest();
  }


  ngOnInit() {
    this.makeRequest();
  }

}
