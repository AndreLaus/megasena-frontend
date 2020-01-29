import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { JwtResponse } from './jwt-response';
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:8080/megasena';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private userService: UserService) { }

  authenticate(userName: string, password: string) {
    
    return this.http
      .post<JwtResponse>(
        API_URL + '/user/auth', 
        { email: userName, senha: password }
        )
      .pipe(tap(res => {
        this.userService.setToken(res.token);
        console.log( `Usuário ${userName} autenticado com o token ${res.token}`);
      }));
  }

}
