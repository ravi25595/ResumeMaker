import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSummaryComponent } from './education-summary.component';

describe('EducationSummaryComponent', () => {
  let component: EducationSummaryComponent;
  let fixture: ComponentFixture<EducationSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
