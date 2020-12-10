import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPagePagoTarjetaComponent } from './checkout-page-pago-tarjeta.component';

describe('CheckoutPagePagoTarjetaComponent', () => {
  let component: CheckoutPagePagoTarjetaComponent;
  let fixture: ComponentFixture<CheckoutPagePagoTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutPagePagoTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutPagePagoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
