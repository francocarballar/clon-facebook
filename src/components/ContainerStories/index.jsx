import React from 'react'
import './ContainerStories.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Storie } from '../Storie'
import { users } from '../../db/users'

function ContainerStories () {
  const newStories = users.filter(user => user.storie)
  return (
    <section className='d-flex flex-column justify-content-center align-items-center bg-white w-100 container-stories'>
      <Navbar className='w-100 d-flex justify-content-center'>
        <Nav
          className='d-flex justify-content-center w-100 gap-4'
          defaultActiveKey='/'
        >
          <Nav.Link
            href='#stories'
            eventKey='/'
            aria-label='Ver las historias de mis amigos'
            className='icons-navbar fs-4 fw-semibold'
          >
            Historias
          </Nav.Link>
          <Nav.Link
            href='#reels'
            aria-label='Ver los reels de mis amigos'
            className='icons-navbar fs-4 fw-semibold'
          >
            Reels
          </Nav.Link>
          <Nav.Link
            href='#salas'
            aria-label='Ir a las salas de amigos'
            className='icons-navbar fs-4 fw-semibold'
          >
            Salas
          </Nav.Link>
        </Nav>
      </Navbar>
      <div className='d-flex gap-3 py-4 container-stories-img'>
        {newStories.map(user => (
          <Storie
            key={user.id}
            name={user.name}
            profilePicture={user['profile-picture']}
            imgStorie={user.storie.img}
          />
        ))}
      </div>
    </section>
  )
}

// d-none d-sm-flex

export { ContainerStories }
