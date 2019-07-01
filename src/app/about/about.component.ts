import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  family: string;
  work: string;
  hobbies: string;

  constructor() {
    this.family = 'assets/family.jpg';
    this.work = 'assets/work.png';
    this.hobbies = 'assets/hobbies.jpg';
  }

  ngOnInit() {
  }

}
