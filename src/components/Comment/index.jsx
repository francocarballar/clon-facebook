import React from 'react'
import './Comment.css'

function Comment ({ comment }) {
  const dataComment = {
    profilePicture:
      'https://raw.githubusercontent.com/francocarballar/clon-de-google/master/assets/img/account.jpg',
    name: 'Franco Carballar',
    comment: comment
  }
  return (
    <div className='d-flex justify-content-start align-items-start pt-2 pb-4'>
      <figure className='m-0 figure-profile-picture--comment'>
        <img
          loading='lazy'
          src={dataComment.profilePicture}
          alt='Foto de perfil de Franco Carballar'
          className='profile-picture--comment'
        />
      </figure>
      <div className='d-flex flex-column container-comment p-4 ms-3 comment'>
        <h4 className='fs-3'>{dataComment.name}</h4>
        <p className='fs-4'>{dataComment.comment}</p>
      </div>
    </div>
  )
}

export { Comment }
