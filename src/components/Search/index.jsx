import React, { useRef, useEffect } from 'react'
import './Search.css'

function Search ({ openSearch, setOpenSearch }) {
  function useOutsideAlerter (ref) {
    useEffect(() => {
      function handleClickOutside (event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenSearch(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  return (
    <>
      {openSearch && (
        <div
          className='container-search fixed-top d-flex flex-column p-3'
          ref={wrapperRef}
        >
          <label htmlFor='search w-100'>
            <button
              type='button'
              className='btn mx-2'
              onClick={() => setOpenSearch(false)}
            >
              <i class='fa-solid fa-arrow-left'></i>
            </button>
            <input
              type='text'
              name='search'
              className='search mx-2 px-4 fs-3'
              placeholder='Buscar en facebook'
              autocumple='list'
            />
          </label>
          <ul className='d-flex justify-content-center align-items-center pt-4 ps-0 mb-0'>
            <p className='fs-3'>No hay busquedas recientes</p>
          </ul>
        </div>
      )}
    </>
  )
}

export { Search }
