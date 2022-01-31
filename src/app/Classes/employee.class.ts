import { ThrowStmt } from "@angular/compiler";
import { IEmployee } from "../interfaces/employee.interface"

export class Employee implements IEmployee {
  private id: number = 0;
  private name: string = '';
  private email: string = '';
  private photoUrl: string = '';
  private job: string = ''; //['Developer', 'Designer', 'Manager', 'Observer'];
  private active: boolean = false;
  private idProject: number = 0;

  constructor();
  constructor(id?: number, name?: string, email?: string, photoUrl?: string, job?: string, active?: boolean, idProject?: number) {
    this.id = id!;
    this.name = name!;
    this.email = email!;
    this.photoUrl = photoUrl!;
    this.job = job!;
    this.active = active!;
    this.idProject = idProject!;
  };

  getId(): number { return this.id; }

  getName(): string { return this.name; }
  setName(name: string): void { this.name = name; }

  getEmail(): string { return this.email; }
  setEmail(email: string): void { this.email = email; }

  getPhotoUrl(): string { return this.photoUrl; }
  setPhotoUrl(photoUrl: string): void { this.photoUrl = photoUrl; }

  getJob(): string { return this.job; }
  setJob(job: string): void { this.job = job; }

  getActive(): boolean { return this.active; }
  setActive(active: boolean): void { this.active = active; }

  getIdProject(): number { return this.idProject; }

  clear(): void {
    this.id = this.getLastId();
    this.name = '';
    this.email = '';
    this.photoUrl = '';
    this.job = '';
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

  ToObject():any {
      return {
        id: this.id,
        name: this.name,
        email: this.email,
        photoUrl: this.photoUrl,
        job: this.job,
        active: this.active,
        idProject: this.idProject
      }
  }
}
