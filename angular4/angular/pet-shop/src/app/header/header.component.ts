import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'ttt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userIsLogged: boolean = false
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userIsLogged = this.authService.isLogged()

    this.authService.userAuthenticate.subscribe(
      data => this.userIsLogged = data
    )
  }

  doLogout($event) {
    $event.preventDefault();
    this.authService.logout()
  }

}
