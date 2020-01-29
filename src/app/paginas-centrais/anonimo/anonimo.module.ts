import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnonimoComponent } from './anonimo.component';
import { UltimoConcursoModule } from 'src/app/concurso/ultimo-concurso/ultimo-concurso.module';
import { UltimosConcursosModule } from 'src/app/concurso/ultimos-concursos/ultimos-concursos.module';
import { DezenasModule } from 'src/app/dezenas/dezenas.module';



@NgModule({
  declarations: [
    AnonimoComponent
  ],
  imports: [
    CommonModule,
    DezenasModule,
    UltimoConcursoModule,
    UltimosConcursosModule
  ],
  exports: [
    AnonimoComponent
  ]
})
export class AnonimoModule { }
