import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTable } from '@angular/material/table';
import { Sprint } from '../../../../interfaces/sprint.interface';

const SPRINT_COLUMNS = [
  'sprint',
  'startDate',
  'endDate',
  'edit',
  'remove'
];

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.scss']
})
export class SprintListComponent implements OnInit {

  // Receives the data from the parent component.
  @Input() lstSprint: Sprint[] = [];
  @Output() eventEmitter: any = new EventEmitter();

  displayedColumns: string[] = SPRINT_COLUMNS;

  // Declare the data source as undefined to add data on ngOnInit.
  dataSource = [...this.lstSprint];

  expandedElement?: Sprint | null;

  @ViewChild(MatTable) table: any;

  constructor() { }

  ngOnInit(): void {
    // Add data from the parent component on the dataSource.
    this.dataSource = [...this.lstSprint];
  }

  remove(row: any): void {
    const index = this.dataSource.indexOf(row, 0);
    if (index > -1) {
      this.dataSource.splice(index, 1);
    }
    this.table.renderRows();
  }

  edit(sprint: Sprint) {
    this.eventEmitter.emit(sprint);
  }

}
