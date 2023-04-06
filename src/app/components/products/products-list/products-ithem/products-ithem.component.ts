import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, AppDataState, ProductActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-ithem',
  templateUrl: './products-ithem.component.html',
  styleUrls: ['./products-ithem.component.css']
})
export class ProductsIthemComponent implements OnInit {

  @Input() product?:Product;
  @Output() productsEventEmitter:EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor(){}

   ngOnInit(): void {
   }
   onSelect(product :Product){
    this.productsEventEmitter.emit({type:ProductActionTypes.SELECT_PRODUCT,payload:product});
   }
   onDelete(product :Product){
    this.productsEventEmitter.emit({type:ProductActionTypes.DELETE_PRODUCT,payload:product});
   }
   onEdit(product :Product){
    this.productsEventEmitter.emit({type:ProductActionTypes.EDIT_PRODUCT,payload:product});
   }


}
