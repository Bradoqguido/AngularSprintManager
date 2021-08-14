import { Component, OnInit } from '@angular/core';
import { SprintTask } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lstTask: SprintTask[] = [
    {
      id: 1,
      title: '1',
      description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      status: '',
      estimatedHours: 5,
      completedHours: 0,
      assignedTo: '',
      sprint: '',
      createdBy: '',
      createdAt: new Date(),
      idProject: 0
    },
    {
      id: 2,
      title: '2',
      description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      status: '',
      estimatedHours: 5,
      completedHours: 0,
      assignedTo: '',
      sprint: '',
      createdBy: '',
      createdAt: new Date(),
      idProject: 0
    },
    {
      id: 3,
      title: '3',
      description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      status: '',
      estimatedHours: 5,
      completedHours: 0,
      assignedTo: '',
      sprint: '',
      createdBy: '',
      createdAt: new Date(),
      idProject: 0
    },
    {
      id: 4,
      title: '4',
      description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      status: '',
      estimatedHours: 5,
      completedHours: 0,
      assignedTo: '',
      sprint: '',
      createdBy: '',
      createdAt: new Date(),
      idProject: 0
    },
    {
      id: 5,
      title: '5',
      description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      status: '',
      estimatedHours: 5,
      completedHours: 0,
      assignedTo: '',
      sprint: '',
      createdBy: '',
      createdAt: new Date(),
      idProject: 0
    }
  ];

}
