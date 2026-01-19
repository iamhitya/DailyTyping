import { Howl } from 'howler'

function createSoundPackPlayer(pack: string, format: string, volume: number) {
  const clicks: Howl[] = []
  for (let i = 0; i < 6; i++) {
    clicks[i] = new Howl({
      src: `/sounds/${pack}/click${i + 1}.${format}`,
      volume,
      onloaderror: (id, error) => {
        console.error(`Failed to load sound: ${pack}/click${i + 1}.${format}`, error)
      }
    })
  }

  return () => {
    const i = Math.floor(Math.random() * 6)
    clicks[i]?.play()
  }
}

export function getSounds() {
  const error = new Howl({
    src: '/sounds/error.wav',
    volume: 0.3,
    onloaderror: (id, err) => {
      console.error('Failed to load error sound', err)
    }
  })
  return {
    packs: {
      nkCreams: createSoundPackPlayer('nkCreams', 'aac', 0.8),
      otemuBrowns: createSoundPackPlayer('otemuBrowns', 'aac', 0.8),
      holyPandas: createSoundPackPlayer('holyPandas', 'wav', 0.8)
    },
    error: () => error.play()
  }
}

type SoundPackInfo = {
  name: string
  id: SoundPack
  type: string
}

export const soundPacks: SoundPackInfo[] = [
  { name: 'NK Creams', id: 'nkCreams', type: 'Linear' },
  { name: 'Otemu Browns', id: 'otemuBrowns', type: 'Tactile' },
  { name: 'Holy Pandas', id: 'holyPandas', type: 'Tactile' }
]

export type Sounds = ReturnType<typeof getSounds>

export type SoundPack = keyof Sounds['packs']
