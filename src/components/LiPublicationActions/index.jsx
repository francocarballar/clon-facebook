import React from 'react'

function LiPublicationActions ({ children, text }) {
  return (
    <li className='d-flex justify-content-start align-items-center'>
      {children}
      <p className='my-0 ms-3 fs-4 fw-semibold'>{text}</p>
    </li>
  )
}

export { LiPublicationActions }
