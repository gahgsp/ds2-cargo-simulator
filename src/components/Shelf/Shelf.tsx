import type { ThreeElements } from "@react-three/fiber"
import { useMemo } from "react"
import { LARGE_ROTATION, LARGE_SCALE, ROTATION, SCALE } from "../../constants/model"
import { DEPTH, SPACING, WIDTH } from "../../constants/shelf"
import { useShelfBounds } from "../../hooks/useShelfBounds"
import type { Cargo } from "../../interfaces"
import LargeModel from "../../models/LargeModel"
import Model from "../../models/Model"

type GroupProps = ThreeElements['group']

type ShelfProps = GroupProps & {
  cargos: Cargo[]
  selectedCargo: Cargo | null
}

const Shelf = ({ cargos, selectedCargo, ...rest }: ShelfProps) => {
  /**
   * Defines the properties of shelf (models container).
   */
  const shelfBounds = useShelfBounds({ cargos })

  const models = useMemo(() => {
    const modelArray = []
    let count = 0

    for (let y = 0; y < shelfBounds.totalOfLayers; y++) {        // Height (layers)
      for (let x = 0; x < WIDTH; x++) {                          // Width
        for (let z = 0; z < DEPTH; z++) {                        // Depth
          if (count >= cargos.length) break

          const positionX = (x - 1) * SPACING
          const positionY = y * (SPACING / 2) + shelfBounds.yOffset
          const positionZ = (z - 1) * SPACING - 48

          if (selectedCargo?.id === cargos[count].id) {
            if (cargos[count].size === 'S') {
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
                <LargeModel
                  key={`transparent-${cargos[count].id}-${x}-${y}-${z}`}
                  position={[positionX, positionY, positionZ]}
                  scale={LARGE_SCALE}
                  rotation={LARGE_ROTATION}
                  isSelected={true}
                  isTransparent={true}
                />
              )
            }
          } else {
            if (cargos[count].size === 'S') {
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
            } else {
              modelArray.push(
                <LargeModel
                  key={`${cargos[count].id}-${x}-${y}-${z}`}
                  position={[positionX, positionY, positionZ]}
                  scale={LARGE_SCALE}
                  rotation={LARGE_ROTATION}
                  isSelected={false}
                  isTransparent={false}
                />
              )
            }
          }

          count++
        }
      }
    }

    return modelArray
  }, [shelfBounds.totalOfLayers, shelfBounds.yOffset, cargos, selectedCargo?.id])

  const selectedModel = useMemo(() => {
    if (!selectedCargo) return null

    if (selectedCargo.size === 'S') {
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
    }

    return (
      <LargeModel
        key={`selected-${selectedCargo.id}`}
        position={[0, -6, -16]} // Puts the Model in the very front of the Camera.
        scale={LARGE_SCALE}
        rotation={LARGE_ROTATION}
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