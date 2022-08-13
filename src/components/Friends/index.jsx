import React from 'react'
import './Friends.css'

function Friends ({ name, profilePicture }) {
  const alt = `Foto de perfil de ${name}`
  return (
    <div className='d-flex flex-row align-items-center p-3 w-100 container-friends'>
      <figure className='m-0 figure-profile-picture--comment'>
        <img
          loading='lazy'
          src={profilePicture}
          alt={alt}
          className='img-fluid profile-picture profile-picture--contact'
        />
        <label className='online'>
          <p width='8px' height='8px' />
        </label>
      </figure>
      <h4 className='ms-3 fs-4 fw-semibold'>{name}</h4>
    </div>
  )
}

export { Friends }
