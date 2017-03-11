import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CustomerService} from './customer.service';
import {Product} from '../product/product.model';
import {ProductService} from "../product/product.service";

@Component({
  selector: 'app-customer',
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

  @Output() onUpdate = new EventEmitter();

  loading:Boolean;
  products:Product[];

  constructor(private customerService:CustomerService,
              private productService:ProductService) {

    this.productService.getProducts()
      .subscribe((products) => {
        this.products = products;
      });
  }

  callUpdate():void {
    this.onUpdate.emit();
  }

  updateProduct = function (product):void {
    var customer = {
      id: this.id,
      name: this.name,
      product: product,
      notes: this.notes,
      status: this.notes,
      joinedTime: this.joinedTime
    };

    this.customerService.updateCustomer(customer)
      .subscribe(() => {
        this.callUpdate();
      });
  };


  serve() {
    this.loading = true;
    this.customerService.serveCustomer(this.id)
      .subscribe(() => {
        this.loading = false;
        this.callUpdate()
      })
  }

  remove() {
    this.loading = true;
    this.customerService.deleteCustomer(this.id)
      .subscribe(() => {
        this.loading = false;
        this.callUpdate();
      });
  }
}



