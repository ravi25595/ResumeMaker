import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIntroComponent } from './section-intro.component';

describe('SectionIntroComponent', () => {
  let component: SectionIntroComponent;
  let fixture: ComponentFixture<SectionIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
