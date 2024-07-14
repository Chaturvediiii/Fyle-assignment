export interface User {
  name: string;
  workouts: { workoutType: string, minutes: number }[];
  totalWorkoutTypes: number;
  totalMinutes: number;
}
  