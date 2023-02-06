import React, { useRef, useContext } from 'react'
import './AccountSettings.css'
import { Context } from '../../context'
import { useOutside } from '../../hooks/useOutside'
import { ContainerIcon } from '../ContainerIcon'
import { IconPublicationActions } from '../Icons/IconPublicationActions'
import { IconPostComments } from '../Icons/IconPostComments'
import { IconSignOff } from '../Icons/IconSignOff'
import { Avatar } from '../Avatar'
import { IoSettingsSharp, IoHelpCircleSharp, IoMoon } from 'react-icons/io5'

function AccountSettings () {
  const { setAccountSettings, user } = useContext(Context)
  const accountSettingRef = useRef(null)
  useOutside(accountSettingRef, setAccountSettings)
  return (
    <div className='container_AccountSettings p-4' ref={accountSettingRef}>
      <ul className='w-100 p-0 d-flex flex-column gap-1'>
        <li className='d-flex justify-content-start align-items-center'>
          <Avatar
            alt={user.alt}
            profilePicture={user.img}
            online={false}
            size='35px'
          />
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
            <IoSettingsSharp />
          </ContainerIcon>
          <p className='my-0 ms-3 fs-4 fw-semibold'>
            Configuración y privacidad
          </p>
        </li>
        <li className='d-flex justify-content-start align-items-center'>
          <ContainerIcon>
            <IoHelpCircleSharp />
          </ContainerIcon>
          <p className='my-0 ms-3 fs-4 fw-semibold'>Ayuda y soporte técnico</p>
        </li>
        <li className='d-flex justify-content-start align-items-center'>
          <ContainerIcon>
            <IoMoon />
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
