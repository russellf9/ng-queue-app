import {Component, ChangeDetectorRef} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {CustomerService} from "../customer/customer.service";
import {Product} from "../product/product.model";
import {List} from "immutable";
import {QueueService} from "../queue/queue.service";


@Component({
  selector: 'customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
  providers: [CustomerService, QueueService]
})
export class CustomerAdd {

  product:Product;
  products:Product[];
  loading:Boolean;

  constructor(private customerService:CustomerService,
              private queueService:QueueService,
              private changeDetectorRef:ChangeDetectorRef
              ) {}


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

  handleData(list: List<any>) {
    let data = list.get(-1);
    this.products = data && data.queueData ? data.queueData.products : [];
    if (this.products && !this.product) {
      this.setDefaultProduct();
    }
    this.changeDetectorRef.markForCheck();
  }


  // ==== SUBSCRIPTION ====

  subscribe() {
    this.queueService.queueData
      .subscribe(
        list => this.handleData(list),
        error => this.handleError(error)
      )
  }
  unsubscribe() {
    this.queueService.queueData.unsubscribe();
  }

  //noinspection JSMethodCanBeStatic
  handleError(error) {
    return Observable.throw(error);
  }

  // ==== INTERFACE IMPLEMENTATION ====

  //noinspection JSUnusedGlobalSymbols
  ngOnInit() {
    this.subscribe();
  }

  //noinspection JSUnusedGlobalSymbols
  ngOnDestroy() {
    this.unsubscribe();
  }

  // ==== UTILITY FUNCTIONS ====

  setDefaultProduct = function() {
    //noinspection TypeScriptUnresolvedVariable
    this.product = this.products[0];
  };
}

