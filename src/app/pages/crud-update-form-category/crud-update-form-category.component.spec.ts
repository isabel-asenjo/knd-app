import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUpdateFormCategoryComponent } from './crud-update-form-category.component';

describe('CrudUpdateFormCategoryComponent', () => {
  let component: CrudUpdateFormCategoryComponent;
  let fixture: ComponentFixture<CrudUpdateFormCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUpdateFormCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUpdateFormCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
