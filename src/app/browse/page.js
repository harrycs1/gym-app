"use client";

import { BrowseUsersContainer } from "../components/Browse/BrowseUsersContainer";
import { BrowseWorkoutsContainer } from "../components/Browse/BrowseWorkoutsContainer";
import { LoadingSkeleton } from "../components/General/LoadingSkeleton";
import styles from "../style";
import { useEffect, useState } from "react";
import { useUserContext } from "@/app/contexts/userContext";

export default function BrowsePage() {
  const { user, setUser } = useUserContext();
  const [workouts, setWorkouts] = useState(null);
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showWorkouts, setShowWorkouts] = useState(true);

  useEffect(() => {
    Promise.all([fetch("/api/workouts"), fetch("/api/users")])
      .then(([res, res2]) => {
        return Promise.all([res.json(), res2.json()]);
      })
      .then(([workoutsData, usersData]) => {
        setIsLoading(false);
        setWorkouts(workoutsData);
        setUsers(usersData);
      });
  }, []);

  function handleShowContent(e) {
    setShowWorkouts(e.target.textContent === "Workouts");
  }

  if (isLoading) {
    return <LoadingSkeleton />;
  }
  
  return (
    <main className={`flex justify-center`}>
      <div className={`${styles.bodySection}`}>
        <h1 className={`mb-5 ${styles.title}`}>Community</h1>
        <div className="flex mb-5">
          <p
            className={`${styles.button} mr-5 ${showWorkouts ? "border-2 border-Lavender font-bold" : null}`}
            onClick={handleShowContent}
          >
            Workouts
          </p>
          <p
            onClick={handleShowContent}
            className={`${styles.button} ${!showWorkouts ? "border-2 border-Lavender font-bold" : null}`}
          >
            Users
          </p>
        </div>

        <div className="mb-10">
          {showWorkouts ? (
            <BrowseWorkoutsContainer workouts={workouts} />
          ) : (
            <BrowseUsersContainer users={users} />
          )}
        </div>
      </div>
    </main>
  );
}
