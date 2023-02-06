import React from 'react'
import { Provider } from '../../context'
import { NavBar } from '../NavBar'
import { Search } from '../Search'
import { ContainerOptions } from '../ContainerOptions'
import { Main } from '../Main'
import { Contacts } from '../Contacts'

function App () {
  return (
    <Provider>
      <NavBar />
      <Search />
      <div
        className='d-flex justify-content-between align-items-start position-relative'
        style={{ top: '50px' }}
      >
        <ContainerOptions />
        <Main />
        <Contacts />
      </div>
    </Provider>
  )
}

export { App }
