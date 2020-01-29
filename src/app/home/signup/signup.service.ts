import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NovoUsuario } from './novo-usuario';

const API_URL = "http://localhost:8080/megasena";

@Injectable({providedIn: "root"})
export class SignupService {

    constructor(private http: HttpClient) {}

    checkEmailTaken(email: string) {
        return this.http.get<boolean>(API_URL + "/user/exists/"+email);
        
    }

    signup(newUser: NovoUsuario) {
        return this.http.post(API_URL+ "/user/reg", newUser);
    }
}