import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterProjectComponent } from './components/enter-project/enter-project.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ProjectViewComponent } from './components/project-view/project-view.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

// Material modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    EnterProjectComponent,
    EmployeeListComponent,
    ProjectViewComponent,
    ProjectEditComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatPaginatorModule
  ],
  exports: [
    EnterProjectComponent,
    ProjectViewComponent
  ]
})
export class ProjectModule { }
