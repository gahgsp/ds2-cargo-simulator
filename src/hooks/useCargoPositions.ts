import { useMemo, useRef } from "react"
import { LARGE_ROTATION, LARGE_SCALE, ROTATION, SCALE } from "../constants/model"
import { DEPTH, SPACING, WIDTH } from "../constants/shelf"
import type { Cargo } from "../interfaces"

export interface PositionedCargo extends Cargo {
  position: [number, number, number]
  scale: [number, number, number]
  rotation: [number, number, number]
  isTransparent: boolean
  isSelected: boolean
  key: string
}

export const useCargoPositions = (
  cargos: Cargo[],
  selectedCargo: Cargo | null,
  shelfBounds: { totalOfLayers: number; yOffset: number }
): PositionedCargo[] => {
  /**
   * If we have less than 9 Cargos to display, we randomize its positions.
   * This is to avoid a behavior where they are all organized in a single layer.
   * With this, we have a bit of "messy" effect while displaying the Shelf.
   */
  const shouldRandomizePositions = cargos.length <= 9

  const randomPositionsRef = useRef<[number, number, number][]>([])

  if (shouldRandomizePositions && randomPositionsRef.current.length !== cargos.length) {
    const possiblePositions: [number, number, number][] = []

    for (let y = 0; y < 2; y++) {
      for (let x = 0; x < WIDTH; x++) {
        for (let z = 0; z < DEPTH; z++) {
          const posX = (x - 1) * SPACING
          const posY = y * (SPACING / 2) + shelfBounds.yOffset
          const posZ = (z - 1) * SPACING - 48
          possiblePositions.push([posX, posY, posZ])
        }
      }
    }

    // Shuffle algorithm to leave some random positions among the possible positions.
    randomPositionsRef.current = possiblePositions.sort(() => Math.random() - 0.5).slice(0, cargos.length)
  }

  return useMemo(() => {
    const result: PositionedCargo[] = []

    if (shouldRandomizePositions) {
      for (let i = 0; i < cargos.length; i++) {
        const cargo = cargos[i]
        const randomPosition = randomPositionsRef.current[i]
        const isSelected = selectedCargo?.id === cargo.id
        const isLarge = cargo.size === 'L'

        result.push({
          ...cargo,
          position: randomPosition,
          scale: isLarge ? LARGE_SCALE : SCALE,
          rotation: isLarge ? LARGE_ROTATION : ROTATION,
          isTransparent: isSelected,
          isSelected,
          key: `${isSelected ? 'transparent-' : ''}${cargo.id}-${i}`,
        })
      }
    } else {
      let count = 0
      for (let y = 0; y < shelfBounds.totalOfLayers; y++) {
        for (let x = 0; x < WIDTH; x++) {
          for (let z = 0; z < DEPTH; z++) {
            if (count >= cargos.length) break

            const cargo = cargos[count]
            const posX = (x - 1) * SPACING
            const posY = y * (SPACING / 2) + shelfBounds.yOffset
            const posZ = (z - 1) * SPACING - 48
            const isSelected = selectedCargo?.id === cargo.id
            const isLarge = cargo.size === 'L'

            result.push({
              ...cargo,
              position: [posX, posY, posZ],
              scale: isLarge ? LARGE_SCALE : SCALE,
              rotation: isLarge ? LARGE_ROTATION : ROTATION,
              isTransparent: isSelected,
              isSelected,
              key: `${isSelected ? 'transparent-' : ''}${cargo.id}-${x}-${y}-${z}`,
            })

            count++
          }
        }
      }
    }

    return result
  }, [cargos, selectedCargo?.id, shelfBounds, shouldRandomizePositions])
}
