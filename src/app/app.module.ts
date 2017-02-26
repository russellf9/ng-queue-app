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

import { Product } from './product/product.model';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomersComponent,
    CustomersServed,
    CustomerAdd,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CustomerService,
    CustomersServedService,
    Product
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
