import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosConcursosComponent } from './ultimos-concursos.component';

describe('UltimosConcursosComponent', () => {
  let component: UltimosConcursosComponent;
  let fixture: ComponentFixture<UltimosConcursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimosConcursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimosConcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
