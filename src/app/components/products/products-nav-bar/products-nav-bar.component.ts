import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActionEvent, ProductActionTypes } from 'src/app/state/product.state';
@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  //1er solution
  // @Output() producteventEmitter : EventEmitter<any> = new EventEmitter();
  //ActionEvent correspond a la type de evenement et le payload  ->
  //payload pour faire passer un parametre
  // <!-- decompostion  eventEmitter -->
  @Output() producteventEmitter : EventEmitter<ActionEvent> = new EventEmitter();

    constructor(){
    }
  ngOnInit(): void {
  }

  OnGetSelectedProducts(){
    this.producteventEmitter.emit({type:ProductActionTypes.GET_SELECTED_PRODUCTS});
  }
    OnGetAllProducts(){
      //1er solution
      //this.producteventEmitter.emit(ProductActionTypes.GET_ALL_PRODUCTS);
      this.producteventEmitter.emit({type:ProductActionTypes.GET_ALL_PRODUCTS});
  }
  OnGetAvailableProducts(){
    this.producteventEmitter.emit({type:ProductActionTypes.GET_AVAILABLE_PRODUCTS});
  }

  onNewProduct(){
    this.producteventEmitter.emit({type:ProductActionTypes.NEW_PRODUCTS});
  }

  onSearch(dataForm :any){
    this.producteventEmitter.emit({type:ProductActionTypes.SEARCH_PRODUCTS, payload:dataForm});
  }

}
