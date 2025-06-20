import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-history',
  imports: [NgClass, RouterLink],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  openNextPage() {
    throw new Error('Method not implemented.');
  }
  currentIndex = 0;
  expLevels = [
    {},
    {
      title: "Good to know!",
      desc: "Whether you’ve made 1 or 100 resumes, our tools can help wherever you need.",
      route: ""
    },
    {
      title: "You’re in the right place.",
      desc: "We’ll help you choose the best words and make sure your resume looks professional.",
      route: ""
    }
  ]
}
