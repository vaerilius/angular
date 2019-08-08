
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {PersonService} from './person.service';
import {AppRoutingModule} from './app-routing.module';
import { ProjectComponent } from './projects/project/project.component';
import {ProjectsService} from './projects/projects.service';
import {ProjectResolverService} from './projects/project/project-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [PersonService, ProjectResolverService, ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
