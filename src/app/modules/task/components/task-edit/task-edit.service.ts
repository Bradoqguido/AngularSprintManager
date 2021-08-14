import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskEditService {

  constructor() { }

  getLastTaskId(): number {
    return 1;
  }
}
