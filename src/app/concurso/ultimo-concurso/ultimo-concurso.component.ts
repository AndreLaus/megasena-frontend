import { Component, OnInit, Output } from '@angular/core';

import { ConcursoService } from '../concurso.service';
import { Concurso } from '../concurso';

@Component({
  selector: 'mgsn-ultimo-concurso',
  templateUrl: './ultimo-concurso.component.html',
  styleUrls: ['./ultimo-concurso.component.css']
})
export class UltimoConcursoComponent implements OnInit {

  concurso: Concurso;

  constructor(private concursoService: ConcursoService) { }

  ngOnInit() {
    this.concursoService
      .listaUltimoConcurso()
      .subscribe(
        concurso => this.concurso = concurso,
        err => console.log(err)
      );
  }

}
