import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Project } from 'src/app/classes/project.class';
import { ProjectEditService } from './project-edit.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  @Input() inputProject: any; // Is a project project data;
  project: Project = new Project();

  frmProject = new FormGroup({});

  constructor(private svc: ProjectEditService,
              private frmBuilder: FormBuilder,
              private snkBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.verifyFormInit();
  }

  onSubmit(){
    this.project.save();
    this.snkBar.open('Project saved!', ':D');
    this.verifyFormInit();
  }

  verifyFormInit() {
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
      accessCode: [this.project.getAcessCode()],
    });
  }
}
