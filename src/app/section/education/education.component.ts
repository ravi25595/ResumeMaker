import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-education',
  imports: [FormsModule],
  templateUrl: './education.component.html',
  styleUrls: [
    '../../../shared/styles.scss',
    './education.component.scss']
})
export class EducationComponent {
  @Input() resume: any;
  @Input() currentIndex = 0
  toggleEndDate() {
    this.resume.education[this.currentIndex].date = this.resume.education[this.currentIndex].currentlyEnrolled ?
      'Current' : ''
  }
}
