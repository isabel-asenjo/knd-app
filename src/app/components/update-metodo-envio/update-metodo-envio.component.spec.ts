import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMetodoEnvioComponent } from './update-metodo-envio.component';

describe('UpdateMetodoEnvioComponent', () => {
  let component: UpdateMetodoEnvioComponent;
  let fixture: ComponentFixture<UpdateMetodoEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMetodoEnvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMetodoEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
