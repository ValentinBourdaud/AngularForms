import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireTSFirstComponent } from './formulaire-tsfirst.component';

describe('FormulaireTSFirstComponent', () => {
  let component: FormulaireTSFirstComponent;
  let fixture: ComponentFixture<FormulaireTSFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireTSFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireTSFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
