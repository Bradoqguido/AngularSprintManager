import { Injectable } from '@angular/core';
import { Sprint } from '../../../../classes/sprint.class';

@Injectable({
  providedIn: 'root'
})
export class SprintViewService {

  lstSprint: Sprint[] = [];

  constructor() { }

  getSprintList(): Sprint[] {
    for (var i = 0; i < 5; i++) {
      const task = new Sprint(i,
                              `sprint_${new Date().toJSON()}`,
                              new Date(),
                              new Date(),
                              'system',
                              new Date(),
                              1);
      this.lstSprint.push(task);
    }

    return this.lstSprint;
  }
}
