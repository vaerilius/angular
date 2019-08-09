import { Component, OnInit } from '@angular/core';
import {Project} from '../project.model';
import {ProjectsService} from '../projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

}
