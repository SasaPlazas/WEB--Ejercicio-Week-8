import React from 'react'
import { InputContext } from "../Context/inputContext";
import { useContext } from "react";

const GrandChild = () => {
  const { input } = useContext(InputContext);

  return (
    <div>
        <h3>I'm the GrandChild of profile, that means I'm the child of ProfileChild {input}</h3>
    </div>
  )
}

export default GrandChild
