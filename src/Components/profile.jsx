import React from 'react'
import { InputContext } from '../Context/inputContext'
import { useContext } from 'react'


const Profile = () => {
  const { input } = useContext(InputContext);

  return (
    <div>
      <h3>Profile {input}</h3>
    </div>
  )
}

export default Profile
