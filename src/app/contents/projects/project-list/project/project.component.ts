import { Component, OnInit } from '@angular/core';
import {faNodeJs} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  js = faNodeJs
  constructor() { }

  ngOnInit() {
  }

}
