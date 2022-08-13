import React from 'react'
import './Navbar.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Logo } from '../Logo'
import { IconSearch } from '../Icons/IconSearch'
import { IconHouse } from '../Icons/IconHouse'
import { IconUserGroup } from '../Icons/IconUserGroup'
import { IconWatch } from '../Icons/IconWatch'
import { IconMarketplace } from '../Icons/IconMarketplace'
import { IconVideoGame } from '../Icons/IconVideoGame'
import { IconMenu } from '../Icons/IconMenu'

function NavBar ({ setOpenSearch }) {
  return (
    <header className='px-2 sticky-top w-100 header'>
      <Navbar className='d-flex justify-content-between'>
        <div className='d-flex justify-content-center align-items-center'>
          <Navbar.Brand href='#home' className='d-inline mx-3'>
            <Logo />
          </Navbar.Brand>
          <IconSearch setOpenSearch={setOpenSearch} />
        </div>
        <div className='d-flex justify-content-end align-items-center w-100 h-100'>
          <Nav className='d-none d-md-flex justify-content-between w-100 pe-4 mx-sm-0 ms-lg-auto navbar-nav-center'>
            <Nav.Link href='#dos' className='icons-navbar active'>
              <IconHouse />
            </Nav.Link>
            <Nav.Link href='#tres' className='icons-navbar'>
              <IconUserGroup />
            </Nav.Link>
            <Nav.Link href='#cuatro' className='icons-navbar'>
              <IconWatch />
            </Nav.Link>
            <Nav.Link href='#cinco' className='icons-navbar'>
              <IconMarketplace />
            </Nav.Link>
            <Nav.Link href='#' className='icons-navbar'>
              <IconVideoGame />
            </Nav.Link>
          </Nav>
          <Nav className='justify-content-between pe-4'>
            <Nav.Link href='#dos' id='menu' className='d-xl-none'>
              <i className='fa-solid fa-bars' />
            </Nav.Link>
            <Nav.Link href='#tres' className='d-xl-none'>
              <i className='fa-solid fa-plus' />
            </Nav.Link>
            <Nav.Link href='#siete' className='d-none d-xl-flex'>
              <IconMenu />
            </Nav.Link>
            <Nav.Link href='#cuatro'>
              <i className='fa-brands fa-facebook-messenger' />
            </Nav.Link>
            <Nav.Link href='#cinco'>
              <i className='fa-solid fa-bell' />
            </Nav.Link>
            <Nav.Link href='#seis'>
              <i className='fa-solid fa-caret-down' />
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </header>
  )
}

export { NavBar }
