import React from 'react'
import './ContainerComment.css'
import { IconFace } from '../Icons/IconFace'
import { IconCamera } from '../Icons/IconCamera'
import { IconGif } from '../Icons/IconGif'
import { IconSticker } from '../Icons/IconSticker'

function ContainerComment () {
  return (
    <>
      <hr />
      <div className='d-flex flex-row justify-content-between align-items-center footer-div--comments'>
        <figure className='m-0 figure-profile-picture--comment'>
          <img
            loading='lazy'
            src='https://raw.githubusercontent.com/francocarballar/clon-de-google/master/assets/img/account.jpg'
            alt='Foto de perfil de Franco Carballar'
            className='profile-picture--comment'
          />
          <label className='online'>
            <p width='8px' height='8px' />
          </label>
        </figure>
        <div className='d-flex justify-content-between mx-3 px-3 py-2 container-comment'>
          <label htmlFor='comment'>
            <input
              type='text'
              placeholder='Escribe un comentario...'
              name='comment'
              id='comment'
              className='fs-4 bg-transparent px-2'
            />
          </label>
          <div className='d-flex gap-2 px-2'>
            <div className='container-icon-comment'>
              <IconFace />
            </div>
            <div className='container-icon-comment'>
              <IconCamera />
            </div>
            <div className='container-icon-comment'>
              <IconGif />
            </div>
            <div className='container-icon-comment'>
              <IconSticker />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { ContainerComment }
