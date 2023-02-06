import React from 'react'

function ContainerActions ({ liked, children, text, onClick, classContainer }) {
  return (
    <div
      className={`${classContainer} d-flex justify-content-center align-items-center container-actions p-3`}
      onClick={onClick}
    >
      {children}
      <p className={liked ? 'mx-3 my-0 fs-3 fw-semibold active' : 'mx-3 my-0'}>
        {text}
      </p>
    </div>
  )
}

export { ContainerActions }
