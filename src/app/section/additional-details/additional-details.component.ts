import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select'
@Component({
  selector: 'app-additional-details',
  imports: [NgxEditorModule, FormsModule, MatExpansionModule, MatIconModule, MatIconButton,
    MatAutocompleteModule, MatInputModule, ReactiveFormsModule, MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './additional-details.component.html',
  styleUrls: ['../../../shared/styles.scss', './additional-details.component.scss']
})
export class AdditionalDetailsComponent {
  deleteLink(index: number) {
    this.resume.additional.links.splice(index, 1)
  }
  addLink() {
    this.resume.additional.links.push('');
  }
  @Input() resume: any;
  languages = ['Hindi', 'English', 'Punjabi', 'Rajasthani', 'Tamil', 'French', 'German', 'Dutch']
  proficiencyLevels = ['Beginner (A1)', 'Elementry (A2)', 'Intermediate (B1)', 'Upper Intermediate(B2)', 'Advanced (C1)', 'Bilingaul or Proficient (C2)', 'Native']
  filteredLanguages!: string[];
  activityEditor!: any;
  awardsEditor!: any;
  certificationEditor!: any;
  editors: Editor[] = [];
  toolbar: Toolbar = [
    ['bold', 'italic', 'underline'],
    ['bullet_list', 'ordered_list'],  // ✅ Add this line
    ['align_left', 'align_center', 'align_right', 'align_justify'],
    ['undo', 'redo'],
  ]
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activityEditor = new Editor();
    this.awardsEditor = new Editor();
    this.certificationEditor = new Editor();
    this.filteredLanguages = this.languages;
    if (!this.resume.additional)
      this.resume.additional = { activities: '', awards: '', certifications: '', languages: [], links: [''], customs: [], };
    this.resume.additional.customs.forEach(() => {
      this.editors.push(new Editor())
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.activityEditor.destroy();
    this.awardsEditor.destroy();
    this.certificationEditor.destroy();
    this.editors.forEach((editor) => editor.destroy())
  }
  _filter(value: string) {
    console.log(value)
    this.filteredLanguages = this.languages.filter(lang => lang.toLowerCase().includes(value.toLowerCase()))
  }
  deleteLanguage(index: number) {
    this.resume.additional.languages.splice(index, 1)
  }
  deleteCustoms(index: number) {
    this.resume.additional.customs.splice(index, 1)
    console.log(index)
  }
  AddCustomSection() {
    this.editors.push(new Editor())
    this.resume.additional.customs.push({ title: '', desc: '' })
  }
  stringify(data: any) {
    console.log(JSON.stringify(data))
    return JSON.stringify(data)
  }
}
