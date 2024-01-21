"use client";

import { LoadingSkeleton } from "@/app/components/General/LoadingSkeleton";
import { useEffect, useState } from "react";
import WorkoutCard from "../components/workouts/WorkoutCard";
import { ErrorPage } from '@/app/components/General/ErrorPage';
import { useUserContext } from "@/app/contexts/userContext";
import styles from "../style";
import Link from "next/link";

export default function WorkoutsPage() {
  const { user, setUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isWorkoutError, setIsWorkoutError] = useState(false);
  const [workouts, setWorkouts] = useState([]);
  const [inputIsHidden, setInputIsHidden] = useState('hidden');
  const [workoutName, setWorkoutName] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    fetch(`/api/workouts`)
    .then((res) => {
      if (!res.ok) { throw res }
      return res.json()
    })
    .then((data) => {
      if(!user){
        setWorkouts([])
      }else{
        const workoutData = data.filter(
          (workout) => workout.creator_id === user.user_id
        );
        setWorkouts(workoutData)
      }
    })
    .catch((error) => {
      setIsError(error)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, [])

  function handleNameInput(event) {
    setWorkoutName(event.target.value)
  }

  function handleToggleForm () {
    inputIsHidden === 'hidden' ? setInputIsHidden('') : setInputIsHidden('hidden');
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (!workoutName) {
      setIsWorkoutError('Workout name is empty.')

      setTimeout(() => {
        setIsWorkoutError('')
      }, 3000)
    
    } else if (!Object.keys(user).length) {
      setIsWorkoutError('Not logged in.')
      
      setTimeout(() => {
        setIsWorkoutError('')
      }, 3000)

    } else {
      setWorkouts([...workouts, { creator_id: user.user_id, workout_name: workoutName, workout_id: 'temp'}])

      fetch(`/api/workouts`, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          creator_id: user.user_id,
          workout_name: workoutName,
        })
      })
      .then((res) => {
        setWorkoutName('')
        if (!res.ok) { throw res }
        return res.json()
      })
      .then((data) => {
        setWorkouts([...workouts, data.newWorkout])
      })
      .catch((error) => {
        setIsError(error)
      })
      .finally(() => {
        setInputIsHidden(false)
        setIsLoading(false)
      })
    }
  }

  if (isError) return <ErrorPage error={Error}/>

  return (
    <section className={`flex justify-center`}>
      <div className={`${styles.bodySection}`}>
      <h1 className={`mb-5 ${styles.title}`}>My Workouts</h1>
        <div className={`pt-5 pb-10 flex flex-col justify-start`}>
          <div className="w-full mb-5 text-center">
            <ul>
            {isLoading ? <LoadingSkeleton/> : !workouts.length ? <p className="my-10 text-4xl pt-20 mt-10 text-LightPurple">Get started.</p> : null}
              {workouts.map((workout) => {
                return (
                  <li key={workout.workout_id}>
                    <WorkoutCard workout={workout} setWorkouts={setWorkouts} setIsDeleted={setIsDeleted} canDelete={true}/>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="w-full flex justify-center">
            {isDeleted ? <p>Workout deleted.</p>: null}
            {isWorkoutError ? <p>{isWorkoutError}</p> : null}
          </div>
          <div className={` flex gap-4 w-full ${!workouts.length ? `justify-center` : `justify-start`}`}>
            <div>
              <Link href="/browse">
                <button className={`${styles.button}`}>Browse</button>
              </Link>
            </div>
            <div className={`rounded-lg p-3 mt-2 w-fit text-platinum bg-DeepPurple overflow-hidden flex-column hover:bg-opacity-70`}>
              <button onClick={handleToggleForm}>Create</button>
              <form onSubmit={handleSubmitForm} className={`${inputIsHidden} flex mt-3 border rounded-xl overflow-hidden`}>
                <input value={workoutName} onChange={handleNameInput} placeholder="Workout name" className="py-1 px-2 w-[80%] h-9 text-DeepPurple"></input>
                <button className={`px-2 py-1 w-fit text-platinum bg-DeepPurple`}>Submit</button>
              </form>
            </div>
          </div>
          {isError ? <p>Problem loading workouts. Please try again.</p> : null}
        </div>
      </div>
    </section>
  );
}
