import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCreateMetodoEnvioComponent } from './crud-create-metodo-envio.component';

describe('CrudCreateMetodoEnvioComponent', () => {
  let component: CrudCreateMetodoEnvioComponent;
  let fixture: ComponentFixture<CrudCreateMetodoEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCreateMetodoEnvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCreateMetodoEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
