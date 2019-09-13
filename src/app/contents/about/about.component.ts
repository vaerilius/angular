import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
code = '../../assets/shahadat-shemul-BfrQnKBulYQ-unsplash.jpg'
  family = '../../assets/family.jpg'
  work = '../../assets/work.png'
  leisure = '../../assets/leisure.jpg'
  constructor() { }

  ngOnInit() {
  }

}
