import type { ThreeElements } from "@react-three/fiber"
import { useMemo } from "react"
import { LARGE_ROTATION, LARGE_SCALE, ROTATION, SCALE } from "../../constants/model"
import { useCargoPositions, type PositionedCargo } from "../../hooks/useCargoPositions"
import { useShelfBounds } from "../../hooks/useShelfBounds"
import type { Cargo } from "../../interfaces"
import { CargoModel } from "../CargoModel/CargoModel"

type GroupProps = ThreeElements['group']

type ShelfProps = GroupProps & {
  cargos: Cargo[]
  selectedCargo: Cargo | null
}

const Shelf = ({ cargos, selectedCargo, ...rest }: ShelfProps) => {
  const shelfBounds = useShelfBounds({ cargos })
  const positionedCargos = useCargoPositions(cargos, selectedCargo, shelfBounds)

  const selectedModel = useMemo(() => {
    if (!selectedCargo) return null

    const isLarge = selectedCargo.size === 'L'

    const props: PositionedCargo = {
      ...selectedCargo,
      key: `selected-${selectedCargo.id}`,
      position: [0, -6, -16],
      scale: isLarge ? LARGE_SCALE : SCALE,
      rotation: isLarge ? LARGE_ROTATION : ROTATION,
      isSelected: true,
      isTransparent: false,
    }

    return <CargoModel key={selectedCargo.id} cargo={props} />
  }, [selectedCargo])

  return (
    <group {...rest}>
      {positionedCargos.map(cargo => (
        <CargoModel key={cargo.key} cargo={cargo} />
      ))}
      {selectedModel}
    </group>
  )
}

export default Shelf
