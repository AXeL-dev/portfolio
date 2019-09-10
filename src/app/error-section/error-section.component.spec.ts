import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSectionComponent } from './error-section.component';

describe('ErrorSectionComponent', () => {
  let component: ErrorSectionComponent;
  let fixture: ComponentFixture<ErrorSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
