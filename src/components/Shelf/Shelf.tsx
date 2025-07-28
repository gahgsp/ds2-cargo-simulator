import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useMemo } from "react"
import Model from "../../../Model"
import { CENTER, FOV } from "../../constants/camera"
import { ROTATION, SCALE } from "../../constants/model"
import { DEPTH, MODELS_PER_LAYER, SPACING, WIDTH } from "../../constants/shelf"
import type { Cargo } from "../../interfaces"
import { degreesToRadians } from "../../utils/numberHelpers"

interface ShelfProps {
  cargos: Cargo[]
  selectedCargo: Cargo | null
}

const Shelf = ({ cargos, selectedCargo }: ShelfProps) => {
  const totalLayers = useMemo(() => Math.ceil(cargos.length / MODELS_PER_LAYER), [cargos.length])

  /**
   * Defines the properties of shelf (models container).
   */
  const shelfBounds = useMemo(() => {
    // Calculate all the dimensions (X, Y and Z).
    const shelfWidth = WIDTH * SPACING
    const shelfHeight = totalLayers * (SPACING / 2)
    const shelfDepth = DEPTH * SPACING

    return {
      width: shelfWidth,
      height: shelfHeight,
      depth: shelfDepth,
      center: CENTER,
      yOffset: -shelfHeight / 2
    }
  }, [totalLayers])

  const cameraPosition: [number, number, number] = useMemo(() => {
    const [centerX, centerY, centerZ] = shelfBounds.center

    // We need to use the biggest dimension to be sure the camera is far enough to fit it.
    const maxDimension = Math.max(shelfBounds.width, shelfBounds.height)

    // This is the core formula for calculating the distance (Z) for the camera to fit the entire target object:
    // Z = (targetSize / 2) / tan(FOV / 2)
    const distance = (maxDimension / 2) / Math.tan(degreesToRadians(FOV) / 2)

    return [
      centerX,
      centerY + shelfBounds.height / 2,
      centerZ + distance // The Z axis is the depth. So having this axis summed up to the distance, we are straight out of the center of the models.
    ]
  }, [shelfBounds])

  const models = useMemo(() => {
    const modelArray = []
    let count = 0

    for (let y = 0; y < totalLayers; y++) {        // Height (layers)
      for (let x = 0; x < WIDTH; x++) {            // Width
        for (let z = 0; z < DEPTH; z++) {          // Depth
          if (count >= cargos.length) break

          const positionX = (x - 1) * SPACING
          const positionY = y * (SPACING / 2) + shelfBounds.yOffset
          const positionZ = (z - 1) * SPACING

          modelArray.push(
            <Model
              key={`${cargos[count].id}-${x}-${y}-${z}`}
              position={[positionX, positionY, positionZ]}
              scale={SCALE}
              rotation={ROTATION}
              isSelected={selectedCargo?.id === cargos[count].id}
            />
          )

          count++
        }
      }
    }

    return modelArray
  }, [totalLayers, cargos, shelfBounds.yOffset, selectedCargo?.id])

  return (
    <Canvas
      camera={{
        position: cameraPosition,
        fov: FOV
      }}
    >
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