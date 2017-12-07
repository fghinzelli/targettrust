import { Injectable } from '@angular/core';
// Angular 2,4
// import { Http } from '@angular/http'
// Angular 5
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Product } from "./product.model";

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Product[]>{
    return this.http.get('http://localhost:3000/products')
    .map((data:Product[]) => data)
    .catch(error => Observable.throw(error))
  }

  getById(id : number) : Observable<Product>{
    return this.http.get(`http://localhost:3000/products/${id}`)
    .map((data: Product) => data)
    /*
    Para evitar que atributos que não estão na interface sejam exibidos é possível instanciar 
    aqui um objeto somente com os atributos que devem ser exibidos
    .map((data:any[]) => {
      const product = new Product()
      product.id = data.id
      product.name = data.name
      product.description = data.description
      product.price = data.price
      return product
    })
    */
    .catch(error => Observable.throw(error))

  }

  create(product: Product) : Observable<Product> {
    return this.http.post('http://localhost:3000/products', product)
    .map((data:Product) => data)
    .catch(error => Observable.throw(error))
  }
}
