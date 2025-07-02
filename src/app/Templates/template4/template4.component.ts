import { Component, Inject } from '@angular/core';
import { MonthFormatPipe } from "../../month-format.pipe";

@Component({
  selector: 'app-template4',
  imports: [MonthFormatPipe],
  templateUrl: './template4.component.html',
  styleUrl: './template4.component.scss'
})
export class Template4Component {
  constructor(@Inject('templateData') public resume: any) { }
  proficiencyLevels = ['Beginner (A1)', 'Elementry (A2)', 'Intermediate (B1)', 'Upper Intermediate(B2)', 'Advanced (C1)', 'Bilingaul or Proficient (C2)', 'Native']
}
