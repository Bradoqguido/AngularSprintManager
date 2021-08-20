import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprint-edit',
  templateUrl: './sprint-edit.component.html',
  styleUrls: ['./sprint-edit.component.scss']
})
export class SprintEditComponent implements OnInit {

  @Input() sprint: any; // Is a sprint task data;

  constructor() { }

  ngOnInit(): void {
  }

  create() {

  }
}
