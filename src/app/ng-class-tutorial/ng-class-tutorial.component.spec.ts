import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassTutorialComponent } from './ng-class-tutorial.component';

describe('NgClassTutorialComponent', () => {
  let component: NgClassTutorialComponent;
  let fixture: ComponentFixture<NgClassTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
