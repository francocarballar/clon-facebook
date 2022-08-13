import React from 'react'
import './Options.css'

function Options ({ children, text }) {
  return (
    <div className='d-flex flex-row align-items-center p-3 w-100 container-friends'>
      {children}
      <h4 className='m-0 ms-3 fs-4 fw-semibold'>{text}</h4>
    </div>
  )
}

export { Options }
