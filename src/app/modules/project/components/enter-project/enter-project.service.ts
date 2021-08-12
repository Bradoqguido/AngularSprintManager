import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnterProjectService {

  constructor() { }

  public VerifyAccessCode(projectAccessCode: string): string {
    if (projectAccessCode.length === 0)
      return 'As no access code, please tip it to verify.';

    if (projectAccessCode.length > 16)
      return 'Access code is too long, please verify your access code.';

    if (!this.VerifyIfExistsProject(projectAccessCode))
      return `Project don't exists or you don't have access to it.`;

    return '';
  }

  private VerifyIfExistsProject(projectAccessCode: string): boolean {
    // call firebase;

    return this.VerifyIfEmployeeExistsInProject(0);
  }

  private VerifyIfEmployeeExistsInProject(projectId: number): boolean {
    // call firebase;
    return false;
  }
}
