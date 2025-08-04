import { Edges, type EdgesRef } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

interface FadingEdgesProps {
  isTransparent: boolean
}

const FadingEdges = ({ isTransparent }: FadingEdgesProps) => {
  const edgesRef = useRef<EdgesRef>(null)
  const elapsedRef = useRef<number>(0)

  useFrame((_, delta) => {
    if (!edgesRef.current) return
    elapsedRef.current += delta

    const rawOpacity = (Math.sin(elapsedRef.current * 2 * Math.PI * 0.5) + 1) / 2
    const intensity = 0.4 + 0.7 * rawOpacity

    const mat = edgesRef.current.material
    mat.color.setRGB(intensity, intensity, intensity)

    mat.opacity = 1
    mat.transparent = true
    if (!isTransparent) {
      mat.linewidth = 3
    }
    mat.needsUpdate = true
  })

  return (
    <Edges
      ref={edgesRef}
      // Magic numbers that at best looked acceptable for the blinking effect.
      threshold={isTransparent ? 145 : 45}
    />
  )
}

export default FadingEdges