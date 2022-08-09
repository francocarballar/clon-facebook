import React from 'react'
import './WhatAreYouThiking.css'
import { IconVideoCamera } from '../Icons/IconVideoCamera'
import { IconPhoto } from '../Icons/IconPhoto'
import { IconHappyEmoji } from '../Icons/IconHappyEmoji'

function WhatAreYouThiking () {
  return (
    <section className='post w-100 d-flex flex-column justify-content-center align-items-center py-3 px-3'>
      <div className='d-flex flex-row justify-content-between align-items-center w-100'>
        <figure className='m-0 figure-profile-picture--comment'>
          <img
            loading='lazy'
            src='https://raw.githubusercontent.com/francocarballar/clon-de-google/master/assets/img/account.jpg'
            alt='Foto de perfil de Franco Carballar'
            className='profile-picture--comment'
          />
        </figure>
        <div className='d-flex justify-content-between mx-3 px-3 py-2 container-comment'>
          <label htmlFor='comment' className='w-100'>
            <input
              type='text'
              placeholder='¿Qué estás pensando, Franco?'
              name='comment'
              id='comment'
              className='fs-4 bg-transparent px-2 w-100'
            />
          </label>
        </div>
      </div>
      <div className='d-flex flex-row mt-3'>
        <div className='d-flex justify-content-center align-items-center container-actions p-3'>
          <IconVideoCamera />
          <p className='mx-3 my-0 fs-5'>Video en vivo</p>
        </div>
        <div className='d-flex justify-content-center align-items-center container-actions p-3'>
          <IconPhoto />
          <p className='mx-3 my-0 fs-5'>Foto/Video</p>
        </div>
        <div className='justify-content-center align-items-center container-actions p-3 d-none d-md-flex'>
          <IconHappyEmoji />
          <p className='mx-3 my-0 fs-5'>Sentimiento/Actividad</p>
        </div>
      </div>
    </section>
  )
}

export { WhatAreYouThiking }
