import { useState, useContext, useEffect } from 'react'
import { Context } from '../context/index'

function utilsPublication ({ id, name, description }) {
  const { savedUsers, setSavedUsers } = useContext(Context)
  const [like, setLike] = useState(false)
  const [comment, setComment] = useState(false)
  const [statePublicationActions, setPublicationActions] = useState(false)
  const [desc, setDesc] = useState('')
  const alt = `Publicación creada por ${name}`
  useEffect(() => {
    if (description) {
      setDesc(description.replace(/\n/g, '<br>'))
    }
  }, [description, desc])

  useEffect(() => {
    if (savedUsers && id) {
      const user = savedUsers.find(user => user.id === id)
      console.log(user)
      const savedLiked = user.post.liked
      setLike(savedLiked)
    }
  }, [savedUsers])
  const clickLike = () => {
    if (id) {
      setLike(!like)
      const user = savedUsers.find(user => user.id === id)
      const updatedUser = { ...user, post: { ...user.post, liked: !like } }
      const i = savedUsers.findIndex(user => user.id === id)
      savedUsers.splice(i, 1, updatedUser)
      setSavedUsers([...savedUsers])
    }
  }
  return {
    comment,
    setComment,
    statePublicationActions,
    setPublicationActions,
    like,
    clickLike,
    alt,
    desc
  }
}

export { utilsPublication }
