import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCreateCategoryComponent } from './crud-create-category.component';

describe('CrudCreateCategoryComponent', () => {
  let component: CrudCreateCategoryComponent;
  let fixture: ComponentFixture<CrudCreateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCreateCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCreateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
