import { Sprint } from './../../../../interfaces/sprint.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SprintEditService {

  constructor() { }

  getSprintId(): number {
    return 1;
  }

  setSprint(sprint: Sprint): string {
    console.log(sprint);
    return 'Sprint saved!';
  }

  getProjectManager(): string {
    return 'manager';
  }

  getProjectId(): number {
    return 1;
  }
}
