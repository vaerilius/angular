
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router';


const appRouters: Routes = [
  { path: '' , component: AppComponent},
  { path: 'container' , component: ContainerComponent},
  { path: 'about' , component: AboutComponent},
  { path: 'projects' , component: ProjectsComponent},
  { path: 'contact' , component: ContactComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    FooterComponent,
    ContactComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent
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
