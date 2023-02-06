import { useEffect } from 'react'

const useDarkMode = () => {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])
  const toggle = () => {
    const html = document.documentElement
    html.classList.toggle('dark')
    if (html.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark')
    } else if (!html.classList.contains('dark')) {
      localStorage.setItem('theme', 'light')
    }
  }
  return { toggle }
}

export { useDarkMode }
