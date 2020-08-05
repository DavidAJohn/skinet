import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutDeliveryComponent } from './checkout-delivery.component';

describe('CheckoutDeliveryComponent', () => {
  let component: CheckoutDeliveryComponent;
  let fixture: ComponentFixture<CheckoutDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
