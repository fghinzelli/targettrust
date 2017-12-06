import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from "../products.service";
import { Product } from "../product.model";

@Component({
  selector: 'ttt-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ ProductsService ]
})
export class ProductDetailsComponent implements OnInit {
  // Instanciar o objeto previne que erros sejam exibidos quando ainda não tiverem sido recebidos os dados do webservice
  product: Product = new Product()
  today = new Date()

  constructor(private activatedRoute: ActivatedRoute, 
              private productsService: ProductsService) { }
  
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id']
    this.productsService.getById(id).subscribe(
      data => this.product = data
    )
  }

}
