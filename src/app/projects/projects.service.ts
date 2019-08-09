import {Project} from './project.model';
import {Injectable} from '@angular/core';

@Injectable()
export class ProjectsService {

  private projects: Project[] = [
    new Project(1, 'Asteroids 1', 'Java', 'JavaFX', 'liirumlaarum'),
    new Project(2, 'FinnKino app 2', 'JavaScrip', 'jQuery', 'liirumlaarum'),
    new Project(3, 'Recipe app 3', 'TypeScript', 'AngularJs', 'liirumlaarum')
  ];

  getProjects() {
    return this.projects.slice();
  }

  getProject(id: number) {
    return this.projects[id];
  }
}
