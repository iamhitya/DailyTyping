import type { NextPage } from 'next'
import styles from '../styles/index.module.scss'
import { Words } from '../components/Words'
import { KeyStats } from '../components/Keyboard'
import { useAppState } from '../lib/state'
import Head from 'next/head'
import { Nav } from '../components/Nav'
import { Loader } from '../components/Loader'
import { DynamicIsland } from '../components/DynamicIsland'
import { useData } from '../hooks/useData'
import { useKeys } from '../hooks/useKeys'
import { useTypingStarted } from '../hooks/useTyping'
import { useLocalStorage } from '../lib/localStorage'
import { useState } from 'react'

const AppHead = (
  <Head>
    <title>DailyTyping</title>
    <meta name="theme-color" content="#0a0b1e" />
    <meta
      name="description"
      content="DailyTyping - A minimal, premium typing experience."
    />
    <meta
      name="keywords"
      content="dailytyping, typing app, practice typing, cyberpunk, glassmorphism"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
)

const Home: NextPage = () => {
  const [state, dispatch] = useAppState()
  const [hasStarted, setHasStarted] = useState(false)

  const currentWord = state.words[state.progress.wordIndex]
  const targetKey = currentWord ? currentWord[state.progress.charIndex] : ''

  // ignore typing when dynamic island is expanded
  const shouldIgnoreTyping = state.showThemes || state.showDataSelector || !hasStarted

  useData(state.dataName, dispatch)
  useKeys(targetKey, dispatch, state.soundEnabled, state.soundPack, shouldIgnoreTyping)
  useTypingStarted(state.typingStarted)
  useLocalStorage(state)

  if (!hasStarted) {
    return (
      <div className={styles.container}>
        {AppHead}
        <Nav />
        <div className={styles.landing}>
          <h1 className={styles.title}>DailyTyping</h1>
          <p className={styles.subtitle}>Build strong typing habits daily.</p>
          <button className={styles.startBtn} onClick={() => setHasStarted(true)}>
            Start Typing
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {AppHead}
      <DynamicIsland state={state} dispatch={dispatch} />

      {/* if there is data to show and no other data is being fetched */}
      {state.data.length && !state.fetchingData ? (
        <>
          <Words
            words={state.words}
            progress={state.progress}
            errorLocations={state.errorLocations}
          />
        </>
      ) : (
        <Loader />
      )}

      <KeyStats keyStats={state.keyStats} />

      <div className={styles.tips}>
        <kbd>enter</kbd> to reset / change
      </div>

      <Nav />
    </div>
  )
}

export default Home
