import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUpdateFormComponent } from './crud-update-form.component';

describe('CrudUpdateFormComponent', () => {
  let component: CrudUpdateFormComponent;
  let fixture: ComponentFixture<CrudUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
