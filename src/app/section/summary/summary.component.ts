import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-summary',
  imports: [FormsModule, NgxEditorModule],
  templateUrl: './summary.component.html',
  styleUrls: [
    '../../../shared/styles.scss',
    './summary.component.scss']
})
export class SummaryComponent {
  @Input() resume: any;
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic', 'underline'],
    ['bullet_list', 'ordered_list'],  // ✅ Add this line
    ['undo', 'redo'],
  ];
  ngOnInit(): void {
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
