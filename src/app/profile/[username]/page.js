"use client";
import { LoadingSkeleton } from "@/app/components/General/LoadingSkeleton";
import { useEffect, useState } from "react";
import { useUserContext } from "@/app/contexts/userContext";
import WorkoutCard from "../../components/workouts/WorkoutCard";
import { UserPostContainer } from "@/app/components/Posts/UserPosts";
import { useRouter } from "next/navigation";
import styles from "@/app/style";

export default function ProfilePage({params}) {
  const { user, setUser } = useUserContext();
  const [profileUser, setProfileUser] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [showPosts, setShowPosts] = useState(true)

  const router = useRouter();

  useEffect(() => {
    Promise.all([fetch(`/api/workouts`), fetch(`/api/posts`), fetch(`/api/users/profile/${params.username}`)])
      .then(([res, res2, res3]) => {
        return Promise.all([res.json(), res2.json(), res3.json()]);
      })
      .then(([workoutsData, postsData, userData]) => {
        setProfileUser(userData)
        const workoutData = workoutsData.filter(
          (workout) => workout.creator_id === userData.user_id
        );
        const postData = postsData.filter((post) => post.user_id === userData.user_id);
        setWorkouts(workoutData);
        setPosts(postData);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  const handleLogout = () => {
    setUser({});
    router.push("/");
  };

  const handleShowPosts = () => {
    setShowPosts(!showPosts)
  }

  return (
    <main className={`flex justify-center`}>
      <div className={`${styles.bodySection}`}>
        <div className="flex w-full justify-between items-end">
          <div className="h-fit flex items-end gap-3">
            <h1 className={`h-fit ${styles.title}`}>{profileUser.username}</h1>
            <div className="h-12">
              <img src={profileUser.image_url} className="h-full"></img>
            </div>
          </div>
          <div className="">
            {user.username === profileUser.username ? <button className={`${styles.button} bg-Pink`} onClick={handleLogout}>Logout</button>:null}
          </div>
        </div>
        <div className="pt-4 mb-10 md:columns-2 gap-10">
          <div className="w-full break-inside-avoid mb-10">
            <h2 className={`${styles.subtitle}`}>Workouts</h2>
            {workouts.map((workout) => {
              return (
                <div className="flex justify-start w-full" key={workout.workout_id}>
                  <WorkoutCard
                    canDelete={user.user_id === workout.creator_id}
                    workout={workout}
                    setIsDeleted={setIsDeleted}
                    setWorkouts={setWorkouts}
                  />
                </div>
              );
            })}
          </div>
          <div className="w-full break-inside-avoid">
            <h2 className={`${styles.subtitle}`}>Recent Posts</h2>
            <div className="rounded-2xl flex flex-col justify-center">
              {posts.map((post, index, array) => {
                const isNotLastChild = index !== array.length - 1 ? true : false;
                return (
                  <div key={post.post_id} className="flex justify-center mt-3">
                    <UserPostContainer
                      post={post}
                      isNotLastChild={isNotLastChild}
                    />
                  </div>
                );
              })}
              {/* {posts.length > 1 ? <hr className="text" /> : null} */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}