import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBagComponent } from './product-bag.component';

describe('ProductBagComponent', () => {
  let component: ProductBagComponent;
  let fixture: ComponentFixture<ProductBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
