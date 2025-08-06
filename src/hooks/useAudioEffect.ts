import { useRef } from "react"

export const useAudioEffect = (url: string) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playAudio = () => {

    if (!audioRef.current) {
      audioRef.current = new Audio(url)
    }

    const audio = audioRef.current
    // If an audio is already playing, we do not play anything else.
    if (!audio.paused && !audio.ended && audio.currentTime > 0) {
      return
    }

    audio.currentTime = 0
    audio.play()
  }

  return playAudio
}