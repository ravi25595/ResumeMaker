import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetCountryComponent } from './target-country.component';

describe('TargetCountryComponent', () => {
  let component: TargetCountryComponent;
  let fixture: ComponentFixture<TargetCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetCountryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
