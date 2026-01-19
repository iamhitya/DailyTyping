import { HEATMAP_KEYS } from './keys'
import { KeyStatRecord } from './types'

export function getSpeed(words: number, time: number): number {
  return words === 0 || time === 0 ? 0 : Math.round((words / time) * 60 * 1000)
}

export function createEmptyKeyStatRecord(): KeyStatRecord {
  const value: KeyStatRecord = {}
  HEATMAP_KEYS.forEach(key => {
    value[key] = {
      count: 0,
      totalTime: 0
    }
  })

  return value
}

export function getRandomWords(data: string[], count: number) {
  if (!data || data.length === 0) return []

  const words = []
  let chars = 0

  while (chars < count) {
    const randomIndex = Math.floor(Math.random() * data.length)
    const word = data[randomIndex]
    if (word) {
      chars += word.length
      words.push(word + ' ')
    }
  }

  return words
}
