import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardsDisplayComponent } from './product-cards-display.component';

describe('ProductCardsDisplayComponent', () => {
  let component: ProductCardsDisplayComponent;
  let fixture: ComponentFixture<ProductCardsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
