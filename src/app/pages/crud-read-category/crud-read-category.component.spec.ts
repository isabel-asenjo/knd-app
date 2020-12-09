import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudReadCategoryComponent } from './crud-read-category.component';

describe('CrudReadCategoryComponent', () => {
  let component: CrudReadCategoryComponent;
  let fixture: ComponentFixture<CrudReadCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudReadCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudReadCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
