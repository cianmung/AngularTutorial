import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgServiceTutorialComponent } from './ng-service-tutorial.component';

describe('NgServiceTutorialComponent', () => {
  let component: NgServiceTutorialComponent;
  let fixture: ComponentFixture<NgServiceTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgServiceTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgServiceTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
