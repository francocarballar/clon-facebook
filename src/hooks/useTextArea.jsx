import { useContext, useState } from 'react'
import { Context } from '../context'

function useTextArea ({ array, setArray, id }) {
  const { user, myPosts, myComments, setMyComments } = useContext(Context)
  const [, setCommentFindById] = useState({})
  const [endOfTextarea, setEndOfTextarea] = useState(false)
  const handleKeyDown = e => {
    const key = e.key
    const value = e.target.value
    const isNotEmpty = value !== '' && !/^\n/.test(value) && !/^$/.test(value)
    if (e.shiftKey && key === 'Enter') {
      // e.target.value += '\n'
    } else if (key === 'Enter') {
      e.preventDefault()
      if (isNotEmpty) {
        if (!array) {
          if (array === myPosts) {
            const newPost = {
              id: 1,
              name: user.name,
              'profile-picture': user.img,
              post: {
                description: e.target.value
              }
            }
            setArray([newPost])
          }
          if (array === myComments) {
            const commentsByPublication = [
              {
                id,
                comments: [
                  {
                    comment: e.target.value
                  }
                ]
              }
            ]
            setMyComments(commentsByPublication)
            setMyComments(commentsByPublication)
            const find = commentsByPublication.find(
              comment => comment.id === id
            )
            setCommentFindById(find)
          }
        } else {
          if (array === myPosts) {
            const newPost = {
              id: array.length + 1,
              name: user.name,
              'profile-picture': user.img,
              post: {
                description: e.target.value
              }
            }
            setArray(array.concat(newPost))
          } else if (array === myComments) {
            const i = myComments.findIndex(comment => comment.id === id)
            if (i !== -1) {
              const newComment = {
                comment: e.target.value
              }
              const commentsByPublication = myComments.map(p => {
                if (p.id === id) {
                  return { ...p, comments: p.comments.concat(newComment) }
                }
                return p
              })
              setMyComments(commentsByPublication)
              const find = commentsByPublication.find(
                comment => comment.id === id
              )
              setCommentFindById(find)
            } else {
              const newComment = {
                id,
                comments: [
                  {
                    comment: e.target.value
                  }
                ]
              }
              const newsCommentsByPublication = myComments.concat(newComment)
              setMyComments(newsCommentsByPublication)
              const find = newsCommentsByPublication.find(
                comment => comment.id === id
              )
              setCommentFindById(find)
            }
          }
        }
      }
      e.target.value = ''
      setEndOfTextarea(false)
      e.target.style.height = 'auto'
    }

    if (key === 'Backspace') {
      e.target.style.height = 'auto'
    }
  }

  const handleChange = e => {
    e.target.style.height = 'auto'
    const lineBreak = e.target.value.includes('\n')
    if (e.target.textLength < 29 && !lineBreak) {
      setEndOfTextarea(false)
    }
    if (e.target.scrollHeight > e.target.offsetHeight) {
      setEndOfTextarea(true)
      const scrollHeight = e.target.scrollHeight
      e.target.style.height = `${scrollHeight}px`
    }
    if (e.target.value === '') {
      e.target.style.height = 'auto'
    }
  }
  return { handleKeyDown, handleChange, endOfTextarea }
}

export { useTextArea }
