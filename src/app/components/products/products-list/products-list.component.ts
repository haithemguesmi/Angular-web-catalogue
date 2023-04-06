import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionTypes } from 'src/app/state/product.state';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productsInput$:Observable<AppDataState<Product[]>> |null=null;
  // <!-- decompostion  eventEmitter -->
  @Output() productsEventEmitter:EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  readonly DataStateEnum =DataStateEnum;

   constructor(){}

   ngOnInit(): void {
   }

   onActionEvent($event: ActionEvent){
    this.productsEventEmitter.emit($event);
   }

}
