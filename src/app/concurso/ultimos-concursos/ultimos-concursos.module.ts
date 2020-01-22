import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltimosConcursosComponent } from './ultimos-concursos.component';
import { DezenasModule } from 'src/app/dezenas/dezenas.module';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';



@NgModule({
  declarations: [
    UltimosConcursosComponent
  ],
  imports: [
    CommonModule,
    DezenasModule,
    DarkenOnHoverModule
  ],
  exports: [
    UltimosConcursosComponent
  ]
})
export class UltimosConcursosModule { }
