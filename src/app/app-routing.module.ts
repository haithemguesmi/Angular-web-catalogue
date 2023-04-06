import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsAddComponent } from './components/products-add/products-add.component';
import { ProductsEditComponent } from './components/products-edit/products-edit.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
{path: "products", component: ProductsComponent },
{path: "newProduct", component: ProductsAddComponent},
{path: "editProduct/:id", component: ProductsEditComponent},
{path : "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
