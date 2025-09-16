import React from 'react'
import { InputContext } from "../Context/inputContext";
import { useContext } from "react";
  
const Footer = () => {
  const { input } = useContext(InputContext);

  return (
    <div>
      <h1>You are in the Footer, {input}</h1>
    </div>
  )
}

export default Footer
