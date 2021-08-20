import { SprintEditService } from './sprint-edit.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sprint-edit',
  templateUrl: './sprint-edit.component.html',
  styleUrls: ['./sprint-edit.component.scss']
})
export class SprintEditComponent implements OnInit {

  @Input() sprint: any; // Is a sprint task data;
  frmSprint = new FormGroup({});
  lstSprints: string[] = [];

  constructor(private svc: SprintEditService,
              private frmBuilder: FormBuilder,
              private snkBar: MatSnackBar) {
    this.initEmptyForm();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.verifyFormInit();
  }

  onSubmit(){
    this.snkBar.open(this.svc.setSprint(this.frmSprint.value), ':D');
    this.verifyFormInit();
  }

  verifyFormInit() {
    // Verify if this component have been received the task from the component-task-list.
    if (this.sprint !== undefined) {
      this.initEditForm(this.sprint);
    } else {
      this.initEmptyForm();
    }
  }

  private initEmptyForm(): void {
    this.frmSprint = this.frmBuilder.group({
      id: [this.svc.getSprintId()],
      sprint: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      createdBy: [this.svc.getProjectManager()],
      createdAt: [new Date().toJSON()],
      idProject: [this.svc.getProjectId()],
    });
  }

  private initEditForm(task: any): void {
    this.frmSprint = this.frmBuilder.group({
      id: [task.id],
      sprint: [task.sprint, Validators.required],
      startDate: [task.startDate, Validators.required],
      endDate: [task.endDate, Validators.required],
      createdBy: [task.createdBy],
      createdAt: [task.createdAt],
      idProject: [task.idProject],
    });
  }
}
