import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerrorComponent } from './customerror.component';

describe('CustomerrorComponent', () => {
  let component: CustomerrorComponent;
  let fixture: ComponentFixture<CustomerrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
