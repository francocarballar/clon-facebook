import React, { useRef, useContext, useEffect, useState } from 'react'
import './Search.css'
import { Context } from '../../context'
import { useOutside } from '../../hooks/useOutside'
import { BsArrowLeftShort } from 'react-icons/bs'
import { ContainerSearchResults } from '../ContainerSearchResults'

function Search () {
  const { openSearch, setOpenSearch, savedUsers } = useContext(Context)
  const [searchPeople, setSearchPeople] = useState([])
  const searchRef = useRef(null)
  useOutside(searchRef, setOpenSearch)
  const inputSearchRef = useRef(null)
  useEffect(() => {
    if (inputSearchRef.current !== null) {
      inputSearchRef.current.focus()
    }
  }, [openSearch])
  const handleChange = e => {
    const name = e.target.value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
    const regex = new RegExp(name, 'i')
    const users = savedUsers.filter(user =>
      regex.test(user.name.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
    )
    users.sort((a, b) => a.name.localeCompare(b.name))
    setSearchPeople(users)
  }
  // TODO: Guardar en el localstorage las personas buscadas, creo que debería ejecutar esa lógica
  // dentro de la función handleChange
  return (
    <>
      {openSearch && (
        <div
          className='container-search fixed-top d-flex flex-column p-3'
          ref={searchRef}
          style={{ maxHeight: '100vh' }}
        >
          <label htmlFor='search w-100'>
            <button
              type='button'
              className='btn px-1'
              onClick={() => setOpenSearch(false)}
            >
              <BsArrowLeftShort />
            </button>
            <input
              type='text'
              className='search mx-2 px-4 fs-3'
              placeholder='Buscar en facebook'
              autoComplete='list'
              ref={inputSearchRef}
              onChange={handleChange}
            />
          </label>
          {searchPeople && searchPeople.length > 0 ? (
            <ContainerSearchResults searchPeople={searchPeople} />
          ) : (
            <ul className='d-flex justify-content-center align-items-center pt-4 ps-0 mb-0'>
              <p className='fs-3'>No hay búsquedas recientes</p>
            </ul>
          )}
        </div>
      )}
    </>
  )
}

export { Search }
