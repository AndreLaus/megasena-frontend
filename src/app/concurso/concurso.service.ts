import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Concurso } from './concurso';
import { DetalhesConcurso } from './detalhes-concurso';
import { ConcursosPaginados } from './concursos-paginados';

const API = 'http://localhost:8080/megasena';

@Injectable({
  providedIn: 'root'
})
export class ConcursoService {

  constructor(private http: HttpClient) {
        
  }

  listaUltimoConcurso(){
      return this.http.get<Concurso>(API+'/concurso/ultimo');
  }

  listaUltimosConcurso(){
    return this.http.get<Concurso[]>(API+'/concurso/ultimos');
  }

  listaConcursos(page: number){
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<ConcursosPaginados>(API+'/concurso',{ params });
  }

  buscaConcurso(numero: string){
    return this.http.get<DetalhesConcurso>(API+'/concurso/'+numero);
  }
}
