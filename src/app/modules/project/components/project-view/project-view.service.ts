import { Injectable } from '@angular/core';
import { Project } from 'src/app/classes/project.class';

@Injectable({
  providedIn: 'root'
})
export class ProjectViewService {

  lstSprint: Project[] = [];

  constructor() { }

  getProjectList(): Project[] {
    for (var i = 0; i < 5; i++) {
      const task = new Project(`manager ${i}`,
                               i,
                               true,
                               `5362${i}`
                              );
      this.lstSprint.push(task);
    }

    return this.lstSprint;
  }
}
