import React, { useRef } from 'react'
import './PublicationActions.css'
import { useOutside } from '../../hooks/useOutside'
import { IconBookmark } from '../Icons/IconBookmark'
import { IconNotification } from '../Icons/IconNotification'
import { IconInsertCode } from '../Icons/IconInsertCode'
import { IconHide } from '../Icons/IconHide'
import { IconClock } from '../Icons/IconClock'
import { IconStopFollowing } from '../Icons/IconStopFollowing'
import { IconReport } from '../Icons/IconReport'
import { LiPublicationActions } from '../LiPublicationActions'

function PublicationActions ({ setPublicationActions, name }) {
  const publicationActionsRef = useRef(null)
  useOutside(publicationActionsRef, setPublicationActions)
  return (
    <div
      className='container_publicationActions p-4'
      ref={publicationActionsRef}
    >
      <ul className='w-100 p-0 d-flex flex-column gap-1'>
        <LiPublicationActions text='Guardar enlace'>
          <IconBookmark />
        </LiPublicationActions>
        <hr className='m-2' />
        <LiPublicationActions text='Activar notificaciones de esta publicación'>
          <IconNotification />
        </LiPublicationActions>
        <LiPublicationActions text='Insertar'>
          <IconInsertCode />
        </LiPublicationActions>
        <hr className='m-2' />
        <LiPublicationActions text='Ocultar publicación'>
          <IconHide />
        </LiPublicationActions>
        <LiPublicationActions text='Ocultar a durante 30 días'>
          <IconClock />
        </LiPublicationActions>
        <LiPublicationActions text={`Dejar de seguir a ${name}`}>
          <IconStopFollowing />
        </LiPublicationActions>
        <LiPublicationActions text='Reportar publicación'>
          <IconReport />
        </LiPublicationActions>
      </ul>
    </div>
  )
}

export { PublicationActions }
