import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Concurso } from '../concurso';
import { ConcursoService } from '../concurso.service';
import { ConcursosPaginados } from '../concursos-paginados';

@Component({
  selector: 'mgsn-lista-concursos',
  templateUrl: './lista-concursos.component.html',
  styleUrls: ['./lista-concursos.component.css']
})
export class ListaConcursosComponent implements OnInit {

  concursos: Concurso[] = [];
  temMais: boolean = false;
  paginaAtual: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private concursoService: ConcursoService
    ) { }

  ngOnInit(): void {
    this.preparaDados(this.activatedRoute.snapshot.data['concursosPaginados']);
    
  }

  preparaDados(concursosPaginados: ConcursosPaginados) {
    this.concursos.push(...concursosPaginados.content);
    this.temMais = !concursosPaginados.last;
  }

  carregarMais() {
    this.concursoService
      .listaConcursos(++this.paginaAtual)
      .subscribe(concursosPaginados => this.preparaDados(concursosPaginados));
  }

}
