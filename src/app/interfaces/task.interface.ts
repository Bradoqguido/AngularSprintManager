export interface SprintTask {
  idTask: number;
  title: string;
  description: string;
  specification: string;
  status: string;
  estimatedHours: Date;
  completedHours: Date;
  assignedTo: string;
  sprint: string;
  createdBy: string;
  createdAt: Date;
  idProject: number;
}
