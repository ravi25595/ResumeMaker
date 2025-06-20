import { Component } from '@angular/core';

@Component({
  selector: 'app-target-country',
  templateUrl: './target-country.component.html',
  styleUrl: './target-country.component.scss'
})
export class TargetCountryComponent {
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
  countries = ["India", "England", "Duabi", "USA", "Australia"]
}
