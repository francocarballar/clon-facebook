import React, { useContext } from 'react'
import { Context } from '../../context'
import { Avatar } from '../Avatar'

function Comment ({ comment }) {
  const { user } = useContext(Context)
  const desc = comment.replace(/\n/g, '<br>')
  return (
    <div className='d-flex justify-content-start align-items-start px-3 pt-2 pb-4 w-100'>
      <Avatar
        alt={user.alt}
        profilePicture={user.img}
        online={true}
        size='35px'
      />
      <div className='d-flex flex-column container-comment p-4 ms-3 w-100 comment'>
        <h4 className='fs-3'>{user.name}</h4>
        <p className='fs-4' dangerouslySetInnerHTML={{ __html: desc }} />
      </div>
    </div>
  )
}

export { Comment }
