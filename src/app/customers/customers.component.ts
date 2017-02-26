import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./../app.component.scss',
            './customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {

  customers:Object;
  loading:Boolean;

  constructor(private http:Http) {
  }

  intervalId = setInterval(() => {
    this.makeRequest();
  }, 500);


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


  //noinspection JSUnusedGlobalSymbols
  ngOnInit() {
   this.makeRequest();
  }

  //noinspection JSUnusedGlobalSymbols
  ngOnDestroy() {
    if (this.intervalId != null) {
      //noinspection TypeScriptUnresolvedFunction
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }


}
