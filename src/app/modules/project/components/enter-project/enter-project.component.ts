import { EnterProjectService } from './enter-project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-project',
  templateUrl: './enter-project.component.html',
  styleUrls: ['./enter-project.component.scss']
})
export class EnterProjectComponent implements OnInit {

  projectAccessCode: string = '';

  constructor(private eps: EnterProjectService) { }

  ngOnInit(): void {
  }

  onClick () {
    this.eps.VerifyAccessCode(this.projectAccessCode);
  }

}
