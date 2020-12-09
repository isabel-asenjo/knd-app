import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUpdateFormMetodoPagoComponent } from './crud-update-form-metodo-pago.component';

describe('CrudUpdateFormMetodoPagoComponent', () => {
  let component: CrudUpdateFormMetodoPagoComponent;
  let fixture: ComponentFixture<CrudUpdateFormMetodoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUpdateFormMetodoPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUpdateFormMetodoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
