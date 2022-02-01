import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sprint } from 'src/app/classes/sprint.class';
import { SprintEditService } from './sprint-edit.service';

@Component({
  selector: 'app-sprint-edit',
  templateUrl: './sprint-edit.component.html',
  styleUrls: ['./sprint-edit.component.scss']
})
export class SprintEditComponent implements OnInit {

  @Input() inputSprint: any; // Is a sprint sprint data;
  sprint: Sprint = new Sprint();

  frmSprint = new FormGroup({});

  constructor(private svc: SprintEditService,
              private frmBuilder: FormBuilder,
              private snkBar: MatSnackBar) {
    this.sprint.clear();
    this.initEmptyForm();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.verifyFormInit();
  }

  onSubmit(){
    this.sprint.save();
    this.snkBar.open('Sprint saved!', ':D');
    this.verifyFormInit();
  }

  verifyFormInit() {
    // Verify if this component have been received the sprint from the component-task-list.
    if (this.inputSprint !== undefined) {
      this.initEditForm(this.inputSprint);
    } else {
      this.initEmptyForm();
    }
  }

  private initEmptyForm(): void {
    this.frmSprint = this.frmBuilder.group({
      id: [this.sprint.getId()],
      sprint: [this.sprint.getSprint(), Validators.required],
      startDate: [this.sprint.getStartDate(), Validators.required],
      endDate: [this.sprint.getEndDate(), Validators.required],
      createdBy: [this.sprint.getCreatedBy()],
      createdAt: [this.sprint.getCreatedAt().toJSON()],
      idProject: [this.sprint.getIdProject()],
    });
  }

  private initEditForm(sprint: Sprint): void {
    this.frmSprint = this.frmBuilder.group({
      id: [sprint.getId()],
      sprint: [sprint.getSprint(), Validators.required],
      startDate: [sprint.getStartDate(), Validators.required],
      endDate: [sprint.getEndDate(), Validators.required],
      createdBy: [sprint.getCreatedBy()],
      createdAt: [sprint.getCreatedAt()],
      idProject: [sprint.getIdProject()],
    });
  }
}
