export interface IProject {
  getId(): number;
  getName(): string;
  setName(name: string): void;
  getIdManager(): number;
  setIdManager(idManager: number): void;
  getActive(): boolean;
  setActive(active: boolean): void;
  getAcessCode(): string;
  setAcessCode(acessCode: string): void;
  clear(): void;
  save(): string;
  ToObject(): any;
}
