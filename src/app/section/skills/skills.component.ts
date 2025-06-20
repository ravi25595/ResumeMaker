import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor'
@Component({
  selector: 'app-skills',
  imports: [FormsModule, NgxEditorModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  stringify(arg0: { type: string; content: { type: string; content: { type: string; content: { type: string; content: { type: string; text: string; }[]; }[]; }[]; }[]; }) {
    return JSON.stringify(arg0, null, 5)
  }
  skill: string = '';
  @Input() resume: any;
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic', 'underline'],
    ['bullet_list', 'ordered_list'],  // ✅ Add this line
    ['undo', 'redo'],
  ]
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.editor = new Editor();
    console.log(this.resume.skills)
    if (!this.resume.skills.length)
      this.resume.skills = '<ul><li></li></ul>'
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.editor.destroy();
  }
  addSkill(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.skill.trim()) {
      //this.skills.push(this.skill.trim());
      this.resume.skills.push(this.skill.trim())
      this.skill = '';
      event.preventDefault();
    }
  }
  removeSkill(index: number) {
    this.resume.skills.splice(index, 1);
  }
}
