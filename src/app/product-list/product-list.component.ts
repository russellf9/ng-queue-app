import {Component, Input, Output, OnInit, EventEmitter, SimpleChange} from '@angular/core';
import { Product } from '../product/product.model';

declare var $:any;

@Component({
  selector: 'product-list',
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss']
})
export class ProductList implements OnInit {

  @Input() products: Product[];
  @Input() selectedProduct: Product;

  @Output() onChange: EventEmitter<Product> = new EventEmitter();

  selectedItem: Product;

  constructor() {}

  select(product: Product) {
    this.onChange.emit(product);
  }

  //noinspection JSUnusedGlobalSymbols
  ngOnChanges( changes : {[ propName: string]:  SimpleChange }) {
    for (let propName in changes) {
      if (propName === 'products' && this.products && this.products.length) {
        this.selectedItem = this.selectedProduct;
      }
      if (propName === 'selectedProduct') {
        this.selectedItem = this.selectedProduct;
      }
    }
  }

  //noinspection JSUnusedGlobalSymbols
  ngOnInit() {
    //noinspection TypeScriptValidateJSTypes
    $(document).ready(function(){
      setTimeout(() => {
        //noinspection TypeScriptValidateJSTypes
        $('.ui.dropdown').dropdown();
      }, 1000);
    });
  }
}

