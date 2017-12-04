import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ttt-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  send() {
    alert('formulario enviado')
  }

}
