import { useEffect, useState } from 'react'

const useThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  )

  useEffect(() => {
    const mqListener = ({ matches }: MediaQueryListEvent) => setIsDarkTheme(matches)
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')

    darkThemeMq.addEventListener('change', mqListener)
    return () => darkThemeMq.removeEventListener('change', mqListener)
  }, [])
  return isDarkTheme
}

export default process.env.NODE_ENV === 'test' ? () => false : useThemeDetector
