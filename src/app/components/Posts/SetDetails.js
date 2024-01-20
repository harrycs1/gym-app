import { useState } from "react"

export const SetDetails = ({exercise}) => {
  return (
    <>
      {exercise[1]} sets of {exercise[0]}
    </>
  )
}