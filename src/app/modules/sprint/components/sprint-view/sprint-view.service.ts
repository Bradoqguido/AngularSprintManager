import { Injectable } from '@angular/core';
import { Sprint } from '../../../../interfaces/sprint.interface';

@Injectable({
  providedIn: 'root'
})
export class SprintViewService {

  constructor() { }

  getSprintList(): Sprint[] {
    return [
      {
        id: 1,
        idProject: 1,
        sprint: 'sprint 1',
        createdBy: 'manager',
        startDate: new Date(),
        endDate: new Date(),
        createdAt: new Date()
      },
      {
        id: 2,
        idProject: 1,
        sprint: 'sprint 2',
        createdBy: 'manager',
        startDate: new Date(),
        endDate: new Date(),
        createdAt: new Date()
      },
      {
        id: 3,
        idProject: 1,
        sprint: 'sprint 3',
        createdBy: 'manager',
        startDate: new Date(),
        endDate: new Date(),
        createdAt: new Date()
      },
      {
        id: 4,
        idProject: 2,
        sprint: 'sprint 1',
        createdBy: 'manager',
        startDate: new Date(),
        endDate: new Date(),
        createdAt: new Date()
      },
      {
        id: 4,
        idProject: 2,
        sprint: 'sprint 2',
        createdBy: 'manager',
        startDate: new Date(),
        endDate: new Date(),
        createdAt: new Date()
      }
    ];
  }
}
