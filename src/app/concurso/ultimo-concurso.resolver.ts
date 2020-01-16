import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Concurso } from './concurso';
import { ConcursoService } from './concurso.service';

@Injectable({providedIn: "root"})
export class UltimoConcursoResolver implements Resolve<Observable<Concurso>>{
    
    constructor(private service: ConcursoService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Concurso> | Observable<Observable<Concurso>> | Promise<Observable<Concurso>> {
        return this.service.buscaUltimoConcurso();
    }
}