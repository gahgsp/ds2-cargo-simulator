import type { PositionedCargo } from "../../hooks/useCargoPositions"
import LargeModel from "../../models/LargeModel"
import Model from "../../models/Model"

type Props = {
  cargo: PositionedCargo
}

export const CargoModel = ({ cargo }: Props) => {
  const sharedProps = {
    key: cargo.key,
    position: cargo.position,
    scale: cargo.scale,
    rotation: cargo.rotation,
    isSelected: cargo.isSelected,
    isTransparent: cargo.isTransparent,
  }

  return cargo.size === 'L' ? (
    <LargeModel {...sharedProps} />
  ) : (
    <Model {...sharedProps} />
  )
}
