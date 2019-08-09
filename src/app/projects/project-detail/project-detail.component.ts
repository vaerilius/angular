import { Component, OnInit } from '@angular/core';
import {Project} from '../project.model';
import {ProjectsService} from '../projects.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
project: Project;
id: number;

  constructor(private projectService: ProjectsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.project = this.projectService.getProject(this.id);
    });
  }

}
