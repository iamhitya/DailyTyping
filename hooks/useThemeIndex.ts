import { useState } from 'react'

// bar color for each theme
// ideally it should be the same as background color - but some colors are not accepted by the browser
// in that case - pick something different

// if nothing works - set bg anyway

export const themes = [
  { name: 'Cyberpunk Dark', bar: '#0a0b1e' }, // 0
  { name: 'Cyberpunk Light', bar: '#f0f2f5' }, // 1
  { name: 'Glass Nature', bar: '#0f1c15' }, // 2
  { name: 'Midnight Void', bar: '#000000' } // 3
]

function getInitialTheme(): number {
  if (typeof window === 'undefined') return 0

  const valueFromLocalStorage = localStorage.getItem('theme')
  if (!valueFromLocalStorage) return 0

  const index = Number(valueFromLocalStorage)

  // if something weird is set - fix it
  if (!Number.isFinite(index) || index < 0 || index >= themes.length) {
    localStorage.setItem('theme', '0') // fix it if wrong
    return 0
  }

  return index
}

function applyTheme(themeIndex: number) {
  // Validate theme index
  if (themeIndex < 0 || themeIndex >= themes.length) {
    console.warn(`Invalid theme index: ${themeIndex}, defaulting to 0`)
    themeIndex = 0
  }

  // update the theme for the page
  document.body.setAttribute('data-theme', themeIndex.toString())

  // update meta theme color for address bar
  const meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement
  if (meta) {
    meta.setAttribute('content', themes[themeIndex].bar)
  }

  // save theme in local storage and state
  localStorage.setItem('theme', themeIndex.toString())
}

export function useThemeIndex() {
  const [themeIndex, setThemeIndex] = useState(getInitialTheme)

  const handleThemeChange = (newThemeIndex: number) => {
    setThemeIndex(newThemeIndex)
    applyTheme(newThemeIndex)
  }

  return [themeIndex, handleThemeChange] as const
}

// Initialize theme on load
if (typeof window !== 'undefined') {
  const initialTheme = getInitialTheme()
  applyTheme(initialTheme)
}
