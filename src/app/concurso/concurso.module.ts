import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BuscarDetalhesConcursoModule } from './buscar-detalhes-concurso/buscar-detalhes-concurso.module';
import { ListaConcursosModule } from './lista-concursos/lista-concursos.module';
import { DetalhesConcursoModule } from './detalhes-concurso/detalhes-concurso.module';
import { UltimoConcursoModule } from './ultimo-concurso/ultimo-concurso.module';
import { UltimosConcursosModule } from './ultimos-concursos/ultimos-concursos.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    BuscarDetalhesConcursoModule,
    DetalhesConcursoModule,
    ListaConcursosModule,
    UltimoConcursoModule,
    UltimosConcursosModule
  ]
})
export class ConcursoModule { }
