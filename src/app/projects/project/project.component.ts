import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../projects.service';
import {ActivatedRoute, Data, Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: {id: number, name: string, syntax: string, framework: string};

  constructor(private projectsService: ProjectsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.project = data['project'];
    });
  }

}
