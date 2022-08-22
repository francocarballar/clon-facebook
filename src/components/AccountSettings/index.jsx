import React, { useRef, useEffect } from 'react'
import './AccountSettings.css'
import { ContainerIcon } from '../ContainerIcon'
import { IconPublicationActions } from '../Icons/IconPublicationActions'
import { IconPostComments } from '../Icons/IconPostComments'
import { IconSignOff } from '../Icons/IconSignOff'

function AccountSettings ({ setAccountSettings }) {
  function useOutsideAlerter (ref) {
    useEffect(() => {
      function handleClickOutside (event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setAccountSettings(false)
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
    <div className='container_AccountSettings p-4' ref={wrapperRef}>
      <ul className='w-100 p-0 d-flex flex-column gap-1'>
        <li className='d-flex justify-content-start align-items-center'>
          <figure className='m-0 figure-profile-picture--comment'>
            <img
              loading='lazy'
              src='https://raw.githubusercontent.com/francocarballar/clon-de-google/master/assets/img/account.jpg'
              alt='Foto de perfil de Franco Carballar'
              className='profile-picture--comment'
            />
          </figure>
          <div className='d-flex flex-column'>
            <p className='my-0 ms-3 fs-4 fw-semibold'>Franco Carballar</p>
            <p className='my-0 ms-3 fs-5 fw-semibold view-profile'>
              Ver perfil
            </p>
          </div>
        </li>
        <hr className='m-2' />
        <li className='d-flex justify-content-start align-items-center'>
          <ContainerIcon>
            <IconPublicationActions />
          </ContainerIcon>
          <p className='my-0 ms-3 fs-4 fw-semibold'>Cambiar de perfil</p>
        </li>
        <li className='d-flex justify-content-start align-items-center'>
          <ContainerIcon>
            <i class='fa-solid fa-gear'></i>
          </ContainerIcon>
          <p className='my-0 ms-3 fs-4 fw-semibold'>
            Configuración y privacidad
          </p>
        </li>
        <li className='d-flex justify-content-start align-items-center'>
          <ContainerIcon>
            <i class='fa-solid fa-circle-question'></i>
          </ContainerIcon>
          <p className='my-0 ms-3 fs-4 fw-semibold'>Ayuda y soporte técnico</p>
        </li>
        <li className='d-flex justify-content-start align-items-center'>
          <ContainerIcon>
            <i class='fa-solid fa-moon'></i>
          </ContainerIcon>
          <p className='my-0 ms-3 fs-4 fw-semibold'>Pantalla y accesibilidad</p>
        </li>
        <li className='d-flex justify-content-start align-items-center'>
          <ContainerIcon>
            <IconPostComments />
          </ContainerIcon>
          <p className='my-0 ms-3 fs-4 fw-semibold'>Enviar comentarios</p>
        </li>
        <li className='d-flex justify-content-start align-items-center'>
          <ContainerIcon>
            <IconSignOff />
          </ContainerIcon>
          <p className='my-0 ms-3 fs-4 fw-semibold'>Cerrar sesión</p>
        </li>
      </ul>
    </div>
  )
}

export { AccountSettings }
