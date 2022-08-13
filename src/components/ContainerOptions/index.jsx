import React from 'react'
import './ContainerOptions.css'
import { Options } from '../Options'
import { IconSearchFriends } from '../Icons/IconSearchFriends'
import { IconGroups } from '../Icons/IconGroups'
import { IconMarketplaceColor } from '../Icons/IconMarketplaceColor'
import { IconWatchColor } from '../Icons/IconWatchColor'
import { IconClockColor } from '../Icons/IconClockColor'
import { IconBookmarkColor } from '../Icons/IconBookmarkColor'
import { IconPagesColor } from '../Icons/IconPagesColor'
import { IconEventColor } from '../Icons/IconEventColor'
import { IconSeeMore } from '../Icons/IconSeeMore'

function ContainerOptions () {
  return (
    <section className='container-options position-fixed start-0 d-none d-xl-flex flex-column justify-content-start align-items-center p-4'>
      <Options text='Franco Carballar'>
        <figure className='m-0 figure-profile-picture--comment'>
          <img
            loading='lazy'
            src='https://raw.githubusercontent.com/francocarballar/clon-de-google/master/assets/img/account.jpg'
            alt='Foto de perfil de Franco Carballar'
            className='profile-picture profile-picture--contact'
          />
        </figure>
      </Options>
      <Options text='Buscar amigos'>
        <IconSearchFriends />
      </Options>
      <Options text='Grupos'>
        <IconGroups />
      </Options>
      <Options text='Marketplace'>
        <IconMarketplaceColor />
      </Options>
      <Options text='Watch'>
        <IconWatchColor />
      </Options>
      <Options text='Recuerdos'>
        <IconClockColor />
      </Options>
      <Options text='Guardado'>
        <IconBookmarkColor />
      </Options>
      <Options text='Páginas'>
        <IconPagesColor />
      </Options>
      <Options text='Eventos'>
        <IconEventColor />
      </Options>
      <Options text='Ver más'>
        <IconSeeMore />
      </Options>
    </section>
  )
}

export { ContainerOptions }
