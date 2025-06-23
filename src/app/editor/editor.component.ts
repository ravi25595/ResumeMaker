import { NgComponentOutlet } from '@angular/common';
import { Component, Injector } from '@angular/core';
import { Template1Component } from '../Templates/template1/template1.component';
import { Template2Component } from '../Templates/template2/template2.component';
import { ContactInfoComponent } from "../section/contact-info/contact-info.component";
import { SkillsComponent } from "../section/skills/skills.component";
import { SummaryComponent } from "../section/summary/summary.component";
import { ExperienceComponent } from "../section/experience/experience.component";
import { EducationComponent } from "../section/education/education.component";
import { AdditionalDetailsComponent } from "../section/additional-details/additional-details.component";
import { MatButtonModule } from '@angular/material/button';
import { EducationSummaryComponent } from "../section/education-summary/education-summary.component";
import { MatIconModule } from '@angular/material/icon';
import { ExperienceSummaryComponent } from "../section/experience-summary/experience-summary.component";
import { Router } from '@angular/router';
import { ExperienceUpdateComponent } from "../section/experience-update/experience-update.component";
import { Template3Component } from '../Templates/template3/template3.component';
import { SectionIntroComponent } from "../section/section-intro/section-intro.component";

@Component({
  selector: 'app-editor',
  imports: [
    NgComponentOutlet,
    ContactInfoComponent,
    SkillsComponent,
    SummaryComponent,
    ExperienceComponent,
    EducationComponent,
    AdditionalDetailsComponent,
    MatButtonModule,
    MatIconModule,
    EducationSummaryComponent,
    ExperienceSummaryComponent,
    ExperienceUpdateComponent,
    SectionIntroComponent
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {
  backAction() {
    if (this.currentIndex)
      --this.currentIndex
    if (this.currentIndex < 6) this.currentMenuIndex = this.currentIndex
  }
  sections = [
    { title: "Header", visited: true, Title: "Let’s start with your header", subTitle: 'Include your full name and multiple ways for employers to reach you.' },
    { title: "Skills", visited: false, Title: "We recommend including 6-8 skills", subTitle: "Choose skills that align with the job requirements. Show employers you're confident of the work you do!" },
    { title: "Summary", visited: false, Title: "Finish strong with a clear summary of 2-4 sentences that showcase your abilities", subTitle: 'Seal the deal with a powerful statement. Write your own, or select from the prompts below.' },
    { title: "Experience", visited: false, Title: "Let’s work on your experience", subTitle: 'Start with your most recent job first.' },
    { title: "Education", visited: false, Title: "Let’s talk about your education", subTitle: 'Tell us about any colleges, vocational programs, or training courses you took. Even if you didn’t finish, it’s important to list them.' },
    { title: "Additional Details", visited: false, Title: "Add More Details", subTitle: "This is an opportunity to highlight qualifications that don't fit into standard resume sections." },
    { title: "Education Summary", visited: false, Title: "Education Summary", subTitle: "" },
    { title: "Experince Summary", visited: false, Title: "Review your experience", subTitle: "Edit as needed. We have expert samples to guide and inspire you." },
    { title: "Update Experience", visited: false, Title: "Update Experience", subTitle: "Write what you Did there..." },
    { title: "SectionIntro", visited: false, Title: "", subTitle: "" },
  ]
  templates = [
    { component: Template1Component },
    { component: Template2Component },
    { component: Template3Component },
    { component: Template1Component },
    { component: Template1Component }
  ];
  animate = false;
  currentIndex = 0;
  currentMenuIndex = -1;
  previousIndex = 0;
  educationIndex = 0;
  experienceIndex = 0;
  template: any = null;
  resume: any = { header: {}, skills: [], experience: [{}], education: [{}] };
  constructor(private injector: Injector, private router: Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    const tempString = localStorage.getItem('selectedTemplate')
    if (tempString)
      this.template = this.templates[parseInt(tempString)].component
    this.animate = true
    const resumeString = localStorage.getItem('resume')
    if (resumeString)
      this.resume = JSON.parse(resumeString) || { header: {}, skills: [], experience: [{}], education: [{}] };
    setTimeout(() => {
      this.currentMenuIndex = 0;
    })
  }
  setActive(index: number) {
    this.sections[index].visited = true
    this.currentIndex = index
    this.currentMenuIndex = index
  }
  stringifyData(data: any) {
    return JSON.stringify(data)
  }
  get customInjector(): Injector {
    return Injector.create({
      providers: [
        { provide: 'templateData', useValue: this.resume }
      ],
      parent: this.injector  // Use the injected instance
    });
  }
  continue() {
    localStorage.setItem('resume', JSON.stringify(this.resume))
    this.previousIndex = this.currentIndex
    switch (this.currentIndex) {
      case 0: {
        this.sendEmail();
        this.currentIndex = 9;
        this.currentMenuIndex++;
        break;
      }
      case 1: { this.currentIndex = 9; this.currentMenuIndex++; break; }
      case 2: { this.currentIndex = 9; this.currentMenuIndex++; break; }
      case 3: { this.currentIndex = 8; break; }
      case 4: { this.currentIndex = 6; break; }
      case 5: { this.submitResume(); break; }
      case 6: { this.currentIndex = 9; this.currentMenuIndex = 5; break; }
      case 7: { this.currentIndex = 9; this.currentMenuIndex = 4; break; }
      case 8: { this.currentIndex = 7; break; }
      case 9: { this.currentIndex = this.currentMenuIndex; }
    }
    this.sections[this.currentIndex].visited = true
    if (this.previousIndex !== this.currentIndex) {
      this.animate = false
      setTimeout(() => {
        this.animate = true
      }, 500)
    }
    console.log(this.currentIndex)
  }
  submitResume() {
    localStorage.setItem('resume', JSON.stringify(this.resume))
    localStorage.setItem('isPreview', JSON.stringify(false))
    this.router.navigate(["/download-page"])
  }
  AddMore() {
    if (this.currentIndex == 6) {
      this.educationIndex = this.resume.education.length
      this.resume.education.push({})
      this.currentIndex = 4
    }
    else if (this.currentIndex == 7) {
      this.experienceIndex = this.resume.experience.length
      this.resume.experience.push({})
      this.currentIndex = 3
    }
  }
  sendEmail() {
    // Email.send({
    //   Host: "s1.maildns.net",
    //   Username: "username",
    //   Password: "password",
    //   To: 'ravi25595@gmail.com',
    //   From: "you@isp.com",
    //   Subject: "This is the subject",
    //   Body: "And this is the body"
    // }).then((message: any) => {
    //   alert(message)
    // });
  }
}