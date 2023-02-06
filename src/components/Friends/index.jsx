import React from 'react'
import './Friends.css'
import { Avatar } from '../Avatar'

function Friends ({ name, profilePicture }) {
  const alt = `Foto de perfil de ${name}`
  return (
    <div className='d-flex flex-row align-items-center p-3 w-100 container-friends'>
      <Avatar alt={alt} profilePicture={profilePicture} online size='30px' />
      <h3 className='ms-3 fs-4 fw-semibold'>{name}</h3>
    </div>
  )
}

export { Friends }
