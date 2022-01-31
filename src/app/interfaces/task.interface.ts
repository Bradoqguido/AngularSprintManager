export interface ITask {
  getId(): number;
  getTitle(): string;
  setTitle(title: string): void;
  getDescription(): string;
  setDescription(description: string): void;
  getStatus(): string;
  setStatus(status: string): void;
  getEstimatedHours(): number;
  setEstimatedHours(estimatedHours: number): void;
  getCompletedHours(): number;
  setCompletedHours(completedHours: number): void;
  getAssignedTo(): string;
  setAssignedTo(assignedTo: string): void;
  getSprint(): string;
  setSprint(sprint: string): void;
  getCreatedBy(): string;
  getCreatedAt(): Date;
  getIdProject(): number;
  clear(): void;
  save(): string;
  ToObject(): any;
}
