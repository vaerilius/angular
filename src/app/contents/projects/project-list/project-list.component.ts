import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      name: 'prject name',
      syntax: 'js',
      description: 'lalallala'
    },
    {
      name: 'prject name',
      syntax: 'js',
      description: 'lalallala'
    },
    {
      name: 'prject name',
      syntax: 'js',
      description: 'lalallala'
    }
  ]
  constructor() { }

  ngOnInit() {
    
  }

}
