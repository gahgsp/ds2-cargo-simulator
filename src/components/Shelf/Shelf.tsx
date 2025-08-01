import type { ThreeElements } from "@react-three/fiber"
import { useMemo } from "react"
import Model from "../../../Model"
import { CENTER } from "../../constants/camera"
import { ROTATION, SCALE } from "../../constants/model"
import { DEPTH, MODELS_PER_LAYER, SPACING, WIDTH } from "../../constants/shelf"
import type { Cargo } from "../../interfaces"

type GroupProps = ThreeElements['group']

type ShelfProps = GroupProps & {
  cargos: Cargo[]
  selectedCargo: Cargo | null
}

const Shelf = ({ cargos, selectedCargo, ...rest }: ShelfProps) => {
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

  const models = useMemo(() => {
    const modelArray = []
    let count = 0

    for (let y = 0; y < totalLayers; y++) {        // Height (layers)
      for (let x = 0; x < WIDTH; x++) {            // Width
        for (let z = 0; z < DEPTH; z++) {          // Depth
          if (count >= cargos.length) break

          const positionX = (x - 1) * SPACING
          const positionY = y * (SPACING / 2) + shelfBounds.yOffset
          const positionZ = (z - 1) * SPACING - 48

          if (selectedCargo?.id === cargos[count].id) {
            modelArray.push(
              <Model
                key={`transparent-${cargos[count].id}-${x}-${y}-${z}`}
                position={[positionX, positionY, positionZ]}
                scale={SCALE}
                rotation={ROTATION}
                isSelected={true}
                isTransparent={true}
              />
            )
          } else {
            modelArray.push(
              <Model
                key={`${cargos[count].id}-${x}-${y}-${z}`}
                position={[positionX, positionY, positionZ]}
                scale={SCALE}
                rotation={ROTATION}
                isSelected={false}
                isTransparent={false}
              />
            )
          }

          count++
        }
      }
    }

    return modelArray
  }, [totalLayers, cargos, shelfBounds.yOffset, selectedCargo?.id])

  const selectedModel = useMemo(() => {
    if (!selectedCargo) return null

    return (
      <Model
        key={`selected-${selectedCargo.id}`}
        position={[0, -6, -16]} // Puts the Model in the very front of the Camera.
        scale={SCALE}
        rotation={ROTATION}
        isSelected={true}
        isTransparent={false}
      />
    )
  }, [selectedCargo])

  return (
    <group {...rest}>
      {models}
      {selectedModel}
    </group>
  )
}

export default Shelf