import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-experience',
  imports: [FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './experience.component.html',
  styleUrls: [
    '../../../shared/styles.scss',
    './experience.component.scss']
})
export class ExperienceComponent {
  @Input() resume: any;
  @Input() currentIndex = 0;
  stringify(data: any) {
    return JSON.stringify(data)
  }
  addExperience() {
    this.currentIndex++;
    this.resume.experience.push({})
  }
  toggleEndDate() {
    this.resume.experience[this.currentIndex].endDate = this.resume.experience[this.currentIndex].currentlyWorking ?
      'Current' : ''
  }
}
