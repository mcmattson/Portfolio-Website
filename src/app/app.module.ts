import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuBarComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ContactComponent } from './components/pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuBarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
