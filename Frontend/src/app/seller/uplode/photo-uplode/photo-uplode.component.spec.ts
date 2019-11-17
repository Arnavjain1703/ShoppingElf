import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoUplodeComponent } from './photo-uplode.component';

describe('PhotoUplodeComponent', () => {
  let component: PhotoUplodeComponent;
  let fixture: ComponentFixture<PhotoUplodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoUplodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoUplodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
