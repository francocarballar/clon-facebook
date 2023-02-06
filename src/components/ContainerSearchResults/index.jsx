import React from 'react'
import { SearchResults } from '../SearchResults'

function ContainerSearchResults ({ searchPeople }) {
  return (
    <div className='d-flex flex-column justify-content-center aling-items-center w-100 h-100 pt-4 ContainerSearchResults'>
      <h3 className='fs-3 fw-semibold'>Búsquedas recientes</h3>
      <ul
        className='d-flex flex-column justify-content-start align-items-center pt-2 pb-0 px-0 h-100 overflow-hidden'
        style={{ maxHeight: 'calc(100vh - 100px)' }}
      >
        {searchPeople &&
          searchPeople.map(person => (
            <SearchResults
              name={person.name}
              img={person['profile-picture']}
              key={person.id}
            />
          ))}
      </ul>
    </div>
  )
}

export { ContainerSearchResults }
