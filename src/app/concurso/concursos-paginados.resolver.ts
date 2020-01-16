import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ConcursoService } from './concurso.service';
import { ConcursosPaginados } from './concursos-paginados';


@Injectable({providedIn: 'root'})
export class ConcursosPaginadosResolver implements Resolve<Observable<ConcursosPaginados>> {
    constructor(private service: ConcursoService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ConcursosPaginados> | Observable<Observable<ConcursosPaginados>> | Promise<Observable<ConcursosPaginados>> {
        return this.service.listaConcursos(0);
    }
    
}