import { createContext, useContext } from "react";
import type { CheckIn } from "../types";

export interface CheckInContextType {
  checkIns: CheckIn[];
  todayCheckIns: CheckIn[];
  addCheckIn: (checkIn: Omit<CheckIn, "id" | "timestamp">) => void;
  removeCheckIn: (id: string) => void;
  clearDay: (date: string) => void;
}

export const CheckInContext = createContext<CheckInContextType | undefined>(
  undefined,
);

export function useCheckInContext() {
  const context = useContext(CheckInContext);
  if (!context) {
    throw new Error("useCheckInContext must be used within CheckInProvider");
  }
  return context;
}
