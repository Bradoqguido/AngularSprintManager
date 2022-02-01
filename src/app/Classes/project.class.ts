import { IProject } from "../interfaces/project.interface"

export class Project implements IProject {
  private id: number = 0;
  private name: string = '';
  private idManager: number = 0;
  private active: boolean = false;
  private accessCode: string = '';

  constructor (name?: string, idManager?: number, active?: boolean, accessCode?: string) {
    this.name = name || '';
    this.idManager = idManager || 0;
    this.active = active || false;
    this.accessCode = accessCode || '';
  }

  getId(): number { return this.id; }

  getName(): string { return this.name; }
  setName(name: string): void { this.name = name; }

  getIdManager(): number { return this.idManager; }
  setIdManager(idManager: number): void { this.idManager = idManager; }

  getActive(): boolean { return this.active; }
  setActive(active: boolean): void { this.active = active; }

  getAcessCode(): string { return this.accessCode; }
  setAcessCode(acessCode: string): void { this.accessCode = acessCode; }

  clear(): void {
    this.id = this.getLastId();
    this.name = '';
    this.idManager = 0;
    this.active = false;
    this.accessCode = '';
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
        idManager: this.idManager,
        active: this.active,
        accessCode: this.accessCode,
      }
  }

  FromObject(project: any):any {
    this.id = project.id;
    this.name = project.name;
    this.idManager = project.idManager;
    this.active = project.active;
    this.accessCode = project.accessCode;
  }
}
