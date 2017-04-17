import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CustomerService} from "./customer/customer.service";
import {AppComponent} from "./app.component";
import {CustomerComponent} from "./customer/customer.component";
import {CustomersComponent} from "./customers/customers.component";
import {CustomersServed} from "./customers-served/customers-served.component";
import {CustomerAdd} from "./customer-add/customer-add.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {QueueService} from "./queue/queue.service";
import {ProductService} from "./product/product.service";
import {ProductComponent} from "./product/product.component";
import {Product} from "./product/product.model";
import {TimeService} from "./time/time.service";
import {TimeComponent} from "./time-display/time.component";
import {MomentModule} from "angular2-moment";
import {NamePipe} from "./name-filter/name.pipe";
import {SearchComponent} from "./search/search.component";
import {ShowPushBackPipe} from "./customer-show-push-back/show-push-back.pipe";
import {CustomerImageComponent} from "./customer-image/customer-image/customer-image.component";
import { StatsComponent } from './stats/stats.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomersComponent,
    CustomersServed,
    CustomerAdd,
    ProductListComponent,
    ProductComponent,
    TimeComponent,
    NamePipe,
    SearchComponent,
    ShowPushBackPipe,
    CustomerImageComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MomentModule
  ],
  providers: [
    QueueService,
    CustomerService,
    ProductService,
    Product,
    TimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
