"use client";

import Link from "next/link";
import { LogWorkoutContainer } from "../components/Log/LogWorkoutContainer";
import { useUserContext } from "../contexts/userContext";
import { useState, useEffect } from "react";
import { WorkoutsDropDown } from "../components/Log/WorkoutsDropDown";
import styles from "../style";

export default function LogPage() {
  const { user, setUser } = useUserContext();
  const [showWorkouts, setShowWorkouts] = useState(false);
  const [chosenExercises, setChosenExercises] = useState([]);
  const [chosenWorkout, setChosenWorkout] = useState({});
  const [userWorkouts, setUserWorkouts] = useState([]);

  useEffect(() => {
    fetch(`/api/workouts`)
      .then((res) => res.json())
      .then((workoutData) => {
        const workoutsByCreator = workoutData.filter(
          (workout) => workout.creator_id === user.user_id
        );
        setUserWorkouts(workoutsByCreator);
      });
  }, []);

  function handleShowWorkouts() {
    setShowWorkouts(!showWorkouts);
  }

  if (!user.user_id)
    return (
      <section className={`flex justify-center`}>
        <div className={`${styles.bodySection}`}>
            <h1 className={`mb-5 ${styles.title}`}>My Workouts</h1>
            <Link href="/login">
              <button className={`${styles.button}`}>Login</button>
            </Link>
          </div>
        </section>
      );

    return (
      <main className={`flex justify-center`}>
        <div className={`${styles.bodySection}`}>
          <h1 className={`mb-5 ${styles.title}`}>Log Workout</h1>
          <div className="mb-10">
            <button onClick={handleShowWorkouts} className={`${styles.button}`}>
              {!chosenWorkout.workout_name ? "Choose a workout" : ""}{" "}
              {chosenWorkout.workout_name ? `${chosenWorkout.workout_name}` : null}
            </button>
            <div className="">
                {showWorkouts ? (
                  <WorkoutsDropDown
                    setChosenExercises={setChosenExercises}
                    setChosenWorkout={setChosenWorkout}
                    chosenWorkout={chosenWorkout}
                    userWorkouts={userWorkouts}
                  />
                ) : null}
            </div>
            {chosenWorkout.workout_name ? (
              <LogWorkoutContainer
                chosenExercises={chosenExercises}
                setChosenExercises={setChosenExercises}
                chosenWorkout={chosenWorkout}
              />
            ) : null}
          </div>
        </div>
    </main>
  );
}
