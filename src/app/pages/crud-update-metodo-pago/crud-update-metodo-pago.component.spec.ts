import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUpdateMetodoPagoComponent } from './crud-update-metodo-pago.component';

describe('CrudUpdateMetodoPagoComponent', () => {
  let component: CrudUpdateMetodoPagoComponent;
  let fixture: ComponentFixture<CrudUpdateMetodoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUpdateMetodoPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUpdateMetodoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
