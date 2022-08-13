import React from 'react'
import './Contacts.css'
import { Friends } from '../Friends'
import { IconNewRoom } from '../Icons/IconNewRoom'
import { IconPublicationActions } from '../Icons/IconPublicationActions'

function Contacts () {
  return (
    <section className='container-contacts position-fixed end-0 d-none d-lg-flex flex-column justify-content-start align-items-center pt-3 pb-5'>
      <div className='d-flex justify-content-between align-items-center w-100 p-3'>
        <h2>Contactos</h2>
        <div className='d-flex align-items-center gap-4'>
          <IconNewRoom />
          <i class='fa-solid fa-magnifying-glass'></i>
          <IconPublicationActions />
        </div>
      </div>
      <Friends
        name='Elon Musk'
        profilePicture='https://source.unsplash.com/random/1'
      />
      <Friends
        name='Mark Zuckerberg'
        profilePicture='https://source.unsplash.com/random/2'
      />
      <Friends
        name='Freddy Vega'
        profilePicture='https://source.unsplash.com/random/3'
      />
      <Friends
        name='Santi Siri'
        profilePicture='https://source.unsplash.com/random/4'
      />
      <Friends
        name='Marcos Galperin'
        profilePicture='https://source.unsplash.com/random/12'
      />
      <Friends
        name='Mateo Salvatto'
        profilePicture='https://source.unsplash.com/random/13'
      />
      <Friends
        name='Estefany Aguilar'
        profilePicture='https://source.unsplash.com/random/5'
      />
      <Friends
        name='Rocio Belén Osorio'
        profilePicture='https://source.unsplash.com/random/6'
      />
      <Friends
        name='Máximiliano Acosta'
        profilePicture='https://source.unsplash.com/random/7'
      />
      <Friends
        name='Ruben Moreno'
        profilePicture='https://source.unsplash.com/random/8'
      />
      <Friends
        name='Rosa Suarez'
        profilePicture='https://source.unsplash.com/random/9'
      />
    </section>
  )
}

export { Contacts }
