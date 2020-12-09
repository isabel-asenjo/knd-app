import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDeleteMetodoEnvioComponent } from './crud-delete-metodo-envio.component';

describe('CrudDeleteMetodoEnvioComponent', () => {
  let component: CrudDeleteMetodoEnvioComponent;
  let fixture: ComponentFixture<CrudDeleteMetodoEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDeleteMetodoEnvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDeleteMetodoEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
