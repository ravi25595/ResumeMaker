import { NgClass, NgComponentOutlet, NgStyle } from '@angular/common';
import { Component, inject, Injector } from '@angular/core';
import { Template1Component } from '../Templates/template1/template1.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Template2Component } from '../Templates/template2/template2.component';
import { Template3Component } from '../Templates/template3/template3.component';
@Component({
  selector: 'app-choose-template',
  imports: [NgClass, NgStyle, NgComponentOutlet, MatButtonModule, RouterLink],
  templateUrl: './choose-template.component.html',
  styleUrl: './choose-template.component.scss'
})
export class ChooseTemplateComponent {
  colors = [
    "#FFF",
    "#34393E",
    "#AF9B94",
    "#144181",
    "#4585DD",
    "#00A4c1",
    "#2C806E",
    "#F6911E",
    "#CB454E"
  ]
  currentColorIndex = 0;
  templates = [
    { component: Template1Component },
    { component: Template2Component },
    { component: Template3Component },
    { component: Template1Component },
    { component: Template1Component },
  ];
  resume: any;
  constructor(private injector: Injector) { }

  get customInjector(): Injector {
    return Injector.create({
      providers: [
        { provide: 'templateData', useValue: this.resume }
      ],
      parent: this.injector  // Use the injected instance
    });
  }

  continue($index: number) {
    localStorage.setItem('selectedTemplate', $index.toString())
  }
}
