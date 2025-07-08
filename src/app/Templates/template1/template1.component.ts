import { Component, Inject } from '@angular/core';
import { MonthFormatPipe } from "../../month-format.pipe";

@Component({
  selector: 'app-template1',
  imports: [MonthFormatPipe],
  templateUrl: './template1.component.html',
  styleUrl: './template1.component.scss'
})
export class Template1Component {
  isPreview = true
  skills: string[] = [];
  proficiencyLevels = ['Beginner (A1)', 'Elementry (A2)', 'Intermediate (B1)', 'Upper Intermediate(B2)', 'Advanced (C1)', 'Bilingaul or Proficient (C2)', 'Native']
  constructor(@Inject('templateData') public resume: any) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.resume) {
      // console.log(this.resume)
    }
    else {
      this.resume = { header: {}, skills: [], experience: [{}], education: [{}] };
      console.log("this.resume = {}")
    }

  }
}
