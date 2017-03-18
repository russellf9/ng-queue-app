import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {CustomerService} from './customer.service';
import {Product} from '../product/product.model';
import {ProductService} from "../product/product.service";

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

  @Output() onUpdate = new EventEmitter();

  loading:Boolean;
  products:Product[];

  constructor(private customerService:CustomerService,
              private productService:ProductService,
              private changeDetectorRef:ChangeDetectorRef) {

    this.productService.getProducts()
      .subscribe((products) => {
        this.products = products;
        this.changeDetectorRef.markForCheck();
      });
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
        this.loading = false;
      });

  };


  serve() {
    this.loading = true;
    this.customerService.serveCustomer(this.id)
      .subscribe(() => {
        this.loading = false;
      })
  }

  remove() {
    this.loading = true;
    this.customerService.deleteCustomer(this.id)
      .subscribe(() => {
        this.loading = false;
      });
  }
}



