import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-experience-update',
  imports: [FormsModule, NgxEditorModule],
  templateUrl: './experience-update.component.html',
  styleUrl: './experience-update.component.scss'
})
export class ExperienceUpdateComponent {
  stringify(arg0: any) {
    return JSON.stringify(arg0)
  }
  @Input() resume: any;
  @Input() currentIndex = 0;
  editor!: any;
  toolbar: Toolbar = [
    ['bold', 'italic', 'underline'],
    ['bullet_list', 'ordered_list'],  // ✅ Add this line
    ['undo', 'redo'],
  ]
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.editor = new Editor();
    if (this.resume.experience[this.currentIndex].desc) { }
    else { this.resume.experience[this.currentIndex].desc = '<ul><li></li></ul>' }
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.editor.destroy();
  }
}
