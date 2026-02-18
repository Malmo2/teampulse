import { useReducer } from "react";
import type { CheckIn } from "../types";

type State = {
    checkIns: CheckIn[];
};

const initialState: State = {
    checkIns: [],
};

type CheckInAction =
    | { type: "ADD_CHECKIN"; payload: Omit<CheckIn, "id" | "timestamp"> }
    | { type: "REMOVE_CHECKIN"; payload: { id: string } }
    | { type: "CLEAR_DAY"; payload: { date: string } };

function toDateKey(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function checkReducer(state: State, action: CheckInAction): State {
    switch (action.type) {
        case "ADD_CHECKIN": {
            const newCheckIn: CheckIn = {
                id: crypto.randomUUID(),
                timestamp: new Date(),
                ...action.payload,
            };

            return {
                ...state,
                checkIns: [newCheckIn, ...state.checkIns],
            };
        }

        case "REMOVE_CHECKIN": {
            return {
                ...state,
                checkIns: state.checkIns.filter(
                    (checkIn) => checkIn.id !== action.payload.id
                ),
            };
        }

        case "CLEAR_DAY": {
            return {
                ...state,
                checkIns: state.checkIns.filter((checkIn) => {
                    const checkInDate = toDateKey(checkIn.timestamp);
                    return checkInDate !== action.payload.date;
                }),
            };
        }

        default: {
            return state;
        }
    }
}

export function useCheckIns() {
    const [state, dispatch] = useReducer(checkReducer, initialState);

    const addCheckIn = (data: Omit<CheckIn, "id" | "timestamp">) => {
        dispatch({ type: "ADD_CHECKIN", payload: data });
    }

    const removeCheckIn = (id: string) => {
        dispatch({ type: "REMOVE_CHECKIN", payload: { id } });
    }

    const clearDay = (date: string) => {
        dispatch({ type: "CLEAR_DAY", payload: { date } });
    }

    return {
        checkIns: state.checkIns,
        addCheckIn,
        removeCheckIn,
        clearDay,
    };
}



