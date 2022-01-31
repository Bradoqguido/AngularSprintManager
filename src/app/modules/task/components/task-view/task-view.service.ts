import { Injectable } from '@angular/core';
import { Task } from 'src/app/classes/task.class';

@Injectable({
  providedIn: 'root'
})
export class TaskViewService {

  taskList: Task[] = [];
  constructor() { }

  getTaskList(): Task[] {
    for (var i = 0; i < 5; i++) {
      const task = new Task(i,
                            `task ${i}`,
                            'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
                            'New',
                            Math.floor((Math.random() * 10)) + 1,
                            0,
                            `User ${i}`,
                            'sprint_01-08-2021_07-08-2021',
                            'Admin',
                            1);
      this.taskList.push(task);
    }

    return this.taskList;
  }
}
