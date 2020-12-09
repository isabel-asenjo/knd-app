import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMetodoPagoComponent } from './update-metodo-pago.component';

describe('UpdateMetodoPagoComponent', () => {
  let component: UpdateMetodoPagoComponent;
  let fixture: ComponentFixture<UpdateMetodoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMetodoPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMetodoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
