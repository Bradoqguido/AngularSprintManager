import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { SprintTask } from '../../../../interfaces/task.interface';

const TASK_COLUMNS = [
  'Id',
  'Title',
  'Description',
  'Specification',
  'Status',
  'EstimatedHours',
  'CompletedHours',
  'AssignedTo',
  'Sprint',
  'CreatedBy',
  'CreatedAt',
  'Remove'
];

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() lstTask: SprintTask[] = [];

  @ViewChild(MatTable)
  table!: MatTable<SprintTask>;

  displayedColumns: string[] = TASK_COLUMNS;
  dataSource = [...this.lstTask];

  removeTask(idTask: number) {
    this.dataSource.splice(idTask);
    this.table.renderRows();
  }

}
