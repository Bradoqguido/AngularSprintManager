import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintListComponent } from './components/sprint-list/sprint-list.component';
import { SprintViewComponent } from './components/sprint-view/sprint-view.component';
import { SprintEditComponent } from './components/sprint-edit/sprint-edit.component';

// Material modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SprintListComponent,
    SprintViewComponent,
    SprintEditComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
  ],
  exports: [
    SprintViewComponent
  ]
})
export class SprintModule { }
