import { Component, OnInit } from '@angular/core';
import { Product } from "../product.model";
import { Router } from "@angular/router"
import { ProductsService } from "../products.service";

@Component({
  selector: 'ttt-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product = new Product
  constructor(private productsService: ProductsService,
              private router: Router ) { }

  ngOnInit() {
  }

  save() {
    this.productsService.create(this.product).subscribe(
      data => this.router.navigate(['/produtos'])
    )
  }

}
