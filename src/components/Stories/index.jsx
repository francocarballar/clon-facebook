import React from 'react'
import './Stories.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Stories () {
  return (
    <section className='d-flex flex-column justify-content-center align-items-center bg-white w-100 container-stories'>
      <Navbar className='w-100 d-flex justify-content-center'>
        <Nav className='d-flex justify-content-center gap-5'>
          <Nav.Link href='#dos' className='icons-navbar active fs-4 fw-semibold'>
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
        <figure className='position-relative'>
          <img src='https://source.unsplash.com/random/12' className='img-fluid w-100 h-100' alt='Historias' />
          <div className='position-absolute'>
            <img src='https://source.unsplash.com/random/16' className='img-fluid profile-picture' alt='Foto de perfil' />
          </div>
        </figure>
        <figure className='position-relative'>
          <img src='https://source.unsplash.com/random/13' className='img-fluid w-100 h-100' alt='Historias' />
          <div className='position-absolute'>
          <img src='https://source.unsplash.com/random/17' className='img-fluid profile-picture ' alt='Foto de perfil' />
          </div>
        </figure>
        <figure className='position-relative'>
          <img src='https://source.unsplash.com/random/14' className='img-fluid w-100 h-100' alt='Historias' />
          <div className='position-absolute'>
          <img src='https://source.unsplash.com/random/18' className='img-fluid profile-picture' alt='Foto de perfil' />
          </div>
        </figure>
        <figure className='position-relative d-none d-sm-flex'>
          <img src='https://source.unsplash.com/random/15' className='img-fluid w-100 h-100' alt='Historias' />
          <div className='position-absolute'>
          <img src='https://source.unsplash.com/random/19' className='img-fluid profile-picture' alt='Foto de perfil' />
          </div>
        </figure>
      </div>
    </section>
  )
}

export { Stories }
