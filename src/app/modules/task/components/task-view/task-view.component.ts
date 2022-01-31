import { TaskViewService } from './task-view.service';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/classes/task.class';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  sprintTask: any;
  lstTask: Task[] = this.svc.getTaskList();

  constructor(private svc: TaskViewService) { }

  ngOnInit(): void {
  }

  getTask(task: any) {
    this.sprintTask = task;
  }

}
