import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './contents/about/about.component';
import { RouterModule } from '@angular/router';
import { ContentsComponent } from './contents/contents.component';
import { ProjectsComponent } from './contents/projects/projects.component';
import { ContactComponent } from './contents/contact/contact.component';
const routes = [
    { path: '', component: ContentsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full'}

]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [],
})
export class RoutingModule { }