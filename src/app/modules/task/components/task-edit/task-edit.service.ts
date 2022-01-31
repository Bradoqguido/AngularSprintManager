import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskEditService {

  constructor() { }

  getEmployees(): string[] {
    return ['Sonny','Hanna','Jack', 'Harry'];
  }

  getSprints(): string[] {
    return ['sprint_01-08-2021_07-08-2021','sprint_07-08-2021_12-08-2021','sprint_17-08-2021_24-08-2021','sprint_24-08-2021_31-08-2021'];
  }

  getStatus(): string[] {
    return ['New','Active','Closed'];
  }

  getProjectManager(): string {
    return 'manager';
  }

  getProjectId(): number {
    return 1;
  }
}
