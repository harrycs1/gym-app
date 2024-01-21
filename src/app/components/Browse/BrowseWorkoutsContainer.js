import { BrowseSingleContainer } from "./BrowseSingleContainer";
import styles from "@/app/style";
import { useState, useEffect } from "react";

export const BrowseWorkoutsContainer = ({ workouts }) => {
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    fetch(`/api/users`)
    .then((res) => {
      if (!res.ok) { throw res }
      return res.json()
    })
    .then((allUsers) => {
      setAllUsers(allUsers)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <section>
      {workouts.map((workout) => {
        const creator = allUsers.length ? allUsers.filter((user) => user.user_id === workout.creator_id)[0].username : null

        return (
          <div key={workout.workout_id} className={`${styles.card2} w-full`}>
            <BrowseSingleContainer workout={workout} creator={creator}/>
          </div>
        );
      })}
    </section>
  );
};
