import React from 'react'
import { InputContext } from "../Context/inputContext";
import { useContext } from "react";

const ProfileChild = () => {
  const { input } = useContext(InputContext);

  return (
    <div>
      <h3>Profile Child of the Profile {input}</h3>
    </div>
  )
}

export default ProfileChild
