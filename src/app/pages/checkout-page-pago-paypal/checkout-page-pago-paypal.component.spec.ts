import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPagePagoPaypalComponent } from './checkout-page-pago-paypal.component';

describe('CheckoutPagePagoPaypalComponent', () => {
  let component: CheckoutPagePagoPaypalComponent;
  let fixture: ComponentFixture<CheckoutPagePagoPaypalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutPagePagoPaypalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutPagePagoPaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
