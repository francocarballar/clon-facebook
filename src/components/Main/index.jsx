import React, { useContext } from 'react'
import './Main.css'
import { Context } from '../../context'
import { ContainerStories } from '../ContainerStories'
import { WhatAreYouThiking } from '../WhatAreYouThiking'
import { Publication } from '../Publication'
import { users } from '../../db/users'

function Main () {
  const { myPosts } = useContext(Context)
  return (
    <main
      id='main'
      className='d-flex flex-column justify-content-start align-items-center py-5 position-absolute'
    >
      <ContainerStories />
      <WhatAreYouThiking />
      {myPosts &&
        myPosts
          ?.sort((a, b) => {
            return b.id - a.id
          })
          .map(post => (
            <Publication
              key={post.id}
              id={post.id}
              name={post.name}
              profilePicture={post['profile-picture']}
              description={post.post.description}
            />
          ))}
      {users.map(user => (
        <Publication
          key={user.id}
          id={user.id}
          name={user.name}
          profilePicture={user['profile-picture']}
          description={user.post.description}
          image={user.post.img}
        />
      ))}
    </main>
  )
}

export { Main }
