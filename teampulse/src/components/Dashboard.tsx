import { useCheckInContext } from "../context/CheckInContext";
import { useDayStats } from "../hooks/useDayStats";
import type { Mood } from "../types";

const ALL_MOODS: readonly Mood[] = [
  "great",
  "good",
  "okay",
  "tired",
  "stressed",
] as const;

const MOOD_EMOJI: Record<Mood, string> = {
  great: "😄",
  good: "🙂",
  okay: "😐",
  tired: "😴",
  stressed: "😰",
};

export default function Dashboard() {
  const { todayCheckIns } = useCheckInContext();
  const stats = useDayStats(todayCheckIns, ALL_MOODS);

  if (todayCheckIns.length === 0) {
    return (
      <section>
        <h2>Today's Dashboard</h2>
        <p>No check-ins today.</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Today's Dashboard</h2>

      <div>
        <h3>Summary</h3>
        <ul>
          <li>Check-ins today: {stats.totalCheckIns}</li>
          <li>Average energy level: {stats.averageEnergy.toFixed(1)}</li>
        </ul>
      </div>

      <div>
        <h3>Mood Distribution</h3>
        <table>
          <thead>
            <tr>
              <th>Mood</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {ALL_MOODS.map((mood) => (
              <tr key={mood}>
                <td>
                  {MOOD_EMOJI[mood]} {mood}
                </td>
                <td>{stats.moodDistribution[mood]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3>All Check-ins Today</h3>
        <ul>
          {todayCheckIns.map((checkIn) => (
            <li key={checkIn.id}>
              <strong>{checkIn.name}</strong> {MOOD_EMOJI[checkIn.mood]} –
              Energy: {checkIn.energy}
              {checkIn.comment && <span> – "{checkIn.comment}"</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
