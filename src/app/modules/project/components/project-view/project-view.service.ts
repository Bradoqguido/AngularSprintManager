import { Injectable } from '@angular/core';
import { Project } from 'src/app/classes/project.class';

@Injectable({
  providedIn: 'root'
})
export class ProjectViewService {

  lstProject: Project[] = [];

  constructor() { }

  getProjectList(): Project[] {
    for (var i = 0; i < 5; i++) {
      const project = new Project(`project ${i}`,
                               i,
                               true,
                               new Date(),
                               new Date(),
                               `5362${i}`
                              );
      this.lstProject.push(project);
    }
    return this.lstProject;
  }
}
