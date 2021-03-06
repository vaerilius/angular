import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentsComponent } from './contents/contents.component';
import { AboutComponent } from './contents/about/about.component';
import { ProjectsComponent } from './contents/projects/projects.component';
import { ContactComponent } from './contents/contact/contact.component';
import { ForumComponent } from './contents/contact/forum/forum.component';
import { MailComponent } from './contents/contact/mail/mail.component';
import { RoutingModule } from './routing.module';
import {SharedModule} from './shared/shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ProjectComponent } from './contents/projects/project-list/project/project.component';
import { ProjectListComponent } from './contents/projects/project-list/project-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentsComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ForumComponent,
    MailComponent,
    ProjectComponent,
    ProjectListComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
