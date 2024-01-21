import { PostContainer } from "./PostContainer";
import styles from "@/app/style";

export const HomePostContainer = ({ posts }) => {
  
  return (
    <section className={`flex justify-center`}>
      <div className={`${styles.bodySection}`}>
        <h1 className={`${styles.title}`}>Home</h1>
        {posts.map((post, index, array) => {
          const isNotLastChild = index !== array.length - 1 ? true : false;
          return (
            <div key={post.post_id} className="flex justify-center">
              <PostContainer post={post} isNotLastChild={isNotLastChild} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
