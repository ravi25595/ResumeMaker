import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceUpdateComponent } from './experience-update.component';

describe('ExperienceUpdateComponent', () => {
  let component: ExperienceUpdateComponent;
  let fixture: ComponentFixture<ExperienceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
