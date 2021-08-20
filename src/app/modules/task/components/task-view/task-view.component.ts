import { TaskViewService } from './task-view.service';
import { Component, Input, OnInit } from '@angular/core';
import { SprintTask } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  sprintTask: any;
  lstTask: SprintTask[] = this.svc.getTaskList();

  constructor(private svc: TaskViewService) { }

  ngOnInit(): void {
  }

  getTask(task: any) {
    this.sprintTask = task;
  }

}
