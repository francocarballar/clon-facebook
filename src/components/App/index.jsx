import React, { useState } from 'react'
import './App.css'
import { NavBar } from '../NavBar'
import { Search } from '../Search'
import { Main } from '../Main'

function App () {
  const [openSearch, setOpenSearch] = useState(false)
  return (
    <>
      <NavBar setOpenSearch={setOpenSearch} />
      <Search openSearch={openSearch} setOpenSearch={setOpenSearch} />
      <Main />
    </>
  )
}

export { App }
