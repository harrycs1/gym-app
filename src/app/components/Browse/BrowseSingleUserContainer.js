import styles from "@/app/style";
import Link from "next/link";

export const BrowseSingleUserContainer = ({ user }) => {
  return (
    <div className="w-full flex flex-col justify-center">
      <Link href={`/profile/${user.username}`}>
        <h2 className={`${styles.subtitle}`}>{user.username}</h2>
        <div className="w-fit overflow-hidden">
          <img src={user.image_url}></img>
        </div>
      </Link>
    </div>
  );
};
