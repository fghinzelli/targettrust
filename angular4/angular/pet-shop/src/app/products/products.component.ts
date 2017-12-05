import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ttt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [
    {id: 1, name: "Racao pedigree", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, magni."},
    {id: 2, name: "Gaiola de Hamster", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, magni."},
    {id: 3, name: "Cama para cachorro", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, magni."},
    {id: 4, name: "Roupa de gato", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, magni."}

  ]
  constructor() { }

  ngOnInit() {
  }

}
