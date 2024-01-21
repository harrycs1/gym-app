import { useState, useEffect } from "react";
import { SetsContainer } from "./SetsContainer";
import styles from "@/app/style";

export const ChosenExerciseContainer = ({
  exercise,
  chosenExercises,
  setChosenExercises,
  index,
  workoutData,
  setWorkoutData,
}) => {
  const exerciseId = exercise.exercise_id;
  const [sets, setSets] = useState([{ weight: 0, reps: 0 }]);

  useEffect(() => {
    const copyObject = { ...workoutData };
    copyObject[exerciseId] = sets;
    setWorkoutData(copyObject);
  }, [sets]);

  return (
    <>
      <p className="font-bold">
        {index}. {exercise.name}
      </p>
      <p className=" text-sm pl-2 pb-2">
        {exercise.difficulty} | {exercise.equipment}
      </p>
      <p className="pl-2 pb-2 hidden">{exercise.instructions}</p>

      <div className="flex items-center">
        <div className="w-full">
          <SetsContainer sets={sets} setSets={setSets} />
        </div>
      </div>
    </>
  );
};
