import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @Input() id:string;
  @Input() name:string;
  @Input() product:Object;

  @Output() onUpdate = new EventEmitter();

  loading:Boolean;

  constructor(private http:Http) {
  }

  update():void {
    this.onUpdate.emit();
  }

  remove() {
    this.loading = true;

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify({'id': this.id});

    return this.http.post('/api/customer/remove', body, options)
      .subscribe((result:Response) => {
        this.loading = false;
        this.update();
      });
  }


  ngOnInit() {
  }
}

