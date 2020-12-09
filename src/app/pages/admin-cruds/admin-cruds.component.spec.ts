import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCrudsComponent } from './admin-cruds.component';

describe('AdminCrudsComponent', () => {
  let component: AdminCrudsComponent;
  let fixture: ComponentFixture<AdminCrudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCrudsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCrudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
