import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargameComponent } from './cargame.component';

describe('CargameComponent', () => {
  let component: CargameComponent;
  let fixture: ComponentFixture<CargameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
