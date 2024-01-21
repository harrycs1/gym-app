import { useUserContext } from "@/app/contexts/userContext";
import { ChosenExerciseContainer } from "./ChosenExerciseContainer";

export const ChosenExercisesContainer = ({
  chosenExercises,
  setChosenExercises,
  workoutData,
  setWorkoutData
}) => {
  if (!chosenExercises.length) {
    return <div className="m-5 mt-10 text-2xl">Add an exercise...</div>;
  }


  return (
    <>
      {chosenExercises.map((exercise, index) => {
        return (
          <div
            key={index}
            className="mb-4 p-4 rounded-xl bg-Lavender text-DeepPurple"
          >
            <ChosenExerciseContainer
              exercise={exercise}
              setChosenExercises={setChosenExercises}
              chosenExercises={chosenExercises}
              index={index + 1}
              workoutData={workoutData}
              setWorkoutData={setWorkoutData}
            />
          </div>
        );
      })}
    </>
  );
};
