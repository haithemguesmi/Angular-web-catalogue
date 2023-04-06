import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  productId:number;
  productFormGroup?:FormGroup;
  submitted:boolean=false;
  //activer l'objet activatedRoute pour recuperer l'id
  constructor (
     private productService:ProductService,
     private fb:FormBuilder, private activatedRoute:ActivatedRoute) {
     this.productId =activatedRoute.snapshot.params['id'];
  }

  ngOnInit():void {
    this.productService.getProduct(this.productId)
      .subscribe(product => {
       this.productFormGroup=this.fb.group({
        id:[product.id,Validators.required],
        name:[product.name,Validators.required],
        price:[product.price,Validators.required],
        quantity:[product.quantity,Validators.required],
        selected:[product.selected,Validators.required],
        available:[product.available,Validators.required],
       })
    });
  }

  onUpdateProduct(){
    this.productService.updateProducts(this.productFormGroup?.value)
      .subscribe(data => {
        alert("Success Product update")
      })
  }
}
