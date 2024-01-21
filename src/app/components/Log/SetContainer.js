import { useState, useEffect } from "react";

export const SetContainer = ({ setSets, sets, index,  }) => {
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);

  function handleWeightChange(e) {
    setWeight(e.target.value >= 1 ? parseInt(e.target.value) : 0);
  }

  function handleRepsChange(e) {
    setReps(e.target.value >= 1 ? parseInt(e.target.value) : 0);
  }

  useEffect(() => {
    const copyArray = [...sets];
    copyArray[index] = { weight, reps };
    setSets(copyArray);
  }, [weight, reps]);

  return (
    <div className="flex justify-between md:justify-start md:gap-4 items-center mb-1">
      <div className="flex items-center justify-center w-9 bg-LightPurple rounded-md py-1.5 px-2 text-platinum">
        <p>{index + 1}</p>
      </div>
      <div className="flex items-center bg-LightPurple md:grow md:justify-around rounded-md gap-5 py-1 px-2">
        <div className="flex items-center gap-1.5">
          <p className="md:flex ">Weight:</p>
          <input
            className="w-10 text-DeepPurple bg-platinum rounded-md py-0.5 px-2"
            onChange={handleWeightChange}
          ></input>
          <p className="">kg</p>
        </div>
        <div className="flex items-center gap-1.5">
          <p className="">Reps:</p>
          <input
            className="w-10 text-DeepPurple bg-platinum rounded-md py-0.5 px-2"
            onChange={handleRepsChange}
          ></input>
        </div>
      </div>
    </div>
  );
};
