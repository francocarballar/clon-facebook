import React from 'react'
import './ContainerStories.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Storie } from '../Storie'

function ContainerStories () {
  return (
    <section className='d-flex flex-column justify-content-center align-items-center bg-white w-100 container-stories'>
      <Navbar className='w-100 d-flex justify-content-center'>
        <Nav className='d-flex justify-content-center gap-5'>
          <Nav.Link
            href='#dos'
            className='icons-navbar active fs-4 fw-semibold'
          >
            Historias
          </Nav.Link>
          <Nav.Link href='#tres' className='icons-navbar fs-4 fw-semibold'>
            Reels
          </Nav.Link>
          <Nav.Link href='#cuatro' className='icons-navbar fs-4 fw-semibold'>
            Salas
          </Nav.Link>
        </Nav>
      </Navbar>
      <div className='d-flex gap-3 p-4 container-stories-img'>
        <Storie
          name='Elon Musk'
          profilePicture='https://source.unsplash.com/random/1'
          imgStorie='https://source.unsplash.com/random/12'
          classFigure=''
        />
        <Storie
          name='Mark Zuckerberg'
          profilePicture='https://source.unsplash.com/random/2'
          imgStorie='https://source.unsplash.com/random/13'
          classFigure=''
        />
        <Storie
          name='Freddy Vega'
          profilePicture='https://source.unsplash.com/random/3'
          imgStorie='https://source.unsplash.com/random/14'
          classFigure=''
        />
        <Storie
          name='Santi Siri'
          profilePicture='https://source.unsplash.com/random/4'
          imgStorie='https://source.unsplash.com/random/15'
          classFigure='d-none d-sm-flex'
        />
      </div>
    </section>
  )
}

export { ContainerStories }
