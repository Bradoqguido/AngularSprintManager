import { SprintViewService } from './sprint-view.service';
import { Component, OnInit } from '@angular/core';
import { Sprint } from '../../../../interfaces/sprint.interface';

@Component({
  selector: 'app-sprint-view',
  templateUrl: './sprint-view.component.html',
  styleUrls: ['./sprint-view.component.scss']
})
export class SprintViewComponent implements OnInit {
  sprint: any;
  lstSprint: Sprint[] = this.svc.getSprintList();

  constructor(private svc: SprintViewService) { }

  ngOnInit(): void {
  }


  getSprint(sprint: any) {
    this.sprint = sprint;
  }
}
