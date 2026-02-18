type Mood = 'great' | 'good' | 'okay' | 'tired' | 'stressed'

type EnergyLevel = 1 | 2 | 3 | 4 | 5

interface CheckIn {
readonly id: string
readonly name: string
readonly mood: Mood
readonly energy: EnergyLevel
readonly comment?: string
readonly timestamp: Date
}

interface DayStats {
    averageEnergy: number
    moodDistribution: Record<Mood, number>
    totalCheckIns: number
}

export type { Mood, EnergyLevel, CheckIn, DayStats }
