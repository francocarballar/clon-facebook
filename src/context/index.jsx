import { createContext, useState, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { users } from '../db/users'

const Context = createContext(null)

const Provider = ({ children }) => {
  const [user, setUser] = useState({})
  const [savedUsers, setSavedUsers] = useLocalStorage('users')
  const [openSearch, setOpenSearch] = useState(false)
  const [accountSettings, setAccountSettings] = useState(false)
  const [screenAndAccessibility, setScreenAndAccessibility] = useState(false)
  const [myComments, setMyComments] = useLocalStorage('comments')
  const [myPosts, setMyPosts] = useLocalStorage('my-posts')
  const [theme, setTheme] = useLocalStorage('theme')
  useEffect(() => {
    setUser({
      name: 'Franco Carballar',
      img: 'https://res.cloudinary.com/francocarballar/image/upload/w_55,h_55,f_auto/v1673910641/Clon%20Facebook/profile-picture/franco-carballar_sdl9ws.webp',
      alt: 'Foto de perfil de Franco Carballar'
    })
    const time = setTimeout(() => {
      if (!savedUsers) {
        setSavedUsers(users)
      }
    }, 1000)
    return () => window.clearTimeout(time)
  }, [savedUsers])
  return (
    <Context.Provider
      value={{
        user,
        setUser,
        savedUsers,
        setSavedUsers,
        openSearch,
        setOpenSearch,
        accountSettings,
        setAccountSettings,
        screenAndAccessibility,
        setScreenAndAccessibility,
        myComments,
        setMyComments,
        myPosts,
        setMyPosts,
        theme,
        setTheme
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context, Provider }
