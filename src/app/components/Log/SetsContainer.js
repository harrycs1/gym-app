import styles from "@/app/style";
import { SetContainer } from "./SetContainer";

export const SetsContainer = ({ sets, setSets }) => {
  function handleAddSet(e) {
    setSets([...sets, { weight: 0, reps: 0 }]);
  }

  function handleDeleteSet(e) {
    const amendedSets = [...sets.slice(0, sets.length - 1)];

    setSets(amendedSets);
  }

  return (
    <div className="flex flex-col">
      <div>
        {sets.map((set, index) => {
          return (
            <div key={index} className="">
              <SetContainer
                sets={sets}
                setSets={setSets}
                index={index}
                handleDeleteSet={handleDeleteSet}
              />
            </div>
          );
        })}
      </div>

      <div className="flex gap-4 mt-1">
        <button className={`${styles.button} grow`} onClick={handleAddSet}>Add Set</button>
        <button
          className={`${styles.button} w-fit bg-Red ${
            sets.length === 1 ? "opacity-30" : null
          }`}
          onClick={handleDeleteSet}
          disabled={sets.length === 1}
        >
          Remove Set
        </button>
      </div>
    </div>
  );
};
