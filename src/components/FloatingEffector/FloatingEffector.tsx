import { useFrame } from "@react-three/fiber"
import { useRef, type ReactNode } from "react"
import type { Group } from "three"

interface FloatingEffectorProps {
  children: ReactNode
}

const FloatingEffector = ({ children }: FloatingEffectorProps) => {
  const ref = useRef<Group>(null)
  const elapsedRef = useRef<number>(0)

  useFrame((_, delta) => {
    if (!ref.current) return
    elapsedRef.current += delta

    const y = Math.sin(elapsedRef.current * 2 * Math.PI * 0.3) * 0.7 // Frequency: 0.3Hz, Amplitude: 0.7.
    ref.current.position.y = y
  })

  return <group ref={ref}>{children}</group>
}

export default FloatingEffector