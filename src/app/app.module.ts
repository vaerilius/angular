
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {PersonService} from './person.service';


const appRouters: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'about' , component: AboutComponent},
  { path: 'projects' , component: ProjectsComponent},
  { path: 'contact' , component: ContactComponent},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
