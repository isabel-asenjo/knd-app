import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPagoEfectivoComponent } from './checkout-pago-efectivo.component';

describe('CheckoutPagoEfectivoComponent', () => {
  let component: CheckoutPagoEfectivoComponent;
  let fixture: ComponentFixture<CheckoutPagoEfectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutPagoEfectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutPagoEfectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
