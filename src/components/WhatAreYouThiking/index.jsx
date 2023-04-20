import { useContext, useRef } from 'react'
import { Context } from '../../context'
import { useTextArea } from '../../hooks/useTextArea'
import { Avatar } from '../Avatar'
import { ContainerActions } from '../ContainerActions'
import { IconVideoCamera } from '../Icons/IconVideoCamera'
import { IconPhoto } from '../Icons/IconPhoto'
import { IconHappyEmoji } from '../Icons/IconHappyEmoji'
import { IoSendSharp } from 'react-icons/io5'

function WhatAreYouThiking () {
  const { user, myPosts, setMyPosts } = useContext(Context)
  const { handleKeyDown, handleChange, handleSubmitMobile } = useTextArea({
    array: myPosts,
    setArray: setMyPosts
  })

  const textAreaRef = useRef(null)
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }

  return (
    <section className='post w-100 d-flex flex-column justify-content-center align-items-center py-4 px-4 pb-2'>
      <div className='d-flex flex-row justify-content-between align-items-start w-100'>
        <Avatar
          alt={user.alt}
          profilePicture={user.img}
          online={false}
          size='35px'
        />
        <div className='d-flex justify-content-between align-items-end mx-3 px-3 py-2 container-comment'>
          <label htmlFor='publish-a-post' className='w-100'>
            <textarea
              placeholder={`¿Qué estás pensando, ${user.name?.split(' ')[0]}?`}
              name='publish-a-post'
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              className='fs-4 bg-transparent px-2 w-100 text-area'
              rows='1'
              ref={textAreaRef}
            />
          </label>
          {isMobile() && (<IoSendSharp
            size={20}
            onClick={e => {
              handleSubmitMobile(e)
              textAreaRef.current.value = ''
              textAreaRef.current.style.height = 'auto'
            }}
            className='mb-2'
            />)}
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
