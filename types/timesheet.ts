export interface Timesheet {
  id: number;
  week: number;
  date: string;
  startDate: string;
  endDate: string;
  status?: "COMPLETED" | "INCOMPLETE" | "MISSING";
  detail?: {
    title: string;
    weekRange: string;
    totalHours: number;
    targetHours: number;
    days: Array<{
      date: string;
      tasks: Array<{
        id: string;
        taskName: string;
        hours: number;
        projectName: string;
      }>;
    }>;
  };
}