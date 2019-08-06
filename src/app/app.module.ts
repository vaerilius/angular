
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


const appRouters: Routes = [
  { path: '' , component: AppComponent},
  { path: 'home' , component: HomeComponent},
  { path: 'about' , component: AboutComponent},
  { path: 'projects' , component: ProjectsComponent},
  { path: 'contact' , component: ContactComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
