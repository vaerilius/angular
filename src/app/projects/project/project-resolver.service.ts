import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ProjectsService} from '../projects.service';
import {Observable} from 'rxjs';


interface Project {
  id: number;
  name: string;
  syntax: string;
  framework: string;
}

@Injectable()
export class ProjectResolverService implements Resolve<Project> {

constructor(private projectService: ProjectsService) {}

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> | Promise<Project> | Project {
  return this.projectService.getProject(+route.params['id']);
}
}
