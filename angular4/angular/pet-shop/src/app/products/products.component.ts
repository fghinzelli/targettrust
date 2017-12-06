import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from "./product.model";

@Component({
  selector: 'ttt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ ProductsService ]
})
export class ProductsComponent implements OnInit {

  products: IProduct[]
  /*
  Valores estaticos
  products: any[] = [
    {id: 1, name: "Racao pedigree", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, magni."},
    {id: 2, name: "Gaiola de Hamster", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, magni."},
    {id: 3, name: "Cama para cachorro", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, magni."},
    {id: 4, name: "Roupa de gato", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, magni."}

  ]
  */
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getAll().subscribe(
      (data:IProduct[]) => this.products = data,
      error => { 
        alert('Ocorreu um erro!');
        console.log(error);
      }
    )
  }

}