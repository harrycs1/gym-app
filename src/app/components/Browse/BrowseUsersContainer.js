import { BrowseSingleUserContainer } from "./BrowseSingleUserContainer";
import styles from "@/app/style";

export const BrowseUsersContainer = ({ users }) => {
  return (
    <section className={`columns-2 md:columns-4 gap-4`}>
      {users.map((user) => {
        return (
          <div key={user.user_id} className={`${styles.card2} h-fit w-full break-inside-avoid`}>
              <BrowseSingleUserContainer user={user} />
          </div>
        );
      })}
      <div>
      </div>
    </section>
  );
};
