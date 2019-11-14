import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerItemsComponent } from './seller-items.component';

describe('SellerItemsComponent', () => {
  let component: SellerItemsComponent;
  let fixture: ComponentFixture<SellerItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
