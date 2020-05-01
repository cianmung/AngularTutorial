import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleTutorialComponent } from './ng-style-tutorial.component';

describe('NgStyleTutorialComponent', () => {
  let component: NgStyleTutorialComponent;
  let fixture: ComponentFixture<NgStyleTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStyleTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
