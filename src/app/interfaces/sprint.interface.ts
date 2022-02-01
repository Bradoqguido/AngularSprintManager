export interface ISprint {
  getId(): number;
  getSprint(): string;
  setSprint(sprint: string): void;
  setStartDate(startDate: Date): void;
  getStartDate(): Date;
  setEndDate(endDate: Date): void;
  getEndDate(): Date;
  getCreatedBy(): string;
  getCreatedAt(): Date;
  getIdProject(): number;
  clear(): void;
  save(): string;
  ToObject(): any;
  FromObject(sprint: any): any;
}
