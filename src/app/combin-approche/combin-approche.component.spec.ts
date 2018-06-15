import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineComponent } from './combin-approche.component';

describe('CombinApprocheComponent', () => {
  let component: CombineComponent;
  let fixture: ComponentFixture<CombineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
