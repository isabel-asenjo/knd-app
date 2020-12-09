import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUpdateMetodoEnvioComponent } from './crud-update-metodo-envio.component';

describe('CrudUpdateMetodoEnvioComponent', () => {
  let component: CrudUpdateMetodoEnvioComponent;
  let fixture: ComponentFixture<CrudUpdateMetodoEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUpdateMetodoEnvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUpdateMetodoEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
