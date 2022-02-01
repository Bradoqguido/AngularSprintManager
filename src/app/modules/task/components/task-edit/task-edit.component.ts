import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskEditService } from './task-edit.service';
import { Task } from 'src/app/classes/task.class';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  @Input() inputTask: any ; // Is a sprint task data;
  task: Task = new Task();

  frmTask = new FormGroup({});
  lstEmployee: string[] = [];
  lstSprint: string[] = [];
  lstStatus: string[] = [];

  constructor(private svc: TaskEditService,
              private frmBuilder: FormBuilder,
              private snkBar: MatSnackBar) {
    this.lstEmployee = this.svc.getEmployees();
    this.lstSprint = this.svc.getSprints();
    this.lstStatus = this.svc.getStatus();
    this.verifyFormInput();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.verifyFormInput();
  }

  onSubmit() {
    this.task.save();
    this.snkBar.open('Task saved!', ':D');
    this.verifyFormInput();
  }

  verifyFormInput() {
    // Verify if this component have been received the task from the component-task-list.
    if (this.inputTask !== undefined) {
      this.task.FromObject(this.inputTask);
    } else {
      this.task.clear();
    }
    this.initForm();
  }

  private initForm(): void {
    this.frmTask = this.frmBuilder.group({
      id: [this.task.getId()],
      title: [this.task.getTitle(), Validators.required],
      description: [this.task.getDescription()],
      status: [this.task.getStatus(), Validators.required],
      estimatedHours: [this.task.getEstimatedHours(), Validators.required],
      completedHours: [this.task.getCompletedHours()],
      assignedTo: [this.task.getAssignedTo(), Validators.required],
      sprint: [this.task.getSprint(), Validators.required],
      createdBy: [this.task.getCreatedBy()],
      createdAt: [this.task.getCreatedAt().toJSON()],
      idProject: [this.task.getIdProject()],
    });
  }

}
