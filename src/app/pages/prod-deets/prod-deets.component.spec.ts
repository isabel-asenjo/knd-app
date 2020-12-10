import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDeetsComponent } from './prod-deets.component';

describe('ProdDeetsComponent', () => {
  let component: ProdDeetsComponent;
  let fixture: ComponentFixture<ProdDeetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdDeetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdDeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
