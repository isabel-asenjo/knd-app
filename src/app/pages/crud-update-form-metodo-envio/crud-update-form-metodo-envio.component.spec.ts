import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUpdateFormMetodoEnvioComponent } from './crud-update-form-metodo-envio.component';

describe('CrudUpdateFormMetodoEnvioComponent', () => {
  let component: CrudUpdateFormMetodoEnvioComponent;
  let fixture: ComponentFixture<CrudUpdateFormMetodoEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUpdateFormMetodoEnvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUpdateFormMetodoEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
