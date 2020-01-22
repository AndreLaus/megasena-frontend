import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaConcursosComponent } from './lista-concursos.component';
import { DezenasModule } from 'src/app/dezenas/dezenas.module';
import { BotaoCarregarModule } from './botao-carregar/botao-carregar.module';
import { BuscarDetalhesConcursoModule } from '../buscar-detalhes-concurso/buscar-detalhes-concurso.module';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';



@NgModule({
  declarations: [
    ListaConcursosComponent
  ],
  imports: [
    CommonModule,
    DezenasModule,
    BotaoCarregarModule,
    BuscarDetalhesConcursoModule,
    DezenasModule,
    DarkenOnHoverModule
  ],
  exports: [
    ListaConcursosComponent
  ]
})
export class ListaConcursosModule { }
