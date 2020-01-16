import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ConcursoService } from './concurso.service';
import { DetalhesConcurso } from './detalhes-concurso';


@Injectable({providedIn: 'root'})
export class DetalhesConcursoResolver implements Resolve<Observable<DetalhesConcurso>> {
    constructor(private service: ConcursoService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DetalhesConcurso> | Observable<Observable<DetalhesConcurso>> | Promise<Observable<DetalhesConcurso>> {
        const numeroConcurso = route.params.numeroConcurso;

        return this.service.buscaConcurso(numeroConcurso);
    }
}