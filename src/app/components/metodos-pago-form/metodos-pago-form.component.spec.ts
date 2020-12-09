import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodosPagoFormComponent } from './metodos-pago-form.component';

describe('MetodosPagoFormComponent', () => {
  let component: MetodosPagoFormComponent;
  let fixture: ComponentFixture<MetodosPagoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodosPagoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodosPagoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
