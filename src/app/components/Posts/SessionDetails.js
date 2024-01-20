import { useEffect, useState } from "react";
import { SetDetails } from "./SetDetails";

export const SessionDetails = ({ sessionSets, exerciseObj }) => {
  const allExercises = exerciseObj;
  
  // count number of sets for each exercise in session
  const setCounts = {};
  sessionSets.forEach((set) => {
    setCounts[set.exercise_id] = (setCounts[set.exercise_id] || 0) + 1
  });

  // find exercise name from exericse_id and create array from objects:
  // {exercise : no. of sets}
  const exerciseSetsArray = [];
  for (const exercise_id in setCounts) {
    const exerciseObj = allExercises.find((obj) => {
      return obj.exercise_id === parseInt(exercise_id);
    });
    exerciseSetsArray.push([exerciseObj.name, setCounts[exercise_id]]);
  }

  // console.log(sessionSets.sort((a, b) => a.logged_id - b.logged_id))
  return (
    <>
      <ul className="ml-8 mb-4 list-disc">
        {exerciseSetsArray.map((exercise) => {
          return (
            <li key={exercise[0]}>
              <SetDetails exercise={exercise} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
