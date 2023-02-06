import { useContext } from 'react'
import { Context } from '../../context'
import { useTextArea } from '../../hooks/useTextArea'
import { Avatar } from '../Avatar'
import { ContainerActions } from '../ContainerActions'
import { IconVideoCamera } from '../Icons/IconVideoCamera'
import { IconPhoto } from '../Icons/IconPhoto'
import { IconHappyEmoji } from '../Icons/IconHappyEmoji'

function WhatAreYouThiking () {
  const { user, myPosts, setMyPosts } = useContext(Context)
  const { handleKeyDown, handleChange } = useTextArea({
    array: myPosts,
    setArray: setMyPosts
  })
  return (
    <section className='post w-100 d-flex flex-column justify-content-center align-items-center py-4 px-4 pb-2'>
      <div className='d-flex flex-row justify-content-between align-items-start w-100'>
        <Avatar
          alt={user.alt}
          profilePicture={user.img}
          online={false}
          size='35px'
        />
        <div className='d-flex justify-content-between mx-3 px-3 py-2 container-comment'>
          <label htmlFor='publish-a-post' className='w-100'>
            <textarea
              placeholder={`¿Qué estás pensando, ${user.name?.split(' ')[0]}?`}
              name='publish-a-post'
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              className='fs-4 bg-transparent px-2 w-100 text-area'
              rows='1'
            />
          </label>
        </div>
      </div>
      <div className='d-flex flex-row mt-3 fs-5 fw-semibold'>
        <ContainerActions text='Video en vivo'>
          <IconVideoCamera />
        </ContainerActions>
        <ContainerActions text='Foto/Video'>
          <IconPhoto />
        </ContainerActions>
        <ContainerActions
          classContainer='d-none d-sm-flex'
          text='Sentimiento/Actividad'
        >
          <IconHappyEmoji />
        </ContainerActions>
      </div>
    </section>
  )
}

export { WhatAreYouThiking }
