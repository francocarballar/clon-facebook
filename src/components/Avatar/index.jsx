import React from 'react'
import './Avatar.css'

function Avatar ({ alt, profilePicture, online = true, size }) {
  return (
    <figure className='m-0 figure-profile-picture--comment'>
      <img
        loading='lazy'
        src={profilePicture}
        alt={alt}
        className='rounded-circle'
        height={size}
        width={size}
      />
      {online && (
        <label className='online'>
          <div width='8px' height='8px' />
        </label>
      )}
    </figure>
  )
}

export { Avatar }
