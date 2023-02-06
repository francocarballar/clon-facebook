import React, { useState, useContext, useEffect } from 'react'
import './Publication.css'
import { Context } from '../../context'
import { Avatar } from '../Avatar'
import { ContainerActions } from '../ContainerActions'
import { IconPublicationActions } from '../Icons/IconPublicationActions'
import { IconLike } from '../Icons/IconLike'
import { IconLikeActive } from '../Icons/IconLikeActive'
import { IconComment } from '../Icons/IconComment'
import { IconShare } from '../Icons/IconShare'
import { ContainerComment } from '../ContainerComment'
import { PublicationActions } from '../PublicationActions'

function Publication ({ id, profilePicture, name, description, image }) {
  const { savedUsers, setSavedUsers } = useContext(Context)
  const [like, setLike] = useState(false)
  const [comment, setComment] = useState(false)
  const [statePublicationActions, setPublicationActions] = useState(false)
  const alt = `Publicación creada por ${name}`
  useEffect(() => {
    if (savedUsers) {
      const user = savedUsers.find(user => user.id === id)
      const savedLiked = user.post.liked
      setLike(savedLiked)
    }
  }, [savedUsers])
  const clickLike = () => {
    setLike(!like)
    const user = savedUsers.find(user => user.id === id)
    const updatedUser = { ...user, post: { ...user.post, liked: !like } }
    const i = savedUsers.findIndex(user => user.id === id)
    savedUsers.splice(i, 1, updatedUser)
    setSavedUsers([...savedUsers])
  }
  const desc = description.replace(/\n/g, '<br>')

  return (
    <>
      <article className='post w-100 d-flex flex-column justify-content-center align-items-center'>
        <header className='d-flex justify-content-start align-items-center w-100 p-4 pb-2'>
          <div className='d-flex justify-content-start align-items-center w-100'>
            <Avatar
              alt={`Foto de perfil de ${name}`}
              profilePicture={profilePicture}
              online={false}
              size='40px'
            />
            <h4 className='mx-3 fs-2'>{name}</h4>
          </div>
          <div
            className='d-flex justify-content-center align-items-center container-publication-actions position-relative top-0'
            onClick={() => setPublicationActions(!statePublicationActions)}
          >
            <IconPublicationActions />
            {statePublicationActions && (
              <PublicationActions
                setPublicationActions={setPublicationActions}
                name={name}
              />
            )}
          </div>
        </header>
        <section className='d-flex flex-column justify-content-start align-items-center w-100'>
          <p
            className='fs-4 px-4 w-100 mb-4'
            dangerouslySetInnerHTML={{ __html: desc }}
          />
          {image !== undefined && (
            <figure className='w-100 h-100'>
              <img
                loading='lazy'
                src={image}
                alt={alt}
                className='w-100 h-100'
                width='550px'
                height='413'
              />
            </figure>
          )}
        </section>
        <hr />
        <footer className='d-flex flex-column justify-content-between align-items-center pb-4 w-100'>
          <div className='d-flex flex-row justify-content-center fs-3 footer-div--actions'>
            <ContainerActions liked={like} text='Me gusta' onClick={clickLike}>
              {like ? <IconLikeActive /> : <IconLike />}
            </ContainerActions>
            <ContainerActions
              text='Comentar'
              onClick={() => setComment(!comment)}
            >
              <IconComment />
            </ContainerActions>
            <ContainerActions text='Compartir'>
              <IconShare />
            </ContainerActions>
          </div>
          {comment && <ContainerComment id={id} />}
        </footer>
      </article>
    </>
  )
}

export { Publication }
