import {Component, Input, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy} from "@angular/core";
import {CustomerService} from "./customer.service";
import {Product} from "../product/product.model";
import {ProductService} from "../product/product.service";
import * as moment from "moment";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-customer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [CustomerService, ProductService]
})

export class CustomerComponent {

  @Input() id:string;
  @Input() name:string;
  @Input() product:any;
  @Input() notes:string;
  @Input() status:string;
  @Input() joinedTime:string;
  @Input() servedTime:string;
  @Input() showPushBack:boolean;

  @Output() onUpdate = new EventEmitter();

  today: any;
  loading:Boolean;
  products:Product[];

  constructor(private customerService:CustomerService,
              private productService:ProductService,
              private changeDetectorRef:ChangeDetectorRef) {

    let date = new Date();
    this.today = moment(date, 'D ha');

    this.productService.getProducts()
      .subscribe(
        products => this.handleData(products),
        error => this.handleError(error)
      )
  }

  // ==== ACTIONS ====

  updateProduct = function (product):void {
    //noinspection TypeScriptUnresolvedVariable
    var customer = {
      id: this.id,
      name: this.name,
      product: product,
      notes: this.notes,
      status: this.notes,
      joinedTime: this.joinedTime
    };
    this.customerService.updateCustomer(customer)
      .subscribe(
        () => {
        },
        error => this.handleError(error),
        () => this.loading = false,
      )
  };


  serve() {
    this.loading = true;
    this.customerService.serveCustomer(this.id)
      .subscribe(
        () => {
        },
        error => this.handleError(error),
        () => this.loading = false,
      )
  }

  remove() {
    this.loading = true;
    this.customerService.deleteCustomer(this.id)
      .subscribe(
        () => {
        },
        error => this.handleError(error),
        () => this.loading = false,
      )
  }

  pushBack() {
    this.loading = true;
    this.customerService.pushBackCustomer(this.id)
      .subscribe(
        () => {
        },
        error => this.handleError(error),
        () => this.loading = false,
      )
  }

  // ==== UTILITY FUNCTIONS ====

  handleData = function (products):void {
    this.products = products;
    this.changeDetectorRef.markForCheck();
  };

  //noinspection JSMethodCanBeStatic
  handleError(error) {
    return Observable.throw(error);
  }

}



