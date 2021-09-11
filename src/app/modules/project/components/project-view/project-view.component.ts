import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';
import { ProjectViewService } from './project-view.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {
  project: any;
  lstProject: Project[] = this.svc.getProjectList();

  constructor(private svc: ProjectViewService) { }

  ngOnInit(): void {
  }
  getProject(project: any) {
    this.lstProject = project;
  }
}
