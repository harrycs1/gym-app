import { useState } from "react";
import styles from "@/app/style";

export const PostInput = ({setTitle, setDescription}) => {
  

  function handleChangeTitle(e){
    setTitle(e.target.value)
  }
  function handleChangeDescription(e){
    setDescription(e.target.value)
  }


  return (
    <div className="flex flex-col justify-center rounded-lg overflow-hidden bg-platinum">
      <div className="flex items-center gap-2 w-full">
        <input placeholder="Title" className="p-2 focus:outline-none w-full border-b border-platinum" onChange={handleChangeTitle}></input>
      </div>
      <div className="w-full">
        <textarea placeholder="Description" className="p-2 focus:outline-none resize-none w-full" onChange={handleChangeDescription}></textarea>
      </div>
    </div>
  );
};
