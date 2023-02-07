import { useEffect, useContext } from 'react'
import { Context } from '../context'

const useDarkMode = () => {
  const { theme, setTheme } = useContext(Context)

  const prefersColorScheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }

  useEffect(() => {
    if (
      theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const html = document.documentElement
  const toggle = () => {
    html.classList.toggle('dark')
    if (html.classList.contains('dark')) {
      setTheme('dark')
    } else if (!html.classList.contains('dark')) {
      setTheme('light')
    }
  }

  const activated = () => {
    html.classList.remove('light')
    html.classList.add('dark')
    setTheme('dark')
  }

  const disabled = () => {
    html.classList.remove('dark')
    html.classList.add('light')
    setTheme('light')
  }
  return { prefersColorScheme, toggle, activated, disabled }
}

export { useDarkMode }
