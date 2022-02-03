import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectEditService } from './project-edit.service';
import { Project } from 'src/app/classes/project.class';
import { IManagerSelectBox } from 'src/app/interfaces/employee.interface';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  @Input() inputProject: any; // Is a project project data;
  project: Project = new Project();

  frmProject = new FormGroup({});
  lstManager: IManagerSelectBox[] = this.svc.getManager();

  constructor(private svc: ProjectEditService,
              private frmBuilder: FormBuilder,
              private snkBar: MatSnackBar) {
    this.verifyFormInput();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.verifyFormInput();
  }

  onSubmit(){
    this.project.save();
    this.snkBar.open('Project saved!', ':D');
    this.verifyFormInput();
  }

  verifyFormInput() {
    // Verify if this component have been received the project from the component-task-list.
    if (this.inputProject !== undefined) {
      this.project.FromObject(this.inputProject);
    } else {
      this.project.clear();
    }
    this.initForm();
  }

  private initForm(): void {
    this.frmProject = this.frmBuilder.group({
      id: [this.project.getId()],
      name: [this.project.getName(), Validators.required],
      idManager: [this.project.getIdManager(), Validators.required],
      active: [this.project.getActive(), Validators.required],
      startDate: [this.project.getStartDate(), Validators.required],
      endDate: [this.project.getEndDate(), Validators.required],
      accessCode: [this.project.getAcessCode()],
    });
  }
}
