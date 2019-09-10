import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineSectionComponent } from './timeline-section.component';

describe('TimelineSectionComponent', () => {
  let component: TimelineSectionComponent;
  let fixture: ComponentFixture<TimelineSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
