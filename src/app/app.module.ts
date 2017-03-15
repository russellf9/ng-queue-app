import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CustomerService} from './customer/customer.service';
import { CustomersServedService }  from './customers-served/customers-served.service';
import { AppComponent } from './app.component';

import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersServed } from './customers-served/customers-served.component';

import { CustomerAdd } from './customer-add/customer-add.component';

import { ProductList } from './product-list/product-list.component';

import { QueueService } from './queue/queue.service';
import { ProductService } from './product/product.service';
import { ProductComponent } from './product/product.component';
import { Product } from './product/product.model';

import { MessageService } from './message/message.service';

import { TimeService } from './time/time.service';
import { TimeComponent } from './time-display/time.component';

import {MomentModule} from 'angular2-moment';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomersComponent,
    CustomersServed,
    CustomerAdd,
    ProductList,
    ProductComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule
  ],
  providers: [
    QueueService,
    CustomerService,
    CustomersServedService,
    ProductService,
    Product,
    MessageService,
    TimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
