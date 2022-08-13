import React from 'react'

function ContainerActions ({ classContainer, classP, styleP, children, text, onClick }) {
  const stylesContainer = `d-flex justify-content-center align-items-center container-actions p-3 ${classContainer}`
  const stylesP = `mx-3 my-0 ${classP}`
  return (
    <div className={stylesContainer} onClick={onClick}>
      {children}
      <p className={stylesP} style={styleP}>{text}</p>
    </div>
  )
}

export { ContainerActions }
