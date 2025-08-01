import { useMemo } from "react"
import { CENTER } from "../constants/camera"
import { DEPTH, MODELS_PER_LAYER, SPACING, WIDTH } from "../constants/shelf"
import type { Cargo, ShelfBounds } from "../interfaces"

export const useShelfBounds = ({ cargos }: { cargos: Cargo[] }): ShelfBounds => {
  const layers = useMemo(() => Math.ceil(cargos.length / MODELS_PER_LAYER), [cargos.length])

  return useMemo(() => {
    const width = WIDTH * SPACING
    const height = layers * (SPACING / 2)
    const depth = DEPTH * SPACING

    return {
      width,
      height,
      depth,
      center: CENTER,
      yOffset: -height / 2,
    }
  }, [layers])
}