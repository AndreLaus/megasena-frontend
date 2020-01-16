import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesConcursoComponent } from './detalhes-concurso.component';

describe('DetalhesConcursoComponent', () => {
  let component: DetalhesConcursoComponent;
  let fixture: ComponentFixture<DetalhesConcursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesConcursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesConcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
