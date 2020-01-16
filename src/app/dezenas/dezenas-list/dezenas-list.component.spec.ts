import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DezenasListComponent } from './dezenas-list.component';

describe('DezenasListComponent', () => {
  let component: DezenasListComponent;
  let fixture: ComponentFixture<DezenasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DezenasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DezenasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
