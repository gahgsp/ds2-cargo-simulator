import { useRef } from "react"

export const useAudioEffect = (urls: string[]) => {
  const audioRefs = useRef<Map<string, HTMLAudioElement>>(new Map())

  const playAudio = () => {
    const randomUrl = urls[Math.floor(Math.random() * urls.length)]

    if (!audioRefs.current.has(randomUrl)) {
      audioRefs.current.set(randomUrl, new Audio(randomUrl))
    }

    const audio = audioRefs.current.get(randomUrl)!
    audio.currentTime = 0
    audio.play()
  }

  return playAudio
}