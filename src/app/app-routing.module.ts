import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProjectComponent} from './projects/project-list/project/project.component';
import {ProjectDetailComponent} from './projects/project-detail/project-detail.component';
import {SelectProjectComponent} from './projects/select-project/select-project.component';


const appRouters: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'about' , component: AboutComponent},
  { path: 'projects' , component: ProjectsComponent, children: [
      {path: '', component: SelectProjectComponent},
      {path: ':id/:name', component: ProjectDetailComponent},
    ]},
  { path: 'contact' , component: ContactComponent},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouters)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
