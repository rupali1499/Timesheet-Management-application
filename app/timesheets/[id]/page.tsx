"use client";

import { useParams } from "next/navigation";
import TimesheetHeader from "@/components/timesheet-detail/TimesheetHeader";
import TimesheetProgress from "@/components/timesheet-detail/TimesheetProgress";
import DaySection from "@/components/timesheet-detail/DaySection";
import useTimesheetDetail from "@/hooks/useTimesheetDetail";

export default function TimesheetDetailPage() {
  const params = useParams();
  const id = params.id as string;
  
  const { timesheetDetail, loading, error } = useTimesheetDetail(id);

  if (loading) {
    return (
      <div className="rounded-lg bg-white p-4 sm:p-6 shadow-sm">
        <div className="py-6 sm:py-8 text-center text-sm text-gray-500">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-white p-4 sm:p-6 shadow-sm">
        <div className="py-6 sm:py-8 text-center text-sm text-red-500">
          {error}
        </div>
      </div>
    );
  }

  if (!timesheetDetail || !timesheetDetail.days) {
    return (
      <div className="rounded-lg bg-white p-4 sm:p-6 shadow-sm">
        <div className="py-6 sm:py-8 text-center text-sm text-red-500">
          Timesheet detail not available
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white p-4 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <TimesheetHeader 
          title={timesheetDetail.title}
          weekRange={timesheetDetail.weekRange}
        />
        <TimesheetProgress 
          totalHours={timesheetDetail.totalHours}
          targetHours={timesheetDetail.targetHours}
        />
      </div>

      <div className="mt-4 sm:mt-6">
        {timesheetDetail.days.map((day: any) => (
          <DaySection
            key={day.date}
            day={day}
          />
        ))}
      </div>
    </div>
  );
}