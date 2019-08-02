import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
image: string;
  constructor() {
    this.image = 'assets/cv.png';
  }

  ngOnInit() {
  }

}
