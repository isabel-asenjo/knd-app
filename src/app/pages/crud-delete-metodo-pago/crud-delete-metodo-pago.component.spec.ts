import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDeleteMetodoPagoComponent } from './crud-delete-metodo-pago.component';

describe('CrudDeleteMetodoPagoComponent', () => {
  let component: CrudDeleteMetodoPagoComponent;
  let fixture: ComponentFixture<CrudDeleteMetodoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDeleteMetodoPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDeleteMetodoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
