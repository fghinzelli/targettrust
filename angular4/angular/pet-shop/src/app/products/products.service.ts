import { Injectable } from '@angular/core';
// Angular 2,4
// import { Http } from '@angular/http'
// Angular 5
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:3000/products')
  }

  getById(id) {
    return this.http.get(`http://localhost:3000/products/${id}`)
  }
}
