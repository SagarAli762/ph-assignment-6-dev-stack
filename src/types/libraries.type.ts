export interface ILibrary {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: "Intermediate";
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: number;
  rating: number;
  description: number;
  instructions: string[];
}
