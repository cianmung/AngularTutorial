import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForTrackbyTutorialComponent } from './ng-for-trackby-tutorial.component';

describe('NgForTrackbyTutorialComponent', () => {
  let component: NgForTrackbyTutorialComponent;
  let fixture: ComponentFixture<NgForTrackbyTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForTrackbyTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForTrackbyTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
