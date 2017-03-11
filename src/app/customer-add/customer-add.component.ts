import {Component} from "@angular/core";
import {CustomerService} from "../customer/customer.service";
import {Product} from "../product/product.model";
import {ProductService} from "../product/product.service";

@Component({
  selector: 'customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
  providers: [CustomerService, ProductService]
})
export class CustomerAdd {

  product:Product;
  products:Product[];
  loading:Boolean;

  constructor(private customerService:CustomerService,
              private productService:ProductService,
              ) {

    this.productService.getProducts()
      .subscribe((products) => {
        this.products = products;
        this.product = products[0];
      });


  }

  updateProduct = function (product:Product):void {
    //noinspection TypeScriptUnresolvedVariable
    this.product = product;
  };

  onSubmit(form:any):void {
    let customer = {
      name: form.name,
      mobile: form.mobile,
      notes: form.notes,
      product: {name: form.product}
    };

    this.customerService.addCustomer(customer)
      .subscribe(() => {
        this.loading = false;
        // form.reset();
      })
  }
}

