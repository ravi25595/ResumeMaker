import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-template4',
  imports: [],
  templateUrl: './template4.component.html',
  styleUrl: './template4.component.scss'
})
export class Template4Component {
  constructor(@Inject('templateData') public resume: any) { }
}
