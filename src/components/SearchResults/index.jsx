import React from 'react'
import './SearchResults.css'
import { Avatar } from '../Avatar'

function SearchResults ({ name, img }) {
  return (
    <li className='d-flex align-items-center w-100 gap-4 p-3 rounded-4 search-results'>
      <Avatar
        alt={`Foto de perfil de ${name}`}
        profilePicture={img}
        online={false}
        size='35px'
      />
      <h4 className='fs-4 fw-normal'>{name}</h4>
    </li>
  )
}

export { SearchResults }
