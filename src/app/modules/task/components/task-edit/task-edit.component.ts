import { TaskEditService } from './task-edit.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  frmTask = new FormGroup({});
  lstEmployee: string[] = [];
  lstSprint: string[] = [];
  lstStatus: string[] = [];

  constructor(private svcTask: TaskEditService,
              private frmBuilder: FormBuilder,
              private snkBar: MatSnackBar) {
    this.lstEmployee = this.svcTask.getEmployees();
    this.lstSprint = this.svcTask.getSprints();
    this.lstStatus = this.svcTask.getStatus();
    this.initForm();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.frmTask.get('createdAt')?.setValue(new Date().toJSON());
    this.snkBar.open(this.svcTask.setTask(this.frmTask.value), ':D');
    this.initForm();
  }

  private initForm(): void {
    this.frmTask = this.frmBuilder.group({
      id: [this.svcTask.getTaskId()],
      title: ['', Validators.required],
      description: [''],
      status: ['', Validators.required],
      estimatedHours: [0, Validators.required],
      completedHours: [0],
      assignedTo: ['', Validators.required],
      sprint: ['', Validators.required],
      createdBy: [this.svcTask.getProjectManager()],
      createdAt: [new Date().toJSON()],
      idProject: [this.svcTask.getProjectId()],
    });
  }

}
