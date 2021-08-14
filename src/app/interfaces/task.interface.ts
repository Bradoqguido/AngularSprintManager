export interface SprintTask {
  id: number;
  title: string;
  description: string;
  status: string;
  estimatedHours: number;
  completedHours: number;
  assignedTo: string;
  sprint: string;
  createdBy: string;
  createdAt: Date;
  idProject: number;
}
