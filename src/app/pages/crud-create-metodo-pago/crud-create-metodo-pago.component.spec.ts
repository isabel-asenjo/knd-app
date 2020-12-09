import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCreateMetodoPagoComponent } from './crud-create-metodo-pago.component';

describe('CrudCreateMetodoPagoComponent', () => {
  let component: CrudCreateMetodoPagoComponent;
  let fixture: ComponentFixture<CrudCreateMetodoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCreateMetodoPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCreateMetodoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
