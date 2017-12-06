import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from "../products.service";

@Component({
  selector: 'ttt-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ ProductsService ]
})
export class ProductDetailsComponent implements OnInit {
  product: any
  constructor(private activatedRoute: ActivatedRoute, 
              private productsService: ProductsService) { }
  
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id']
    this.productsService.getById(id).subscribe(
      data => this.product = data
    )
  }

}
