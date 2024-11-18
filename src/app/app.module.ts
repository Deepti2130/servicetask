import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodolistComponent } from './shared/component/todolist/todolist.component';
import { TodoformComponent } from './shared/component/todoform/todoform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { StudenttableComponent } from './shared/component/studenttable/studenttable.component';
import { StdformComponent } from './shared/component/stdform/stdform.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoformComponent,
    StudenttableComponent,
    StdformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
