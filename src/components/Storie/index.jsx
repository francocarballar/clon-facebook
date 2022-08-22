import React from 'react'
import './Storie.css'

function Storie ({ profilePicture, imgStorie, name, classFigure }) {
  return (
    <figure
      className={`position-relative d-flex justify-content-center ${classFigure}`}
    >
      <img
        src={imgStorie}
        className='img-fluid w-100 h-100'
        alt={`Historia de ${name}`}
      />
      <div className='position-absolute'>
        <img
          src={profilePicture}
          className='img-fluid profile-picture'
          alt={`Foto de perfil de ${name}`}
        />
      </div>
      <h4 className='fs-4 text-center fw-semibold position-absolute bottom-0 text-white pb-2 name-storie'>
        {name}
      </h4>
    </figure>
  )
}

export { Storie }
