import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltimoConcursoComponent } from './ultimo-concurso.component';
import { DezenasModule } from 'src/app/dezenas/dezenas.module';



@NgModule({
  declarations: [
    UltimoConcursoComponent
  ],
  imports: [
    CommonModule,
    DezenasModule
  ],
  exports: [
    UltimoConcursoComponent
  ]
})
export class UltimoConcursoModule { }
