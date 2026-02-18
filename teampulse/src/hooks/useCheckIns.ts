import type { CheckIn } from "../types";

export type NewCheckIn = Omit<CheckIn, "id" | "timestamp">;

export { useCheckIns } from "../reducers/checkInReducer";