import {Component, ChangeDetectorRef, Injector, ChangeDetectionStrategy} from "@angular/core";
import {CustomerService} from "../customer/customer.service";
import {AbstractComponent} from "../abstract/abstract.component";
import {Product} from "../product/product.model";
import {QueueService} from "../queue/queue.service";

@Component({
  selector: 'customer-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
  providers: [CustomerService, QueueService]
})
export class CustomerAdd extends AbstractComponent {

  product:Product;
  products:Product[];
  loading:Boolean;


  private customerService:CustomerService;

  constructor(private changeDetectorRef:ChangeDetectorRef,
              protected injector:Injector) {
    super();
    this.customerService = new CustomerService(injector);
  }


  // ==== ACTIONS ====

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

  // ==== DATA ====

  handleData(data) {
    super.handleData(data);
    this.products = data.queueData.products;
    this.setDefaultProduct();
    this.changeDetectorRef.markForCheck();
  }


  // ==== UTILITY FUNCTIONS ====

  setDefaultProduct = function () {
    //noinspection TypeScriptUnresolvedVariable
    this.product = this.products[0];
  };
}

