import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgParameterizedPipesTutorialComponent } from './ng-parameterized-pipes-tutorial.component';

describe('NgParameterizedPipesTutorialComponent', () => {
  let component: NgParameterizedPipesTutorialComponent;
  let fixture: ComponentFixture<NgParameterizedPipesTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgParameterizedPipesTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgParameterizedPipesTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
