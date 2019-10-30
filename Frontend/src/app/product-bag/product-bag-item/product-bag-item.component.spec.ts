import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBagItemComponent } from './product-bag-item.component';

describe('ProductBagItemComponent', () => {
  let component: ProductBagItemComponent;
  let fixture: ComponentFixture<ProductBagItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBagItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBagItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
