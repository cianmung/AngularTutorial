import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPipesTutorialComponent } from './ng-pipes-tutorial.component';

describe('NgPipesTutorialComponent', () => {
  let component: NgPipesTutorialComponent;
  let fixture: ComponentFixture<NgPipesTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPipesTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPipesTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
