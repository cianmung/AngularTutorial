import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwtichTutorialComponent } from './ng-swtich-tutorial.component';

describe('NgSwtichTutorialComponent', () => {
  let component: NgSwtichTutorialComponent;
  let fixture: ComponentFixture<NgSwtichTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwtichTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwtichTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
