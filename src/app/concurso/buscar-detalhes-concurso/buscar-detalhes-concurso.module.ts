import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BuscarDetalhesConcursoComponent } from './buscar-detalhes-concurso.component';



@NgModule({
  declarations: [
    BuscarDetalhesConcursoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    BuscarDetalhesConcursoComponent
  ]
})
export class BuscarDetalhesConcursoModule { }
