import React, { useState } from 'react'
import './App.css'
import { NavBar } from '../NavBar'
import { Search } from '../Search'
import { Main } from '../Main'
import { Contacts } from '../Contacts'

function App () {
  const [openSearch, setOpenSearch] = useState(false)
  return (
    <>
      <NavBar setOpenSearch={setOpenSearch} />
      <Search openSearch={openSearch} setOpenSearch={setOpenSearch} />
      <div className='d-flex justify-content-between align-items-start'>
        <Main />
        <Contacts />
      </div>
    </>
  )
}

export { App }
