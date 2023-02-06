import { useState, useEffect } from 'react'

function useLocalStorage (key) {
  const [storedValue, setStoredValue] = useState('')

  useEffect(() => {
    const initialState = () => {
      try {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : undefined
      } catch (error) {
        console.log(error)
        return undefined
      }
    }

    setStoredValue(initialState)

    const handleStorageChange = e => {
      if (e.key === key) {
        setStoredValue(JSON.parse(e.newValue))
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [key])

  const setValue = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

export { useLocalStorage }
