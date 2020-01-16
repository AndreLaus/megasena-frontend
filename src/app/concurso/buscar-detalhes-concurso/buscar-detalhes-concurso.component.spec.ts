import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDetalhesConcursoComponent } from './buscar-detalhes-concurso.component';

describe('BuscarDetalhesConcursoComponent', () => {
  let component: BuscarDetalhesConcursoComponent;
  let fixture: ComponentFixture<BuscarDetalhesConcursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarDetalhesConcursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarDetalhesConcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
