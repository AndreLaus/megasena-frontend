import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private userSubject = new BehaviorSubject<User>(null);

  constructor(private tokenService: TokenService) { 
    this.tokenService.hasToken() &&
        this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;

    this.userSubject.next(user);
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }
  
  islogged() {
    return this.tokenService.hasToken();
  }
}
