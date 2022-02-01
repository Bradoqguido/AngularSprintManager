import { ITask } from "../interfaces/task.interface";

export class Task implements ITask {
  private id = 0;
  private title = '';
  private description = '';
  private status = ''; // ['New','Active','Closed']
  private estimatedHours = 0;
  private completedHours = 0;
  private assignedTo = '';
  private sprint = '';
  private createdBy = '';
  private createdAt = new Date();
  private idProject = 0;

  constructor(id?: number, title?: string, description?: string, status?: string, estimatedHours?: number, completedHours?: number, assignedTo?: string, sprint?: string, createdBy?: string, idProject?: number) {
    this.id = id || 0; //this.getLastId();
    this.title = title || '';
    this.description = description || '';
    this.status = status || '';
    this.estimatedHours = estimatedHours || 0;
    this.completedHours = completedHours || 0;
    this.assignedTo = assignedTo || '';
    this.sprint = sprint || '';
    this.createdBy = createdBy || '';
    this.idProject = idProject || 0;
  }

  public getId(): number { return this.id; }

  getTitle(): string { return this.title; }
  setTitle(title: string): void { this.title = title }

  getDescription(): string { return this.description; }
  setDescription(description: string): void { this.description = description; }

  getStatus(): string { return this.status; }
  setStatus(status: string): void { this.status = status }

  getEstimatedHours(): number { return this.estimatedHours; }
  setEstimatedHours(estimatedHours: number): void { this.estimatedHours = estimatedHours }

  getCompletedHours(): number { return this.completedHours; }
  setCompletedHours(completedHours: number): void { this.completedHours = completedHours }

  getAssignedTo(): string { return this.assignedTo; }
  setAssignedTo(assignedTo: string): void { this.assignedTo = assignedTo }

  getSprint(): string { return this.sprint; }
  setSprint(sprint: string): void { this.sprint = sprint }

  getCreatedBy(): string { return this.createdBy; }
  getCreatedAt(): Date { return this.createdAt; }

  getIdProject(): number { return this.idProject; }

  clear(): void {
      this.id = this.getLastId();
      this.title = '';
      this.description = '';
      this.status = 'New';
      this.estimatedHours = 0;
      this.completedHours = 0;
      this.assignedTo = '';
      this.sprint = '';
      this.createdBy = '';
      this.createdAt = new Date();
      this.idProject = 0;
  }

  /** Save task
   * Invoke the API to save that object.
   */
  save(): string {
    return 'API Communication ERROR!';
  }

  /** Get last task id
   * Invoke the API to get the last id code.
   */
  private getLastId(): number {
    return 0;
  }

  ToObject(): any {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      status: this.status,
      estimatedHours: this.estimatedHours,
      completedHours: this.completedHours,
      assignedTo: this.assignedTo,
      sprint: this.sprint,
      createdBy: this.createdBy,
      createdAt: this.createdAt,
      idProject: this.idProject
    }
  }

  FromObject(task: any): void {
    this.id = task.id;
    this.title = task.title;
    this.description = task.description;
    this.status = task.status;
    this.estimatedHours = task.estimatedHours;
    this.completedHours = task.completedHours;
    this.assignedTo = task.assignedTo;
    this.sprint = task.sprint;
    this.createdBy = task.createdBy;
    this.createdAt = task.createdAt;
    this.idProject = task.idProject;
  }
}
