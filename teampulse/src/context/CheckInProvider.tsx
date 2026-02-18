import { useMemo, type ReactNode } from "react";
import { CheckInContext } from "./CheckInContext";
import { useCheckIns } from "../reducers/checkInReducer";

interface CheckInProviderProps {
  children: ReactNode;
}

export function CheckInProvider({ children }: CheckInProviderProps) {
  const { checkIns, addCheckIn, removeCheckIn, clearDay } = useCheckIns();

  const todayCheckIns = useMemo(() => {
    const today = new Date();
    return checkIns.filter((checkIn) => {
      return (
        checkIn.timestamp.getDate() === today.getDate() &&
        checkIn.timestamp.getMonth() === today.getMonth() &&
        checkIn.timestamp.getFullYear() === today.getFullYear()
      );
    });
  }, [checkIns]);

  return (
    <CheckInContext.Provider
      value={{
        checkIns,
        todayCheckIns,
        addCheckIn,
        removeCheckIn,
        clearDay,
      }}
    >
      {children}
    </CheckInContext.Provider>
  );
}
