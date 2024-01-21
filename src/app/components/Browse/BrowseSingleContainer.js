import Link from "next/link";
import { useEffect, useState } from "react";
import { LoadingSkeleton } from "../General/LoadingSkeleton";
import axios from 'axios'
import { useUserContext } from "@/app/contexts/userContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "@/app/style";

export const BrowseSingleContainer = ({ workout, creator }) => {
  const { user, setUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(true);
  const [exercises , setExercises] = useState([])

  useEffect(() => {
    Promise.all([fetch(`/api/workouts/${workout.workout_id}`)])
      .then(([res]) => {
        return Promise.all([res.json()]);
      })
      .then(([excerisesData]) => {
        setExercises(excerisesData);
        setIsLoading(false);
      })
  }, []);

  const notify = (message) => {
    toast(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  function postToJunction(workoutId){
    exercises.map((exercise) => {
      const postData = {
        exercise_id: exercise.exercise_id,
        workout_id: workoutId
      }
      axios.post(`/api/workouts/${workoutId}`, postData).then(({data})=>{
      }).catch(err => {
        notify(err)
      })
    })

    notify('Workout Added Successfully')
  }

  function copyWorkout(){
    console.log(exercises)
    const postData = {
      workout_name: workout.workout_name,
      creator_id: user.user_id
    }
    console.log(postData)
    axios.post('/api/workouts', postData).then(({data: {newWorkout}})=>{
      console.log(newWorkout)
      postToJunction(newWorkout.workout_id)
    }).catch(({response: {data}})=>{
      notify(data)
    })
  }

  if (isLoading) {
    return (
      <h1 className="w-full pl-4 pt-5 pb-2 font-extrabold text-3xl text-DeepPurple mb-5 text-center opacity-70">
        Loading...
      </h1>
    );
  }

  return (
    <div>
      <div className="p-4 flex">
        <div className={`flex flex-col w-[80%] p-1`}>
          <Link href={`/workouts/${workout.workout_id}`}>
            <p className={`${styles.cardTitle} hover:underline`}>{workout.workout_name}</p>
          </Link>
          <Link href={`/profile/${creator}`} className="bg-LightPurple rounded-xl w-fit px-2 py-1 mt-2 h-fit">
            <p className="flex text-platinum text-sm font-light cursor-pointer hover:underline">{creator}</p>
          </Link>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <p className="h-fit font-bold text-right">Add to your workouts</p>
        </div>
        <div className="w-[25%] md:w-[15%] flex justify-end">
          <button onClick={copyWorkout}>
            <img className="h-full max-h-20 hover:scale-110 transition ease-in-out" src='/add.svg'></img>
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
