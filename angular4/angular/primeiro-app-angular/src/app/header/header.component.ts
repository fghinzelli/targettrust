import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ttt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('description') title: string

  constructor() { }

  ngOnInit() {
  }

}
