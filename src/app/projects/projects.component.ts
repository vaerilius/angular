import { Component, OnInit } from '@angular/core';
import {ProjectsService} from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }
  isCollapsed = false;

  ngOnInit() {

  }

  onToggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
