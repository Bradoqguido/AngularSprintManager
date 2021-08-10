import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprintListComponent } from './components/sprint-list/sprint-list.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AccountTypeComponent } from './components/account-type/account-type.component';
import { EnterProjectComponent } from './components/enter-project/enter-project.component';
import { RegisterProjectComponent } from './components/register-project/register-project.component';

// Material modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SprintListComponent,
    TaskListComponent,
    EmployeeListComponent,
    AccountTypeComponent,
    EnterProjectComponent,
    RegisterProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
