import { Component, OnInit } from '@angular/core';

import { DetalhesConcurso } from '../detalhes-concurso';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'msgn-detalhes-concurso',
  templateUrl: './detalhes-concurso.component.html',
  styleUrls: ['./detalhes-concurso.component.css']
})
export class DetalhesConcursoComponent implements OnInit {

  detalhesConcurso: DetalhesConcurso;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.detalhesConcurso = this.activatedRoute.snapshot.data['detalhesConcurso'];
    this.activatedRoute.params.subscribe(params => {
      this.detalhesConcurso = this.activatedRoute.snapshot.data['detalhesConcurso'];
    });
  }

}
