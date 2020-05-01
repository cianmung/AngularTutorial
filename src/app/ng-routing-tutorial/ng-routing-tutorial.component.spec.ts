import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRoutingTutorialComponent } from './ng-routing-tutorial.component';

describe('NgRoutingTutorialComponent', () => {
  let component: NgRoutingTutorialComponent;
  let fixture: ComponentFixture<NgRoutingTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRoutingTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRoutingTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
