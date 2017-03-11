import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./../app.component.scss',
    './customers.component.scss'],
  providers: []
})
export class CustomersComponent implements OnInit {

  customers:Object;
  loading:Boolean;

  observable:Observable<string>;
  observer:Observer<string>;


  constructor(private http:Http) {}



  makeRequest():void {
    this.loading = true;
    this.http.request('/api/customers')
      .subscribe((result:Response) => {
        this.customers = result.json();
        // this.customers = _.sortBy(this.customers, ['name']);
        this.loading = false
      });
  }

  subscribe() {
    this.observable = new Observable((observer:Observer<string>) => {
      this.observer = observer;
    });
  }


  onUpdate() {
    this.makeRequest();
  }

  handleData(data) {
    console.log('Here are the usable data', data);
    // Insert Business logic here
  }

  handleComplete() {
    console.log('Complete');
  }

  handleError(error) {
    console.log('error:', error);
    return Observable.throw(error);
  }

  //noinspection JSUnusedGlobalSymbols
  ngOnInit() {
    this.subscribe();
    this.makeRequest();

    this.observable.subscribe(this.handleData, this.handleError, this.handleComplete);

    this.observer.next('12');
    this.observer.next('15');
    this.observer.complete();
    this.observer.next('16');
  }
}


