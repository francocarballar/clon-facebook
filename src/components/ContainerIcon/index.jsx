import React from 'react'
import './ContainerIcon.css'

function ContainerIcon ({ children }) {
  return (
    <div className='d-flex justify-content-center align-items-center container-icons'>
      {children}
    </div>
  )
}

export { ContainerIcon }
