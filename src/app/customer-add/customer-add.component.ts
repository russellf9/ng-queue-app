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

      .subscribe(
        // the first argument is a function which runs on success
        products => {
          this.products = products;
          this.product = products[0];
        },
        // the second argument is a function which runs on error
        error => console.error(error),
        // the third argument is a function which runs on completion
        //   () => console.log('done adding Customer!')
      );
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
      product: form.product
    };

    this.customerService.addCustomer(customer)
      .subscribe(() => {
        this.loading = false;
      })
  }
}

