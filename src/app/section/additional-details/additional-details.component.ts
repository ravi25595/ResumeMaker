import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-additional-details',
  imports: [NgxEditorModule, FormsModule],
  templateUrl: './additional-details.component.html',
  styleUrl: './additional-details.component.scss'
})
export class AdditionalDetailsComponent {
  @Input() resume: any;
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
    if (!this.resume.additional)
      this.resume.additional = ''
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.editor.destroy();
  }
}
