import { Component, OnInit, Output } from '@angular/core';

import { ConcursoService } from '../concurso.service';
import { Concurso } from '../concurso';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mgsn-ultimo-concurso',
  templateUrl: './ultimo-concurso.component.html',
  styleUrls: ['./ultimo-concurso.component.css']
})
export class UltimoConcursoComponent implements OnInit {

  concurso: Concurso;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.concurso = this.activatedRoute.snapshot.data['concurso'];
  }

}
