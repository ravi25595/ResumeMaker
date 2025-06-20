import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MonthFormatPipe } from "../../month-format.pipe";
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-education-summary',
  imports: [MatButtonModule, MatIconModule, MonthFormatPipe, DragDropModule],
  templateUrl: './education-summary.component.html',
  styleUrl: './education-summary.component.scss'
})
export class EducationSummaryComponent {
  @Input() resume: any;
  @Output() currentIndexChange = new EventEmitter<number>();
  @Output() parentIndexChange = new EventEmitter<number>();
  stringify(data: any) {
    return JSON.stringify(data)
  }
  editEducation(index: number) {
    this.currentIndexChange.emit(index)
    this.parentIndexChange.emit(4)
  }
  deleteEducation(index: number) {
    this.resume.education.splice(index, 1);
  }
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.resume.education, event.previousIndex, event.currentIndex);
  }
}
