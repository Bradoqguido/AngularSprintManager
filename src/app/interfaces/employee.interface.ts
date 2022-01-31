export interface IEmployee {
  getId(): number;
  getName(): string;
  setName(name: string): void;
  getEmail(): string;
  setEmail(email: string): void;
  getPhotoUrl(): string;
  setPhotoUrl(photoUrl: string): void;
  getJob(): string;
  setJob(job: string): void;
  getActive(): boolean;
  setActive(active: boolean): void;
  getIdProject(): number;
  clear(): void;
  save(): string;
  ToObject(): any;
}
