import { useState, useEffect } from "react";
import { ListOfExercises } from "./PickExercises";
import { ChosenExercisesContainer } from "./ChosenExercisesContainer";
import { LoadingSkeleton } from "../General/LoadingSkeleton";
import { useRouter } from "next/navigation";
import { PostInput } from "./PostInput";
import { useUserContext } from "@/app/contexts/userContext";
import styles from "@/app/style";

export const LogWorkoutContainer = ({chosenExercises, setChosenExercises, chosenWorkout}) => {
  const router = useRouter();
  const {user, setUser} = useUserContext(); 
  const [isLoading, setIsLoading] = useState(true);
  const [isLogLoading, setisLogLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isPostError, setIsPostError] = useState(false);
  const [workoutData, setWorkoutData] = useState({});
  const [numOfSessions, setNumOfSessions] = useState(null);
  const [showPostDetails, setShowPostDetails] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    Promise.all([fetch("/api/checkLoggedWorkout")])
      .then(([res2]) => {
        return Promise.all([res2.json()]);
      })
      .then(([loggedWorkoutData]) => {
        setNumOfSessions(loggedWorkoutData.session_id + 1);
        setIsLoading(false);
      });
  }, []);

  const handleLogWorkout = async (e) => {
    setisLogLoading(true);
    const isLog = e.target.textContent === 'Log Workout'
    const workoutId = chosenWorkout.workout_id;
    const userId = user.user_id;

    for (const exerciseId in workoutData) {
      Promise.all(
        workoutData[exerciseId].map((set) => {
          const newLoggedWorkout = {
            session_id: numOfSessions,
            exercise_id: parseInt(exerciseId),
            workout_id: workoutId,
            user_id: userId,
            weight: set.weight,
            reps: set.reps,
          };

          return fetch(`/api/loggedWorkouts`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newLoggedWorkout),
          });
        })
      )
        .then(() => {
          setisLogLoading(false);
          setIsLogged(true);
          isLog ? setTimeout(() => router.push("/"), 1000) : null;
        })
        .then(() => {})
        .catch(() => setIsPostError(true));
    }
  };

  const handlePostWorkout = async (e) => {
    await handleLogWorkout(e);
    const userId = user.user_id
    const newPost = {
      session_name : title,
      description : description,
      session_id : parseInt(numOfSessions),
      user_id : userId
    }
    fetch(`/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost)
    }).then(() => {
      setTimeout(() => router.push("/"), 1000);
    });
  }

  const handleShowPostDetails = () => {
    setShowPostDetails(!showPostDetails);
  };

  if (isLoading) return <LoadingSkeleton />;

  return (
    <div className="py-5">
      <div className="flex items-center gap-4">
        <button
          className={`${styles.button} px-5 bg-LightPurple ${
            !chosenExercises.length ? "opacity-30" : null
          }`}
          onClick={handleLogWorkout}
          disabled={!chosenExercises.length}
        >
          Log
        </button>
        <button
          className={`${styles.button} px-5 bg-LightGreen`}
          onClick={handleShowPostDetails}
        >
          Post
        </button>
        <p
          className={`ml-4 italic text-lg ${
            isLogged ? "text-LightGreen" : null
          } ${isPostError ? "text-Red" : null}`}
        >
          {isLogLoading
            ? "Logging..."
            : isLogged
            ? "Success"
            : isPostError
            ? "Error - try again"
            : null}
        </p>
      </div>

      {showPostDetails ? (
        <div className={`flex flex-col items-right my-3`}>
          <PostInput setTitle={setTitle} setDescription={setDescription} />
          <button className={`${styles.button} w-full mb-2 ${!chosenExercises.length || !title || !description ? "opacity-30" : null}`} onClick={handlePostWorkout} disabled={!chosenExercises.length || !title || !description}>
            Post
          </button>
          <p className="text-Red italic">{!title || !description ? 'Please provide both a title and description' : null}</p>
        </div>
      ) : null}

      <div className="z-1 mt-5">
        <ChosenExercisesContainer
          setChosenExercises={setChosenExercises}
          chosenExercises={chosenExercises}
          workoutData={workoutData}
          setWorkoutData={setWorkoutData}
        />
      </div>
    </div>
  );
};
