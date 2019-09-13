import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSectionComponent } from './skill-section.component';

describe('SkillSectionComponent', () => {
  let component: SkillSectionComponent;
  let fixture: ComponentFixture<SkillSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillSectionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
