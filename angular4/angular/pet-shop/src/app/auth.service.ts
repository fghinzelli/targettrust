import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from "@angular/router";



@Injectable()
export class AuthService {
  user : any

  userAuthenticate: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private http: HttpClient,
              private router: Router) { 
    const isLogged = this.isLogged()
    if (isLogged) {
      this.userAuthenticate.emit(isLogged)
    }
  }

  isLogged() : boolean {
    try {
      const data = localStorage.getItem('user')
      if(!data) {
        return false
      }

      this.user = JSON.parse(data)
      return true
    } catch (error) {
      return false
    }
  }

  logout() {
    localStorage.removeItem('user')
    this.userAuthenticate.emit(false)
    this.router.navigate(['/inicio'])
  }

  login(username: string, password: string) : Observable<boolean> {
  return this.http.get(`http://localhost:3000/users?username=${username}&password=${password}`)
    .map((data: any[]) => {
      if (!data.length) {
        return false
      }

      const [ user ] = data
      delete user.password
      localStorage.setItem('user', JSON.stringify(user))
      
      this.userAuthenticate.emit(true)
      
      return true 
    })
    .catch(error => Observable.throw(error))
  }
}
