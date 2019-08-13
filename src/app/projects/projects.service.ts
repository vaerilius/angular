import {Project} from './project.model';
import {Injectable} from '@angular/core';

@Injectable()
export class ProjectsService {

  private projects: Project[] = [
    new Project(1, 'Asteroids app', 'Java', 'JavaFX', 'I made this..'),
    new Project(2, 'FinnKino app', 'JavaScrip', 'jQuery', 'School JS project'),
    new Project(3, 'Recipe app', 'TypeScript', 'AngularJs', ' Huge project, learn Angular and TypeScript'),
    new Project(4, 'Calories Tracker', 'Pure JS', '-', '  Pure JS without any frameworks'),
    new Project(4, 'Github-Finder', 'Pure JS', '-', '  Pure JS without any frameworks'),
  ];

  getProjects() {
    return this.projects.slice();
  }

  getProject(id: number) {
    return this.projects[id];
  }
}
