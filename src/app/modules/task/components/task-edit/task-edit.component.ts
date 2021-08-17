import { TaskEditService } from './task-edit.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  @Input() sprintTask: any; // Is a sprint task data;

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
    this.initEmptyForm();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.verifyFormInit();
  }

  onSubmit(){
    this.frmTask.get('createdAt')?.setValue(new Date().toJSON());
    this.snkBar.open(this.svcTask.setTask(this.frmTask.value), ':D');
    this.verifyFormInit();
  }

  verifyFormInit() {
    // Verify if this component have been received the task from the component-task-list.
    if (this.sprintTask !== undefined) {
      this.initEditForm(this.sprintTask);
    } else {
      this.initEmptyForm();
    }
  }

  private initEmptyForm(): void {
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

  private initEditForm(task: any): void {
    this.frmTask = this.frmBuilder.group({
      id: [task.id],
      title: [task.title, Validators.required],
      description: [task.description],
      status: [task.status, Validators.required],
      estimatedHours: [task.estimatedHours, Validators.required],
      completedHours: [task.completedHours],
      assignedTo: [task.assignedTo, Validators.required],
      sprint: [task.sprint, Validators.required],
      createdBy: [task.createdBy],
      createdAt: [task.createdAt],
      idProject: [task.idProject],
    });
  }

}
