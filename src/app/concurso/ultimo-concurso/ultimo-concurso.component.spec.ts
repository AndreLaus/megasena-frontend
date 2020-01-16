import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimoConcursoComponent } from './ultimo-concurso.component';

describe('UltimoConcursoComponent', () => {
  let component: UltimoConcursoComponent;
  let fixture: ComponentFixture<UltimoConcursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimoConcursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimoConcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
