import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-template3',
  imports: [],
  templateUrl: './template3.component.html',
  styleUrl: './template3.component.scss'
})
export class Template3Component {
  constructor(@Inject('templateData') public resume: any) { }
}
