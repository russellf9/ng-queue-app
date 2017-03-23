import {Component, ChangeDetectorRef} from "@angular/core";
import {Observable} from "rxjs/Observable";
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
              private changeDetectorRef:ChangeDetectorRef
              ) {

    this.productService.getProducts()

      .subscribe(
        // the first argument is a function which runs on success
        products => {
          this.products = products;
          this.setDefaultProduct();
        },
        // the second argument is a function which runs on error
        error => console.error(error),
        // the third argument is a function which runs on completion
        //   () => console.log('done adding Customer!')
      );
  }

  setDefaultProduct = function() {
    //noinspection TypeScriptUnresolvedVariable
    this.product = this.products[0];
  };

  updateProduct = function (product:any):void {
    //noinspection TypeScriptUnresolvedVariable
    this.product = product;
    this.changeDetectorRef.markForCheck();
  };

  onSubmit(form:any):void {
    let customer = {
      name: form.name,
      mobile: form.mobile,
      notes: form.notes,
      product: this.product
    };

    this.customerService.addCustomer(customer)
      .subscribe(() => {
        this.loading = false;
        this.setDefaultProduct();
      }, error => this.handleError(error),
      )
  }

  //noinspection JSMethodCanBeStatic
  handleError(error) {
    return Observable.throw(error);
  }
}

