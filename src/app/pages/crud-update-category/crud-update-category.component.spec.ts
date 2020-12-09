import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUpdateCategoryComponent } from './crud-update-category.component';

describe('CrudUpdateCategoryComponent', () => {
  let component: CrudUpdateCategoryComponent;
  let fixture: ComponentFixture<CrudUpdateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUpdateCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUpdateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
