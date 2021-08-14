import { TaskEditService } from './task-edit.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  frmTask = new FormBuilder();

  constructor(private svcTask: TaskEditService) {
    this.frmTask.group({
      id: [svcTask.getLastTaskId()],
      title: ['', Validators.required],
      specification: [''],
      status: ['', Validators.required],
      estimatedHours: [0, Validators.required],
      completedHours: [0],
      assignedTo: ['', Validators.required],
      sprint: ['', Validators.required],
      createdBy: [''],
      createdAt: [''],
      idProject: [''],
    });
  }

  ngOnInit(): void {
  }

  create(): void {

  }

}
