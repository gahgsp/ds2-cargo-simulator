import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Model from "../../../Model"
import { Suspense } from "react"
import type { Cargo } from "../../interfaces"

interface ShelfProps {
  cargos: Cargo[]
  selectedCargo: Cargo | null
}

const Shelf = ({ cargos, selectedCargo = null }: ShelfProps) => {
  const models = []
  const spacing = 16

  const modelsPerLayer = 3 * 3 // 9 per layer
  const totalLayers = Math.ceil(cargos.length / modelsPerLayer)

  let count = 0

  for (let y = 0; y < totalLayers; y++) {        // Height (layers)
    for (let x = 0; x < 3; x++) {                // Width
      for (let z = 0; z < 3; z++) {              // Depth
        if (count >= cargos.length) break

        const positionX = (x - 1) * spacing      // -16, 0, 16
        const positionY = y * (spacing / 2)      // 0, 8, 16, ...
        const positionZ = (z - 1) * spacing      // -16, 0, 16

        models.push(
          <Model
            key={`${x}-${y}-${z}`}
            position={[positionX, positionY, positionZ]}
            scale={[0.3, 0.3, 0.3]}
            rotation={[0, 0, 0]}
            isSelected={selectedCargo?.id === count}
          />
        )

        count++
      }
    }
  }

  return (
    <Canvas camera={{ position: [0, 25, 50], fov: 60 }} >
      <ambientLight intensity={1} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} />
      <Environment preset="city" />
      <Suspense fallback={null}>
        {models}
      </Suspense>
    </Canvas>
  )
}

export default Shelf