import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Project } from './../../../../interfaces/project.interface';

const PROJECT_COLUMNS = [
  'name',
  'active',
  'accessCode'
];

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  // Receives the data from the parent component.
  @Input() lstProject: Project[] = [];
  @Output() eventEmitter: any = new EventEmitter();

  displayedColumns: string[] = PROJECT_COLUMNS;

  // Declare the data source as undefined to add data on ngOnInit.
  dataSource = [...this.lstProject];

  expandedElement?: Project | null;

  @ViewChild(MatTable) table: any;

  constructor() { }

  ngOnInit(): void {
    // Add data from the parent component on the dataSource.
    this.dataSource = [...this.lstProject];
  }

  ngOnChanges() {
    // Add data from the parent component on the dataSource.
    this.dataSource = [...this.lstProject];
  }

  remove(row: any): void {
    const index = this.dataSource.indexOf(row, 0);
    if (index > -1) {
      this.dataSource.splice(index, 1);
    }
    this.table.renderRows();
  }

  edit(project: Project) {
    this.eventEmitter.emit(project);
  }

}
