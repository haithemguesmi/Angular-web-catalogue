import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "src/app/model/product.model";
import { environments } from "src/environments/environments";
import { from, Observable } from 'rxjs';


@Injectable({providedIn: "root"})
//providedIn c v d disponible sur la route de l'application et le sevice disponible dans la racine de l'application
//sinon il faut mettre de l'app module
export class ProductService {

constructor(private http:HttpClient){}

getAllProducts():Observable<Product[]>{
  // let host=(Math.random()>0.2)?environments.host:environments.unreachableHost;
  let host=environments.host;
  return this.http.get<Product[]>(host+"/products");
}

getSelecttedProducts():Observable<Product[]>{
  let host=environments.host;
  return this.http.get<Product[]>(host+"/products?selected=true");
}

getAvailableProducts():Observable<Product[]>{
  let host=environments.host;
  return this.http.get<Product[]>(host+"/products?available=true");
}
searchProducts(Keyword:string):Observable<Product[]>{
  let host=environments.host;
  return this.http.get<Product[]>(host+"/products?name_like="+Keyword);
}

select(product:Product):Observable<Product>{
  let host=environments.host;
  product.selected=!product.selected;
  return this.http.put<Product>(host+"/products/"+product.id,product);
}

deleteProduct(product:Product):Observable<void>{
  //delete return rien 'void'
  let host=environments.host;
  product.selected=!product.selected;
  return this.http.delete<void>(host+"/products/"+product.id);
}

save(product:Product):Observable<Product> {
  let host=environments.host;
  return this.http.post<Product>(host+"/products/",product);
}


getProduct(id:number):Observable<Product>{
  let host=environments.host;
  return this.http.get<Product>(host+"/products/"+id);
}

updateProducts(product:Product):Observable<Product>{
  let host=environments.host;
  return this.http.put<Product>(host+"/products/"+product.id,product);
}
}
