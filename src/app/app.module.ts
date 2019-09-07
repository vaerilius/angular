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
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
