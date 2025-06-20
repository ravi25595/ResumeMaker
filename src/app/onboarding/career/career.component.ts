import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-career',
  imports: [NgClass],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
  currentIndex = 0;
  expLevels = [
    {},
    {
      title: "Typically less then 6 mounths of experience",
      desc: "We've got you! We'll help you find relevant experience to fill in your resume.",
      route: '/targetcountry'
    },
    {
      title: "Typically 6 months to 3 years experience",
      desc: "Welcome! We’ll make this easy and point you in the right direction.",
      route: '/history'
    },
    {
      title: "Typically 3-10 years experience",
      desc: "Got it! We’ll help take your resume to the next level.",
      route: '/industry'
    },
    {
      title: "Typically 10+ years experience",
      desc: "Great! We’ll help you frame your experience to show off your expertise.",
      route: '/industry'
    }
  ]
  constructor(private router: Router) { }
  openNextPage() {
    this.router.navigate([this.expLevels[this.currentIndex].route])
  }
}
