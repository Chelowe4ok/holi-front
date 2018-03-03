import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NgGridModule } from 'angular2-grid';
import { DragulaModule } from 'ng2-dragula';
import {DndModule} from 'ng2-dnd';
// Components


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgGridModule,
    DragulaModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
