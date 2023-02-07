import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Context } from '../../context'
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
import { SiMessenger } from 'react-icons/si'
import { IoNotificationsSharp, IoAddSharp, IoMenuSharp } from 'react-icons/io5'
import { TiArrowSortedDown } from 'react-icons/ti'
import { AccountSettings } from '../AccountSettings'
import { ScreenAndAccessibility } from '../ScreenAndAccessibility'

function NavBar () {
  const {
    setOpenSearch,
    accountSettings,
    setAccountSettings,
    screenAndAccessibility
  } = useContext(Context)
  const stateLinks = {
    home: true,
    groups: false,
    watch: false,
    marketplace: false,
    games: false
  }
  const [stateLink, setStateLink] = useState(stateLinks)
  const handleClick = e => {
    const name = e.target.attributes.name.value
    switch (name) {
      case 'home':
        setStateLink({
          home: true,
          groups: false,
          watch: false,
          marketplace: false,
          games: false
        })
        break
      case 'groups':
        setStateLink({
          home: false,
          groups: true,
          watch: false,
          marketplace: false,
          games: false
        })
        break
      case 'watch':
        setStateLink({
          home: false,
          groups: false,
          watch: true,
          marketplace: false,
          games: false
        })
        break
      case 'marketplace':
        setStateLink({
          home: false,
          groups: false,
          watch: false,
          marketplace: true,
          games: false
        })
        break
      case 'games':
        setStateLink({
          home: false,
          groups: false,
          watch: false,
          marketplace: false,
          games: true
        })
        break
    }
  }
  return (
    <header className='px-2 position-fixed top-0 w-100 header'>
      <Navbar className='d-flex justify-content-between'>
        <div className='d-flex justify-content-center align-items-center'>
          <Navbar.Brand
            href='#home'
            className='d-inline mx-3'
            aria-label='Logotipo de la empresa Facebook'
          >
            <Logo />
          </Navbar.Brand>
          <IconSearch setOpenSearch={setOpenSearch} />
        </div>
        <div className='d-flex justify-content-between align-items-center w-100 h-100'>
          <div className='d-flex justify-content-end align-items-center w-100 navbar-nav-center'>
            <Nav
              className='d-none d-md-flex justify-content-between pe-4 mx-sm-0 w-100 main-navbar'
              defaultActiveKey='/'
            >
              <Nav.Link
                href='#home'
                eventKey='/'
                onClick={handleClick}
                aria-label='Ir a la página de inicio'
                className='icons-navbar'
              >
                <span name='home' />
                <IconHouse click={stateLink.home} />
              </Nav.Link>
              <Nav.Link
                href='#groups'
                onClick={handleClick}
                aria-label='Ir a la página de grupos'
                className='icons-navbar'
              >
                <span name='groups' />
                <IconUserGroup click={stateLink.groups} />
              </Nav.Link>
              <Nav.Link
                href='#watch'
                onClick={handleClick}
                aria-label='Ir a la página de ver videos'
                className='icons-navbar'
              >
                <span name='watch' />
                <IconWatch click={stateLink.watch} />
              </Nav.Link>
              <Nav.Link
                href='#markeplace'
                onClick={handleClick}
                aria-label='Ir a la página de compras'
                className='icons-navbar'
              >
                <span name='marketplace' />
                <IconMarketplace click={stateLink.marketplace} />
              </Nav.Link>
              <Nav.Link
                href='#games'
                onClick={handleClick}
                aria-label='Ir a la página de videojuegos'
                className='icons-navbar'
              >
                <span name='games' />
                <IconVideoGame click={stateLink.games} />
              </Nav.Link>
            </Nav>
          </div>
          <div className='d-flex justify-content-end alingn-items-center navbar-nav-end'>
            <Nav className='justify-content-between pe-4'>
              <Nav.Link
                href='#menu'
                id='menu'
                aria-label='Desplegar el menú'
                className='d-xl-none'
              >
                <IoMenuSharp />
              </Nav.Link>
              <Nav.Link
                href='#add-publication'
                aria-label='Agregar una publicación'
                className='d-xl-none'
              >
                <IoAddSharp />
              </Nav.Link>
              <Nav.Link
                href='#menu'
                aria-label='Desplegar el menú'
                className='d-none d-xl-flex'
              >
                <IconMenu />
              </Nav.Link>
              <Nav.Link
                href='#messenger'
                aria-label='Ir a la página de messenger'
              >
                <SiMessenger />
              </Nav.Link>
              <Nav.Link
                href='#notifications'
                aria-label='Abrir las notificaciones'
                id='notifications'
              >
                <IoNotificationsSharp />
              </Nav.Link>
              <Nav.Link
                href='#settings'
                aria-label='Desplegar las configuraciones de la cuenta'
                onClick={() => setAccountSettings(!accountSettings)}
              >
                <TiArrowSortedDown />
              </Nav.Link>
              {accountSettings && <AccountSettings />}
              {screenAndAccessibility && <ScreenAndAccessibility />}
            </Nav>
          </div>
        </div>
      </Navbar>
    </header>
  )
}

export { NavBar }
