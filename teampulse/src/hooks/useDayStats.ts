import { useMemo } from "react";
import type { Mood, CheckIn, DayStats } from "../types";

export function useDayStats(checkIns: CheckIn[], allMoods: readonly Mood[]): DayStats {
    return useMemo(() => {
        const moodDistribution = Object.fromEntries(
            allMoods.map((m) => [m, 0])
        ) as Record<Mood, number>;

        let energySum = 0;

        for (const c of checkIns) {
            energySum += c.energy;
            moodDistribution[c.mood] += 1;
        }

        const totalCheckIns = checkIns.length;
        const averageEnergy = totalCheckIns === 0 ? 0 : energySum / totalCheckIns;

        return {
            totalCheckIns,
            averageEnergy,
            moodDistribution,
        };
    }, [checkIns, allMoods]);
}