import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceSectionComponent } from './reference-section.component';

describe('ReferenceSectionComponent', () => {
  let component: ReferenceSectionComponent;
  let fixture: ComponentFixture<ReferenceSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
