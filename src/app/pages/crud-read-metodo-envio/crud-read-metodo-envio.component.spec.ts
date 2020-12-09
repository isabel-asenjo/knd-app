import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudReadMetodoEnvioComponent } from './crud-read-metodo-envio.component';

describe('CrudReadMetodoEnvioComponent', () => {
  let component: CrudReadMetodoEnvioComponent;
  let fixture: ComponentFixture<CrudReadMetodoEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudReadMetodoEnvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudReadMetodoEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
