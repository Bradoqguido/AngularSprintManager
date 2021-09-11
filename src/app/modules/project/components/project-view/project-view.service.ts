import { Injectable } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectViewService {

  constructor() { }

  getProjectList(): Project[] {
    return [
      {
        id: 1,
        name: 'project 1',
        idManager: '1',
        accessCode: '',
        active: true
      },
      {
        id: 2,
        name: 'project 2',
        idManager: '1',
        accessCode: '',
        active: true
      },
      {
        id: 3,
        name: 'project 3',
        idManager: '1',
        accessCode: '',
        active: true
      },
      {
        id: 4,
        name: 'project 4',
        idManager: '1',
        accessCode: '',
        active: true
      },
      {
        id: 4,
        name: 'project 4',
        idManager: '1',
        accessCode: '',
        active: true
      }
    ];
  }
}
