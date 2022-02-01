import { ISprint } from '../interfaces/sprint.interface';

export class Sprint implements ISprint {
  private id: number = 0;
  private sprint: string = '';
  private startDate: Date = new Date();
  private endDate: Date = new Date();
  private createdBy: string = '';
  private createdAt: Date = new Date();
  private idProject: number = 0;

  constructor(id?: number, sprint?: string, startDate?: Date, endDate?: Date, createdBy?: string, createdAt?: Date, idProject?: number) {
    this.id = id || 0;
    this.sprint = sprint || '';
    this.startDate = startDate || new Date();
    this.endDate = endDate || new Date();
    this.createdBy = createdBy || '';
    this.createdAt = createdAt || new Date();
    this.idProject = idProject || 0;
  }

  getId(): number { return this.id; }

  getSprint(): string { return this.sprint; }
  setSprint(sprint: string): void { this.sprint = sprint; }

  setStartDate(startDate: Date): void { this.startDate = startDate; }
  getStartDate(): Date { return this.startDate; }

  setEndDate(endDate: Date): void { this.endDate = endDate; }
  getEndDate(): Date { return this.endDate; }

  getCreatedBy(): string { return this.createdBy; }
  getCreatedAt(): Date { return this.createdAt; }

  getIdProject(): number { return this.idProject; }

  clear(): void {
    this.id = this.getLastId();
    this.sprint = '';
    this.startDate = new Date();
    this.endDate = new Date();
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

  ToObject():any {
      return {
        id: this.id,
        sprint: this.sprint,
        startDate: this.startDate,
        endDate: this.endDate,
        createdBy: this.createdBy,
        createdAt: this.createdAt,
        idProject: this.idProject
      }
  }

  FromObject(sprint: any):any {
    this.id = sprint.id;
    this.sprint = sprint.sprint;
    this.startDate = sprint.startDate;
    this.endDate = sprint.endDate;
    this.createdBy = sprint.createdBy;
    this.createdAt = sprint.createdAt;
    this.idProject = sprint.idProject;
  }
}
