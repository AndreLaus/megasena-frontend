import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltimosConcursosComponent } from './ultimos-concursos.component';
import { DezenasModule } from 'src/app/dezenas/dezenas.module';



@NgModule({
  declarations: [
    UltimosConcursosComponent
  ],
  imports: [
    CommonModule,
    DezenasModule
  ],
  exports: [
    UltimosConcursosComponent
  ]
})
export class UltimosConcursosModule { }
