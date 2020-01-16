import { Component, OnInit } from '@angular/core';

import { ConcursoService } from '../concurso.service';
import { Concurso } from '../concurso';

@Component({
  selector: 'mgsn-ultimos-concursos',
  templateUrl: './ultimos-concursos.component.html',
  styleUrls: ['./ultimos-concursos.component.css']
})
export class UltimosConcursosComponent implements OnInit {

  concursos: Concurso[];

  constructor(private concursoService: ConcursoService) { }

  ngOnInit() {
    this.concursoService
      .listaUltimosConcurso()
      .subscribe(
        concursos => this.concursos = concursos,
        err => console.log(err)
      );
  }

}
