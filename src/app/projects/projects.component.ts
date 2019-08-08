import { Component, OnInit } from '@angular/core';
import {ProjectsService} from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private projects: {id: number, name: string, syntax: string, framework: string}[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

}
