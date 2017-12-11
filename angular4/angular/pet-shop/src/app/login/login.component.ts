import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router"
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'ttt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //username: string
  //password: string

  loginForm: FormGroup
  
  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control('', [ Validators.required, Validators.minLength(4) ]),
      password: this.formBuilder.control('', [ Validators.required ])
    })
  }

  get username() {
    return this.loginForm.get('username')
  }

  doLogin() {
    const  {
      username, 
      password
    } = this.loginForm.value

    this.authService.login(username, password).subscribe(
      data => {
        if(!data) {
          alert('Usuário ou senha inválidos!')
          return
        }
        this.router.navigate(['/produtos/novo'])
      }
    )
  }


}
