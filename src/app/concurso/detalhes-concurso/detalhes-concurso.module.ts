import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalhesConcursoComponent } from './detalhes-concurso.component';
import { DezenasModule } from 'src/app/dezenas/dezenas.module';
import { BuscarDetalhesConcursoModule } from '../buscar-detalhes-concurso/buscar-detalhes-concurso.module';


@NgModule({
    declarations: [
        DetalhesConcursoComponent
    ],
    imports: [
        CommonModule,
        BuscarDetalhesConcursoModule,
        DezenasModule
    ],
    exports: [
        DetalhesConcursoComponent
    ]
})
export class DetalhesConcursoModule { }