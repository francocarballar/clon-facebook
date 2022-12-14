import React, { useState } from 'react'
import './Publication.css'
import { ContainerActions } from '../ContainerActions'
import { IconPublicationActions } from '../Icons/IconPublicationActions'
import { IconLike } from '../Icons/IconLike'
import { IconLikeActive } from '../Icons/IconLikeActive'
import { IconComment } from '../Icons/IconComment'
import { IconShare } from '../Icons/IconShare'
import { ContainerComment } from '../ContainerComment'
import { PublicationActions } from '../PublicationActions'

function Publication ({ name, description, image }) {
  const alt = `Publicación creada por ${name}`
  const [like, setLike] = useState(true)
  const [likeActive, setLikeActive] = useState(false)
  const [stateStyleTextLike, setStyleTextLike] = useState({})
  const [commnet, setComment] = useState(false)
  const [statePublicationActions, setPublicationActions] = useState(false)
  const styleTextLike = {
    color: 'var(--bs-primary)'
  }
  const clickLike = () => {
    setLike(!like)
    setLikeActive(!likeActive)
    if (likeActive === false) {
      setStyleTextLike(styleTextLike)
    } else if (likeActive === true) {
      setStyleTextLike({})
    }
  }
  return (
    <>
      <article className='post w-100 d-flex flex-column justify-content-center align-items-center'>
        <header className='d-flex justify-content-start align-items-center w-100 p-4'>
          <div className='d-flex justify-content-start align-items-center w-100'>
            <figure>
              <img
                loading='lazy'
                src={image}
                alt={name}
                className='profile-picture'
              />
            </figure>
            <h4 className='mx-3 fs-2'>{name}</h4>
          </div>
          <div
            className='d-flex justify-content-center align-items-center container-publication-actions position-relative top-0'
            onClick={() => setPublicationActions(!statePublicationActions)}
          >
            <IconPublicationActions />
            {statePublicationActions && <PublicationActions />}
          </div>
        </header>
        <section className='d-flex flex-column justify-content-start align-items-center w-100'>
          <p className='fs-4 px-4'>{description}</p>
          <figure>
            <img loading='lazy' src={image} alt={alt} className='w-100' />
          </figure>
        </section>
        <hr />
        <footer className='d-flex flex-column justify-content-between align-items-center pb-4 w-100'>
          <div className='d-flex flex-row footer-div--actions'>
            <ContainerActions
              classContainer=''
              classP='text-actions'
              styleP={stateStyleTextLike}
              text='Me gusta'
              onClick={clickLike}
            >
              {like && <IconLike />}
              {likeActive && <IconLikeActive />}
            </ContainerActions>
            <ContainerActions
              classContainer=''
              classP='text-actions'
              text='Comentar'
              onClick={() => setComment(true)}
            >
              <IconComment />
            </ContainerActions>
            <ContainerActions
              classContainer=''
              classP='text-actions'
              text='Compartir'
            >
              <IconShare />
            </ContainerActions>
          </div>
          {commnet && <ContainerComment />}
        </footer>
      </article>
    </>
  )
}

export { Publication }
