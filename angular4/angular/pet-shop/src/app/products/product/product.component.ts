import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ttt-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: any
  constructor() { }

  ngOnInit() {
  }

}
