import React, { useState, useContext, useEffect, useRef } from 'react'
import './ContainerComment.css'
import { Context } from '../../context'
import { useTextArea } from '../../hooks/useTextArea'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import { IconFace } from '../Icons/IconFace'
import { IconCamera } from '../Icons/IconCamera'
import { IconGif } from '../Icons/IconGif'
import { IconSticker } from '../Icons/IconSticker'

function ContainerComment ({ id }) {
  const { user, myComments, setMyComments } = useContext(Context)
  const [commentFindById, setCommentFindById] = useState({})
  const inputCommetRef = useRef(null)
  const { handleKeyDown, handleChange, endOfTextarea } = useTextArea({
    array: myComments,
    setArray: setMyComments,
    id
  })
  useEffect(() => {
    if (myComments) {
      const find = myComments.find(comment => comment.id === id)
      setCommentFindById(find)
    }
  })
  useEffect(() => {
    if (commentFindById) {
      inputCommetRef.current.focus()
    }
  }, [commentFindById])
  return (
    <>
      <hr />
      <div className='d-flex flex-column justify-content-start align-items-center footer-div--comments w-100'>
        {commentFindById?.comments && commentFindById.comments?.length > 0 ? (
          commentFindById.comments.map(comment => (
            <Comment
              key={`${comment.comment} by post with id ${commentFindById.id}`}
              comment={comment.comment}
            />
          ))
        ) : (
          <></>
        )}
        <div className='d-flex flex-row justify-content-start align-items-start w-100 px-3'>
          <Avatar alt={user.alt} profilePicture={user.img} online size='35px' />
          <div className='d-flex align-items-center ms-3 px-3 py-2 container-comment position-relative top-0 start-0'>
            <label
              htmlFor='comment'
              className={'w-100 me-3'}
              style={
                endOfTextarea
                  ? { marginBottom: '28px' }
                  : { marginBottom: '0px' }
              }
            >
              <textarea
                type='text'
                placeholder='Escribe un comentario...'
                name='comment'
                id='comment'
                className='fs-4 bg-transparent px-2 w-100 text-area'
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                ref={inputCommetRef}
                rows='1'
              />
            </label>
            <div
              className={
                endOfTextarea
                  ? 'd-flex gap-sm-2 px-2 position-absolute end-0'
                  : 'd-flex gap-sm-2 px-2'
              }
              style={{ bottom: '5px' }}
            >
              <div className='container-icon-comment'>
                <IconFace />
              </div>
              <div className='container-icon-comment'>
                <IconCamera />
              </div>
              <div className='container-icon-comment'>
                <IconGif />
              </div>
              <div className='container-icon-comment'>
                <IconSticker />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { ContainerComment }
