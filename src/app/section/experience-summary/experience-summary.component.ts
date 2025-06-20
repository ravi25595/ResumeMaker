import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MonthFormatPipe } from "../../month-format.pipe";
import { MatIconModule } from '@angular/material/icon';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-experience-summary',
  imports: [MonthFormatPipe, MatIconModule, DragDropModule, MatButtonModule],
  templateUrl: './experience-summary.component.html',
  styleUrl: './experience-summary.component.scss'
})
export class ExperienceSummaryComponent {
  @Input() resume: any;
  @Output() parentIndexChange = new EventEmitter<number>();
  @Output() currentIndexChange = new EventEmitter<number>();
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  deleteExperience(index: number) {
    this.resume.experience.splice(index, 1)
  }
  editExperiene(index: number) {
    this.currentIndexChange.emit(index)
    this.parentIndexChange.emit(3)
  }
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.resume.experience, event.previousIndex, event.currentIndex);
  }
}
