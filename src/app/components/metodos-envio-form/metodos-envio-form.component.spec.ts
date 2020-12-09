import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodosEnvioFormComponent } from './metodos-envio-form.component';

describe('MetodosEnvioFormComponent', () => {
  let component: MetodosEnvioFormComponent;
  let fixture: ComponentFixture<MetodosEnvioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodosEnvioFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodosEnvioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
