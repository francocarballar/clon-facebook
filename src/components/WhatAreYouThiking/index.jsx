import React from 'react'
import './WhatAreYouThiking.css'
import { ContainerActions } from '../ContainerActions'
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
        <ContainerActions classContainer='' classP='fs-5 fw-semibold' text='Video en vivo'>
          <IconVideoCamera />
        </ContainerActions>
        <ContainerActions classContainer='' classP='fs-5 fw-semibold' text='Foto/Video'>
          <IconPhoto />
        </ContainerActions>
        <ContainerActions classContainer='d-none d-sm-flex' classP='fs-5 fw-semibold' text='Sentimiento/Actividad'>
          <IconHappyEmoji />
        </ContainerActions>
      </div>
    </section>
  )
}

export { WhatAreYouThiking }
