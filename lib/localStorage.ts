import { useEffect } from 'react'
import { dataNameGroups } from '../components/DataSelector'
import { soundPacks } from './sounds'
import { State } from './types'

export function getLocalStorage(
  key: string,
  defaultValue: string,
  validator: (value: string) => boolean
): string {
  if (typeof window === 'undefined') return defaultValue
  try {
    const value = localStorage.getItem(key)
    if (value === null) return defaultValue
    if (!validator(value)) {
      // fix local storage value
      setLocalStorage(key, defaultValue)
      return defaultValue
    }
    return value
  } catch (error) {
    console.error('Error reading from localStorage:', error)
    return defaultValue
  }
}

export function setLocalStorage(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch (error) {
    console.error(error)
  }
}

// Local storage value validators
// If the values stored are not consistent with latest application code, ignore it and use the default value

const VALID_SOUND_PACK_IDS = new Set(soundPacks.map(pack => pack.id)) as Set<string>

export const validateSoundPack = (str: string): boolean => {
  return VALID_SOUND_PACK_IDS.has(str)
}

export const validateBoolean = (str: string): boolean => {
  return str === 'false' || str === 'true'
}

const VALID_DATA_NAMES: Set<string> = new Set()

dataNameGroups.forEach(group => {
  group.values.forEach(value => {
    VALID_DATA_NAMES.add(value)
  })
})

export const validateDataName = (str: string): boolean => {
  return VALID_DATA_NAMES.has(str)
}

// save the state items to local storage when they are updated

export function useLocalStorage(state: State) {
  useEffect(() => {
    setLocalStorage('dataName', state.dataName)
  }, [state.dataName])

  useEffect(() => {
    setLocalStorage('soundEnabled', String(state.soundEnabled))
  }, [state.soundEnabled])

  useEffect(() => {
    setLocalStorage('soundPack', String(state.soundPack))
  }, [state.soundPack])
}
