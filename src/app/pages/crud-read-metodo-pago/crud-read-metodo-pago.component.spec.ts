import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudReadMetodoPagoComponent } from './crud-read-metodo-pago.component';

describe('CrudReadMetodoPagoComponent', () => {
  let component: CrudReadMetodoPagoComponent;
  let fixture: ComponentFixture<CrudReadMetodoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudReadMetodoPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudReadMetodoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
