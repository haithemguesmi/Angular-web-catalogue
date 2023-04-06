import { Component ,OnInit  } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/products.service';
import { catchError, from, map, Observable, of, startWith } from 'rxjs';
import { AppDataState, DataStateEnum, ProductActionTypes } from 'src/app/state/product.state';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // //1er solution
  //products?:Product[];
  //? init null ou bien Product[] null=null

  products$:Observable<AppDataState<Product[]>> |null=null;
   readonly DataStateEnum =DataStateEnum;
  constructor(private productService: ProductService,private router:Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  //2eme solution
  OnGetAllProducts(){
   this.products$=this.productService.getAllProducts().pipe(
    map(data=>{
      console.log(data); 
      return ({dataState:DataStateEnum.LOADED,data:data})
    }),
    startWith({dataState:DataStateEnum.LOADING}),
    catchError(err=>of({dataState:DataStateEnum.EEROR,errorMessage:err.message}))
   );
  }
  // //1er solution
  // OnGetAllProducts() {
  //   // on va stocker les donnes dans le data dans va effecteur au this.products
  //   this.productService.getAllProducts().subscribe(data=>{
  //     this.products = data;
  //   })
  // }
  OnGetSelectedProducts(){
    this.products$=this.productService.getSelecttedProducts().pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.EEROR,errorMessage:err.message}))
     );
  }
  OnGetAvailableProducts(){
    this.products$=this.productService.getAvailableProducts().pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.EEROR,errorMessage:err.message}))
     );
  }
  onSearch(dataForm:any){
    this.products$=this.productService.searchProducts(dataForm.keyword).pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.EEROR,errorMessage:err.message}))
     );
  }
  onSelect(p:Product){
    this.productService.select(p)
    .subscribe(data=>{
      p.selected = data.selected;
    })
  }
  onDelete(p:Product) {
    let v=confirm("Ete vous supprimer");
    if(v==true)
    this.productService.deleteProduct(p)
     .subscribe(data=>{
      //recharcher les donners
      this.OnGetAllProducts();
     })
  }

  onNewProduct(){
  this.router.navigate(["/newProduct"]);
  }
  onEdit(p: Product) {
    this.router.navigateByUrl("/editProduct/"+p.id);
  }

  onActionEvent($event :any) {
    // console.log("test");
     console.log($event);
    switch ($event.type){
      case ProductActionTypes.GET_ALL_PRODUCTS :this.OnGetAllProducts();break;
      case ProductActionTypes.GET_SELECTED_PRODUCTS :this.OnGetSelectedProducts();break;
      case ProductActionTypes.GET_AVAILABLE_PRODUCTS:this.OnGetAvailableProducts();break;
      case ProductActionTypes.SEARCH_PRODUCTS :this.onSearch($event.payload);break;
      case ProductActionTypes.NEW_PRODUCTS :this.onNewProduct();break;
      case ProductActionTypes.SELECT_PRODUCT :this.onSelect($event.payload);break;
      case ProductActionTypes.DELETE_PRODUCT :this.onDelete($event.payload);break;
      case ProductActionTypes.EDIT_PRODUCT :this.onEdit($event.payload);break;
    }
  }
}
