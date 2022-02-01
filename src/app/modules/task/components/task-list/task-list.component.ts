import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTable } from '@angular/material/table';
import { Task } from 'src/app/classes/task.class';

const TASK_COLUMNS = [
  'id',
  'title',
  'status',
  'assignedTo',
  'estimatedHours',
  'completedHours',
  'sprint'
];

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TaskListComponent implements OnInit {

  // Receives the data from the parent component.
  @Input() lstTask: Task[] = [];
  @Output() eventEmitter: any = new EventEmitter();
  lstTaskObjects: any[] = [];

  displayedColumns: string[] = TASK_COLUMNS;

  // Declare the data source as undefined to add data on ngOnInit.
  dataSource = [...this.lstTaskObjects];

  expandedElement?: Task | null;

  @ViewChild(MatTable) table: any;

  constructor() { }

  ngOnInit(): void {
    this.lstTask.forEach(e => {
      this.lstTaskObjects.push(e.ToObject());
    });

    // Add data from the parent component on the dataSource.
    this.dataSource = [...this.lstTaskObjects];
  }

  ngOnChanges() {
    // Add data from the parent component on the dataSource.
    this.dataSource = [...this.lstTaskObjects];
  }

  delete(row: any): void {
    const index = this.dataSource.indexOf(row, 0);
    if (index > -1) {
      this.dataSource.splice(index, 1);
    }
    this.table.renderRows();
  }

  edit(task: any) {
    this.eventEmitter.emit(task);
  }

}
