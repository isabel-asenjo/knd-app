import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDeleteCategoryComponent } from './crud-delete-category.component';

describe('CrudDeleteCategoryComponent', () => {
  let component: CrudDeleteCategoryComponent;
  let fixture: ComponentFixture<CrudDeleteCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDeleteCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDeleteCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
