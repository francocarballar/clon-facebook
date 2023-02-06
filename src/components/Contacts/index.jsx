import React from 'react'
import './Contacts.css'
import { Friends } from '../Friends'
import { IconNewRoom } from '../Icons/IconNewRoom'
import { IconPublicationActions } from '../Icons/IconPublicationActions'
import { AiOutlineSearch } from 'react-icons/ai'
import { users } from '../../db/users'

function Contacts () {
  return (
    <section className='container-contacts position-fixed end-0 d-none d-lg-flex flex-column justify-content-start align-items-center pt-3 pb-5'>
      <div className='d-flex justify-content-between align-items-center w-100 p-3'>
        <h2>Contactos</h2>
        <div className='d-flex align-items-center gap-4'>
          <IconNewRoom />
          <AiOutlineSearch />
          <IconPublicationActions />
        </div>
      </div>
      {users.map(user => (
        <Friends
          key={user.id}
          name={user.name}
          profilePicture={user['profile-picture']}
        />
      ))}
    </section>
  )
}

export { Contacts }
