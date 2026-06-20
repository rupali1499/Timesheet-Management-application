"use client";

import { useEffect, useState } from "react";

import { Timesheet } from "@/types/timesheet";
import { getTimesheets } from "@/services/timesheet.service";

export default function useTimesheets(params?: { status?: string; startDate?: string; endDate?: string }) {
  const [timesheets, setTimesheets] =
    useState<Timesheet[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    fetchTimesheets();
  }, [params]);

  const fetchTimesheets = async () => {
    try {
      setLoading(true);

      const data =
        await getTimesheets(params);

      setTimesheets(data);
    } catch {
      setError(
        "Unable to load timesheets"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    timesheets,
    loading,
    error,
  };
}