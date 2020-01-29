import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConcursoModule } from './concurso/concurso.module';
import { ErrorsModule } from './errors/errors.module';
import { AnonimoModule } from './paginas-centrais/anonimo/anonimo.module';
import { LogadoModule } from './paginas-centrais/logado/logado.module';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConcursoModule,
    ErrorsModule,
    AnonimoModule,
    LogadoModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
