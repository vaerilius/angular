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
  pic = 'https://images.unsplash.com/photo-1500239524810-5a6e76344a17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80https://images.unsplash.com/photo-1500239524810-5a6e76344a17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=800';

  constructor() {
    this.family = 'assets/family.jpg';
    this.work = 'assets/work.png';
    this.hobbies = 'assets/hobbies.jpg';
  }

  ngOnInit() {
  }

}
