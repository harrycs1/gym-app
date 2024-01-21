import { useUserContext } from "@/app/contexts/userContext";
import { useEffect, useState } from "react";
import { WorkoutDropDown } from "./WorkoutDropDown";

export const WorkoutsDropDown = ({
  setChosenExercises,
  setChosenWorkout,
  chosenWorkout,
  userWorkouts,
}) => {
  return (
    <div className="border rounded-xl w-full overflow-auto -bottom-12 z-[1000] mt-2 bg-platinum">
      {!userWorkouts.length ? (
        <>No Saved Workouts</>
      ) : (
        userWorkouts.map((workout, index) => {
          return (
            <div key={workout.workout_id}>
              <WorkoutDropDown
                workout={workout}
                isLast={index === userWorkouts.length-1}
                setChosenExercises={setChosenExercises}
                setChosenWorkout={setChosenWorkout}
                chosenWorkout={chosenWorkout}
              />
            </div>
          );
        })
      )}
    </div>
  );
};