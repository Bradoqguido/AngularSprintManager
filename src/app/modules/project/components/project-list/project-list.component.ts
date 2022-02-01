import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Project } from 'src/app/classes/project.class';

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
  lstProjectObjects: any[] = [];

  displayedColumns: string[] = PROJECT_COLUMNS;

  // Declare the data source as undefined to add data on ngOnInit.
  dataSource = [...this.lstProjectObjects];

  expandedElement?: Project | null;

  @ViewChild(MatTable) table: any;

  constructor() { }

  ngOnInit(): void {
    this.lstProject.forEach(e => {
      this.lstProjectObjects.push(e.ToObject());
    });

    // Add data from the parent component on the dataSource.
    this.dataSource = [...this.lstProjectObjects];
  }

  ngOnChanges() {
    // Add data from the parent component on the dataSource.
    this.dataSource = [...this.lstProjectObjects];
  }

  remove(row: any): void {
    const index = this.dataSource.indexOf(row, 0);
    if (index > -1) {
      this.dataSource.splice(index, 1);
    }
    this.table.renderRows();
  }

  edit(project: any) {
    this.eventEmitter.emit(project);
  }

}
