import React from 'react'
import './PublicationActions.css'
import { IconBookmark } from '../Icons/IconBookmark'
import { IconNotification } from '../Icons/IconNotification'
import { IconInsertCode } from '../Icons/IconInsertCode'
import { IconHide } from '../Icons/IconHide'
import { IconClock } from '../Icons/IconClock'
import { IconStopFollowing } from '../Icons/IconStopFollowing'
import { IconReport } from '../Icons/IconReport'

function PublicationActions () {
  return (
    <div className='container_publicationActions p-4'>
      <ul className='w-100 p-0 d-flex flex-column gap-1'>
        <li className='d-flex justify-content-start align-items-center'>
          <IconBookmark />
          <p className='my-0 ms-3 fs-4 fw-semibold'>Guardar enlace</p>
        </li>
        <hr className='m-2' />
        <li className='d-flex justify-content-start align-items-center'>
          <IconNotification />
          <p className='my-0 ms-3 fs-4 fw-semibold'>
            Activar notificaciones de esta publicación
          </p>
        </li>
        <li className='d-flex justify-content-start align-items-center'>
          <IconInsertCode />
          <p className='my-0 ms-3 fs-4 fw-semibold'>Insertar</p>
        </li>
        <hr className='m-2' />
        <li className='d-flex justify-content-start align-items-center'>
          <IconHide />
          <p className='my-0 ms-3 fs-4 fw-semibold'>Ocultar publicación</p>
        </li>
        <li className='d-flex justify-content-start align-items-center'>
          <IconClock />
          <p className='my-0 ms-3 fs-4 fw-semibold'>
            Ocultar a durante 30 días
          </p>
        </li>
        <li className='d-flex justify-content-start align-items-center'>
          <IconStopFollowing />
          <p className='my-0 ms-3 fs-4 fw-semibold'>Dejar de seguir a</p>
        </li>
        <li className='d-flex justify-content-start align-items-center'>
          <IconReport />
          <p className='my-0 ms-3 fs-4 fw-semibold'>Reportar publicación</p>
        </li>
      </ul>
    </div>
  )
}

export { PublicationActions }
