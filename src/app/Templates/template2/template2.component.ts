import { Component, Inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MonthFormatPipe } from "../../month-format.pipe";

@Component({
  selector: 'app-template2',
  imports: [MonthFormatPipe],
  templateUrl: './template2.component.html',
  styleUrl: './template2.component.scss'
})
export class Template2Component {
  isPreview = true
  constructor(@Inject('templateData') public resume: any) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.resume) {
      console.log(this.resume)
    }
    else {
      this.resume = { header: {}, skills: [], experience: [{}], education: [{}] };
      console.log("this.resume = {}")
    }
    //this.resume.skills = this.cleanSkillsHtml(this.resume.skills)
  }
  cleanSkillsHtml(rawHtml: string): string {
    // Remove <p> tags inside <li>
    const cleanSkills = rawHtml.replace(/<li>\s*<p>(.*?)<\/p>\s*<\/li>/g, '<li>$1</li>');
    return cleanSkills.replace(/<\/?ul>/g, '');
  }
}
