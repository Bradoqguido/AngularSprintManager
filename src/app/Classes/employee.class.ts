import { IEmployee } from "../interfaces/employee.interface"

export class Employee implements IEmployee {
  private id: number = 0;
  private name: string = '';
  private email: string = '';
  private photoUrl: string = '';
  private job: string[] = ['Developer', 'Designer', 'Manager', 'Observer'];
  private active: boolean = false;
  private idProject: number = 0;

  getIdProject(): number { return this.idProject; }

  clear(): void {
    this.id = this.getLastId();
    this.name = '';
    this.email = '';
    this.photoUrl = '';
    this.job = ['Developer', 'Designer', 'Manager', 'Observer'];
    this.active = false;
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
}
