import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectEditService {

  constructor() { }

  getManager(): any {
    return [
      {
        id: 0,
        name: 'Manager 1'
      },
      {
        id: 0,
        name: 'Manager 1'
      }
    ]
  }
}
