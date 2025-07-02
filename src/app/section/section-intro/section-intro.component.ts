import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-section-intro',
  imports: [MatIconModule],
  templateUrl: './section-intro.component.html',
  styleUrl: './section-intro.component.scss'
})
export class SectionIntroComponent {
  @Input() previousIndex: number = 0;
  @Input() currentIndex: number = 0;
  @Output() currentIndexChange = new EventEmitter<number>();
  sections = [
    {
      topDes: "Great progress! Next up → Skills",
      heading: "Time to showcase your",
      headingH: "skills",
      boldContent: "",
      normalContent: "Use expertly written suggestions to optimize* your skills section, or craft your own with AI writing help.",
    },
    {
      topDes: "Almost there! Next up → Summary",
      heading: "Let’s craft your professional",
      headingH: "summary",
      boldContent: "",
      normalContent: "Choose from optimized professional summary examples or craft your own with AI writing help.",
    },
    {
      topDes: "Great progress! Next up → Experience",
      heading: "Add details about your work",
      headingH: "experience",
      boldContent: "Our AI now makes writing easier!",
      normalContent: "With writing help you can fix mistakes or rephrase sentences to suit your needs.",
    },
    {
      topDes: "Great job!",
      heading: "Now, let’s add your",
      headingH: "education",
      boldContent: "",
      normalContent: "",
    },
    {
      topDes: "Great progress! Next up → Experience",
      heading: "Add details about your work",
      headingH: "experience",
      boldContent: "Our AI now makes writing easier!",
      normalContent: "With writing help you can fix mistakes or rephrase sentences to suit your needs.",
    },
    {
      topDes: "Great job!",
      heading: "Now, let’s add your",
      headingH: "education",
      boldContent: "",
      normalContent: "",
    },
    {
      topDes: "Last but not least...",
      heading: "Share more about",
      headingH: "yourself",
      boldContent: "Show your expertise and passion! Here are some popular ones included by other candidates.",
      normalContent: "Languages, Awards, Accomplishments, Honors, Certifications and Licenses, Activities, Websites and Social Links, References",
    }, {
      topDes: "Great job!",
      heading: "Now, let’s add your",
      headingH: "education",
      boldContent: "",
      normalContent: "",
    },
  ];
  nextBtn() {
    switch (this.previousIndex) {
      case 0: {
        this.currentIndex = 1;
      }
    }
    this.currentIndexChange.emit(this.currentIndex)
    console.log(this.previousIndex)
  }
}
