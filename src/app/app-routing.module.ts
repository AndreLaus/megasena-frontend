import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UltimoConcursoComponent } from './concurso/ultimo-concurso/ultimo-concurso.component';
import { UltimosConcursosComponent } from './concurso/ultimos-concursos/ultimos-concursos.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { DetalhesConcursoComponent } from './concurso/detalhes-concurso/detalhes-concurso.component';
import { DetalhesConcursoResolver } from './concurso/detalhes-concurso.resolver';
import { ListaConcursosComponent } from './concurso/lista-concursos/lista-concursos.component';
import { ConcursosPaginadosResolver } from './concurso/concursos-paginados.resolver';


const routes: Routes = [
  { 
    path: 'concurso/ultimo', 
    component: UltimoConcursoComponent
  },
  { 
    path: 'concurso/ultimos', 
    component: UltimosConcursosComponent
  },
  { 
    path: 'concurso/lista', 
    component: ListaConcursosComponent,
    resolve: {
      concursosPaginados: ConcursosPaginadosResolver
    }
  },
  { 
    path: 'concurso/:numeroConcurso', 
    component: DetalhesConcursoComponent,
    resolve: {
      detalhesConcurso: DetalhesConcursoResolver
    }
  },
  { 
    path: '**', 
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    DetalhesConcursoResolver
  ]
})
export class AppRoutingModule { }
