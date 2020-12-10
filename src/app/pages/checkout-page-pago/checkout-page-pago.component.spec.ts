import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPagePagoComponent } from './checkout-page-pago.component';

describe('CheckoutPagePagoComponent', () => {
  let component: CheckoutPagePagoComponent;
  let fixture: ComponentFixture<CheckoutPagePagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutPagePagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutPagePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
