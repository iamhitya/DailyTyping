import { GithubIcon, LinkedInIcon, xIcon, SunIcon, MoonIcon } from './icons'
import styles from '../styles/Nav.module.scss'
import { memo } from 'react'
import { useThemeIndex } from '../hooks/useThemeIndex'

export const Nav = memo(function Nav() {
  const [themeIndex, setThemeIndex] = useThemeIndex()
  return (
    <nav className={styles.nav}>
      <div className={styles.appName}>dailytyping</div>
      
      <div className={styles.navActions}>
        <a
          href="https://www.linkedin.com/in/iamhitya/"
          target="_blank"
          rel="noreferrer"
          className={styles.linkedin}
          aria-label="Connect on LinkedIn"
        >
          {LinkedInIcon}
        </a>

        <a
          href="https://x.com/iamhitya"
          target="_blank"
          rel="noreferrer"
          className={styles.x}
          aria-label="X of the creator"
        >
          {xIcon}
        </a>

        <a
          href="https://github.com/iamhitya/dailytyping"
          target="_blank"
          rel="noreferrer"
          className={styles.github}
          aria-label="View on Github"
        >
          {GithubIcon}
        </a>

        <button
          onClick={() => setThemeIndex(themeIndex === 0 ? 1 : 0)}
          className={styles.themeToggle}
          aria-label="Toggle Theme"
        >
          {themeIndex === 0 ? SunIcon : MoonIcon}
        </button>
      </div>
    </nav>
  )
})
